// Waits until App Store Connect has a VALID (processed) build newer than the given build number, then prints it.
//   node tools/asc-wait-build.mjs <last known build number> [max minutes]
import { asc, APP_ID } from './asc.mjs';
const last = parseInt(process.argv[2], 10);
const until = Date.now() + (parseInt(process.argv[3] || '30', 10)) * 60000;
while (Date.now() < until) {
  const r = await asc('GET', `/v1/builds?filter%5Bapp%5D=${APP_ID}&sort=-uploadedDate&limit=5&fields%5Bbuilds%5D=version,processingState,uploadedDate,expired`);
  const b = r.data.find(x => parseInt(x.attributes.version, 10) > last);
  if (b) {
    console.log('build', b.attributes.version, b.attributes.processingState, b.id, b.attributes.uploadedDate);
    if (b.attributes.processingState === 'VALID') process.exit(0);
    if (b.attributes.processingState === 'FAILED' || b.attributes.processingState === 'INVALID') process.exit(2);
  }
  await new Promise(r => setTimeout(r, 30000));
}
console.log('timeout waiting for a build newer than', last);
process.exit(3);
