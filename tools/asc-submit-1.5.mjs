// Submits App Store version 1.5 (build already attached) to App Review via the reviewSubmissions API.
//   node tools/asc-submit-1.5.mjs
import { asc, APP_ID } from './asc.mjs';
const VERSION_ID = '12e646f3-4cb2-401b-8de3-0ac883528185';

const v = await asc('GET', `/v1/appStoreVersions/${VERSION_ID}?fields%5BappStoreVersions%5D=versionString,appStoreState`);
console.log('version', v.data.attributes.versionString, v.data.attributes.appStoreState);
const b = await asc('GET', `/v1/appStoreVersions/${VERSION_ID}/build?fields%5Bbuilds%5D=version`);
if (!b.data) throw new Error('no build attached to version 1.5');
console.log('build', b.data.attributes.version);

// reuse an open draft submission if there is one
const subs = await asc('GET', `/v1/apps/${APP_ID}/reviewSubmissions?filter%5Bplatform%5D=IOS&limit=10`);
let sub = subs.data.find(s => s.attributes.state === 'READY_FOR_REVIEW');
if (!sub) {
  sub = (await asc('POST', '/v1/reviewSubmissions', { data: { type: 'reviewSubmissions', attributes: { platform: 'IOS' },
    relationships: { app: { data: { type: 'apps', id: APP_ID } } } } })).data;
  console.log('created submission', sub.id);
} else console.log('reusing draft submission', sub.id);

const items = await asc('GET', `/v1/reviewSubmissions/${sub.id}/items?limit=10`);
if (!items.data.length) {
  await asc('POST', '/v1/reviewSubmissionItems', { data: { type: 'reviewSubmissionItems', relationships: {
    reviewSubmission: { data: { type: 'reviewSubmissions', id: sub.id } },
    appStoreVersion: { data: { type: 'appStoreVersions', id: VERSION_ID } } } } });
  console.log('added version 1.5 to the submission');
}
const done = await asc('PATCH', `/v1/reviewSubmissions/${sub.id}`, { data: { type: 'reviewSubmissions', id: sub.id, attributes: { submitted: true } } });
console.log('submission state', done.data.attributes.state);
const after = await asc('GET', `/v1/appStoreVersions/${VERSION_ID}?fields%5BappStoreVersions%5D=appStoreState`);
console.log('version state', after.data.attributes.appStoreState);
