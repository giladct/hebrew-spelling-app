// Computes the next Android versionCode to use for a Play Console upload.
//
// The build previously derived this from github.run_number, on the assumption
// that it only ever increases. That broke once a manual/local upload pushed a
// versionCode (44) higher than what run_number had reached - every CI publish
// since has failed with "Version code N has already been used" because
// run_number was still catching up past numbers Play had already seen.
//
// Fixed properly here by asking Play Console itself for the highest
// versionCode across every track (production/beta/alpha/internal) and using
// max+1 - correct regardless of whether future uploads come from CI, a local
// build, or anywhere else.
import { google } from "googleapis";
import fs from "fs";

const PACKAGE_NAME = "hebrew_spelling.myapp";

const keyJson = process.env.PLAY_SERVICE_ACCOUNT_JSON_INLINE
  ? JSON.parse(process.env.PLAY_SERVICE_ACCOUNT_JSON_INLINE)
  : JSON.parse(fs.readFileSync(process.env.PLAY_SERVICE_ACCOUNT_JSON_PATH, "utf8"));

const auth = new google.auth.GoogleAuth({
  credentials: keyJson,
  scopes: ["https://www.googleapis.com/auth/androidpublisher"],
});

const androidpublisher = google.androidpublisher({ version: "v3", auth });

const editRes = await androidpublisher.edits.insert({ packageName: PACKAGE_NAME });
const editId = editRes.data.id;

let maxVersionCode = 0;
try {
  const tracks = await androidpublisher.edits.tracks.list({ packageName: PACKAGE_NAME, editId });
  for (const track of tracks.data.tracks ?? []) {
    for (const release of track.releases ?? []) {
      for (const vc of release.versionCodes ?? []) {
        maxVersionCode = Math.max(maxVersionCode, parseInt(vc, 10));
      }
    }
  }
} finally {
  await androidpublisher.edits.delete({ packageName: PACKAGE_NAME, editId });
}

const nextVersionCode = maxVersionCode + 1;
console.log(`Highest versionCode currently on Play Console: ${maxVersionCode}`);
console.log(`Next versionCode: ${nextVersionCode}`);

const outFile = process.env.GITHUB_OUTPUT;
if (outFile) {
  fs.appendFileSync(outFile, `next_version_code=${nextVersionCode}\n`);
}
