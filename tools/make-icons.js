// Regenerates every app icon and splash image from one square source icon (the Google Play icon).
//
//   node tools/make-icons.js store-assets/icon-512.png
//
// - Android legacy icons (mipmap-*/ic_launcher.png, ic_launcher_round.png) and the adaptive-icon
//   foreground; the adaptive background is a plain color (res/values/ic_launcher_background.xml) and
//   mipmap-anydpi-v26/*.xml insets the foreground 25% so a circle mask never cuts the camel or the word.
// - iOS AppIcon (1024, no alpha - App Store rejects transparent icons).
// - Splash screens (Android drawable*/splash.png, iOS Splash.imageset, resources/splash.png): the icon
//   centred on the icon's own background color, same pixel sizes as the files they replace.
// - resources/icon.png (1024) and docs/assets/icon.png (landing page).
// The source's background must be one flat color (sampled from its top-left pixel).
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const src = path.resolve(process.argv[2] || path.join(root, 'store-assets', 'icon-512.png'));
const res = path.join(root, 'android', 'app', 'src', 'main', 'res');
const DENSITY = { ldpi: 0.75, mdpi: 1, hdpi: 1.5, xhdpi: 2, xxhdpi: 3, xxxhdpi: 4 };

(async () => {
  const { data } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
  const bg = { r: data[0], g: data[1], b: data[2], alpha: 1 };
  const hex = '#' + [bg.r, bg.g, bg.b].map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
  console.log('background', hex);

  const icon = size => sharp(src).resize(size, size, { kernel: 'lanczos3' }).png().toBuffer();
  const write = async (file, buf) => { await fs.promises.writeFile(file, buf); console.log('  ', path.relative(root, file)); };

  // 1024 master
  await write(path.join(root, 'resources', 'icon.png'), await icon(1024));
  await write(path.join(root, 'ios', 'App', 'App', 'Assets.xcassets', 'AppIcon.appiconset', 'AppIcon-512@2x.png'),
    await sharp(await icon(1024)).flatten({ background: bg }).removeAlpha().png().toBuffer());
  await write(path.join(root, 'docs', 'assets', 'icon.png'), await icon(512));

  // Android
  for (const [d, k] of Object.entries(DENSITY)) {
    const dir = path.join(res, 'mipmap-' + d);
    const legacy = Math.round(48 * k), fg = Math.round(108 * k);
    await write(path.join(dir, 'ic_launcher.png'), await icon(legacy));
    const circle = Buffer.from(`<svg width="${legacy}" height="${legacy}"><circle cx="${legacy / 2}" cy="${legacy / 2}" r="${legacy / 2}" fill="#fff"/></svg>`);
    await write(path.join(dir, 'ic_launcher_round.png'),
      await sharp({ create: { width: legacy, height: legacy, channels: 4, background: bg } })
        .composite([{ input: await icon(Math.round(legacy * 0.78)), gravity: 'center' }, { input: circle, blend: 'dest-in' }])
        .png().toBuffer());
    await write(path.join(dir, 'ic_launcher_foreground.png'), await icon(fg));
    const oldBg = path.join(dir, 'ic_launcher_background.png');
    if (fs.existsSync(oldBg)) { fs.unlinkSync(oldBg); console.log('   removed', path.relative(root, oldBg)); }
  }
  const adaptive = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background" />
    <foreground>
        <inset android:drawable="@mipmap/ic_launcher_foreground" android:inset="25%" />
    </foreground>
</adaptive-icon>
`;
  for (const f of ['ic_launcher.xml', 'ic_launcher_round.xml']) await write(path.join(res, 'mipmap-anydpi-v26', f), adaptive);
  await write(path.join(res, 'values', 'ic_launcher_background.xml'),
    `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">${hex}</color>\n</resources>\n`);

  // Splash screens: every existing splash file keeps its size
  const splashFiles = [path.join(root, 'resources', 'splash.png')];
  for (const d of fs.readdirSync(res)) if (d.startsWith('drawable')) {
    const f = path.join(res, d, 'splash.png');
    if (fs.existsSync(f)) splashFiles.push(f);
  }
  const iosSplash = path.join(root, 'ios', 'App', 'App', 'Assets.xcassets', 'Splash.imageset');
  for (const f of fs.readdirSync(iosSplash)) if (f.endsWith('.png')) splashFiles.push(path.join(iosSplash, f));
  for (const f of splashFiles) {
    const { width, height } = await sharp(f).metadata();
    const size = Math.round(Math.min(width, height) * 0.4);
    await write(f, await sharp({ create: { width, height, channels: 4, background: bg } })
      .composite([{ input: await icon(size), gravity: 'center' }]).png().toBuffer());
  }
})().catch(e => { console.error(e); process.exit(1); });
