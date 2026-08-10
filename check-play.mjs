import { google } from 'googleapis';

const KEY_FILE = 'C:\\Users\\vanta\\Documents\\gilad\\api-project-779059994785-3f6dabdc9261.json';
const PACKAGE_NAME = 'hebrew_spelling.myapp';

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ['https://www.googleapis.com/auth/androidpublisher'],
});

const androidpublisher = google.androidpublisher({ version: 'v3', auth });

const editRes = await androidpublisher.edits.insert({ packageName: PACKAGE_NAME });
const editId = editRes.data.id;

const tracks = await androidpublisher.edits.tracks.list({ packageName: PACKAGE_NAME, editId });
console.log(JSON.stringify(tracks.data, null, 2));

await androidpublisher.edits.delete({ packageName: PACKAGE_NAME, editId });
