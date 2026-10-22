// Takes the Play Store screenshots from the running web build (python www/serve.py).
//
//   node tools/store-screenshots.js        -> store-assets/screens/{phone,tablet7,tablet10}-N-<name>.png
//
// Sizes match what Play accepts and what was uploaded before: phone 1236x2472, 7" tablet 1080x1920,
// 10" tablet 1800x3200. Each scene opens a stage and plays part of it (some answers given, a wrong
// pair open, ...) so the screenshot shows the game in action rather than an empty board.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const sharp = require('sharp');

const OUT = path.join(__dirname, '..', 'store-assets', 'screens');
const DEVICES = [
  { name: 'phone', viewport: { width: 412, height: 824 }, scale: 3 },       // 1236 x 2472
  { name: 'tablet7', viewport: { width: 540, height: 960 }, scale: 2 },     // 1080 x 1920
  // 600 css px wide so the app (max ~480px) fills the frame; 1067*3 = 3201 -> cropped to 3200
  { name: 'tablet10', viewport: { width: 600, height: 1067 }, scale: 3, crop: { width: 1800, height: 3200 } },
];
const stage = n => `.stageCard >> nth=${n - 1}`;   // DOM order = stage order

const SCENES = [
  ['home', async p => {}],
  ['camel', async p => {
    await p.click(stage(11));
    for (let i = 0; i < 3; i++) {                       // three right answers: camel half way
      const t = await p.evaluate(() => camelTarget);
      await p.locator('.camelOption', { hasText: new RegExp('^' + t + '$') }).click();
      await p.waitForTimeout(i < 2 ? 1500 : 450);
    }
  }],
  ['crossword', async p => {
    await p.click(stage(17));
    await p.evaluate(() => { xwIndex = 4; xwLoad(); });   // a 4-word puzzle
    for (let i = 0; i < 4; i++) {
      const exp = await p.evaluate(() => xwCells[xwSel].expected);
      await p.locator('.xwTile', { hasText: new RegExp('^' + exp + '$') }).first().click();
      await p.waitForTimeout(150);
    }
    await p.waitForTimeout(900);
  }],
  ['memory', async p => {
    await p.click(stage(15));
    await p.evaluate(async () => {                      // three matched pairs and one open card
      const keys = [...new Set(memCards.map(c => c.key))].slice(0, 3);
      for (const k of keys) for (const c of memCards.filter(c => c.key === k)) memFlip(c, c.el);
      const open = memCards.find(c => !c.matched && c.type === 'pic');
      memFlip(open, open.el);
    });
    await p.waitForTimeout(1200);
  }],
  ['sentence', async p => {
    await p.click(stage(13));
    const words = await p.evaluate(() => sentCur.words);
    await p.locator('#sentTray .sentChip', { hasText: new RegExp('^' + words[0] + '$') }).click();
    await p.waitForTimeout(400);
  }],
  ['build-word', async p => {
    await p.click(stage(4));
    await p.waitForTimeout(500);
  }],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  for (const d of DEVICES) {
    for (const [i, [name, play]] of SCENES.entries()) {
      const ctx = await browser.newContext({ viewport: d.viewport, deviceScaleFactor: d.scale, hasTouch: true });
      const page = await ctx.newPage();
      await page.addInitScript(() => { try { localStorage.clear(); } catch (e) {} });
      await page.goto('http://localhost:8181/');
      await page.waitForTimeout(600);
      await play(page);
      const file = path.join(OUT, `${d.name}-${i + 1}-${name}.png`);
      await page.screenshot({ path: file });
      if (d.crop) {
        const buf = await sharp(file).extract({ left: 0, top: 0, ...d.crop }).toBuffer();
        fs.writeFileSync(file, buf);
      }
      console.log(path.relative(process.cwd(), file));
      await ctx.close();
    }
  }
  await browser.close();
})();
