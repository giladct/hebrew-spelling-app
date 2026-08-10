import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const KEY_FILE = 'C:\\Users\\vanta\\Documents\\gilad\\api-project-779059994785-3f6dabdc9261.json';
const PACKAGE_NAME = 'hebrew_spelling.myapp';
const AAB_PATH = path.resolve('android/app/build/outputs/bundle/release/app-release.aab');
const TRACK = 'internal';

async function upload() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/androidpublisher'],
  });

  const androidpublisher = google.androidpublisher({ version: 'v3', auth });

  console.log('Creating edit...');
  const editRes = await androidpublisher.edits.insert({ packageName: PACKAGE_NAME });
  const editId = editRes.data.id;
  console.log(`Edit ID: ${editId}`);

  console.log('Uploading AAB...');
  const aabRes = await androidpublisher.edits.bundles.upload({
    packageName: PACKAGE_NAME,
    editId,
    media: {
      mimeType: 'application/octet-stream',
      body: fs.createReadStream(AAB_PATH),
    },
  });
  const versionCode = aabRes.data.versionCode;
  console.log(`Uploaded version code: ${versionCode}`);

  console.log(`Setting track: ${TRACK}...`);
  await androidpublisher.edits.tracks.update({
    packageName: PACKAGE_NAME,
    editId,
    track: TRACK,
    requestBody: {
      track: TRACK,
      releases: [{
        status: 'completed',
        versionCodes: [versionCode],
      }],
    },
  });

  console.log('Committing edit...');
  await androidpublisher.edits.commit({ packageName: PACKAGE_NAME, editId });
  console.log('Done! Version published to Play Store.');
}

upload().catch(err => {
  console.error('Error:', err.message || err);
  process.exit(1);
});
