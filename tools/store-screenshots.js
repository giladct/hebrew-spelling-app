// Takes the Play Store screenshots from the running web build (python serve.py).
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

const OUT = path.join(__dirname, '..', 'store-assets', process.argv.includes('--ios') ? 'screens-ios' : 'screens');
const PLAY_DEVICES = [
  { name: 'phone', viewport: { width: 412, height: 824 }, scale: 3 },       // 1236 x 2472
  { name: 'tablet7', viewport: { width: 540, height: 960 }, scale: 2 },     // 1080 x 1920
  // 600 css px wide so the app (max ~480px) fills the frame; 1067*3 = 3201 -> cropped to 3200
  { name: 'tablet10', viewport: { width: 600, height: 1067 }, scale: 3, crop: { width: 1800, height: 3200 } },
];
// App Store Connect: iPhone 6.7"/6.9" slot (1290 x 2796) and iPad 13" (2064 x 2752)
const IOS_DEVICES = [
  { name: 'iphone67', viewport: { width: 430, height: 932 }, scale: 3 },
  { name: 'ipad13', viewport: { width: 688, height: 918 }, scale: 3, crop: { width: 2064, height: 2752 } },
];
const DEVICES = process.argv.includes('--ios') ? IOS_DEVICES : PLAY_DEVICES;   // node tools/store-screenshots.js --ios
const stage = n => `.stageCard:has(.stageNum:text-is("${n}"))`;   // by the number shown (stage 23 sits after 18 in the DOM)
const BASE = process.env.APP_URL || 'http://localhost:8181/';   // e.g. APP_URL=http://localhost:8765/ for a plain static server of www/

// 1.5 (28.11.2026): the new kids' home screen first (some stages done, so stars and the green "next" frame show), then the new
// stages. Home scenes run with 5 stages done and the paid stages open (what an Android user sees: no locks).
const HOME_SCENES = ['home', 'home-games'];
const SCENES = [
  ['home', async p => {}],
  ['build-word', async p => {
    await p.click(stage(4));
    await p.waitForTimeout(500);
  }],
  ['puzzle', async p => {                                // the hard 12-piece puzzle, five pieces placed
    await p.click(stage(23));
    await p.waitForTimeout(500);
    for (let i = 0; i < 5; i++) {
      const pb = await p.evaluate(i => { const e = document.querySelector(`#puzzleTray .pzPiece[data-index="${i}"]`).getBoundingClientRect(); return [e.x + e.width / 2, e.y + e.height / 2]; }, i);
      const sb = await p.evaluate(i => { const e = document.querySelector(`.pzSlot[data-index="${i}"]`).getBoundingClientRect(); return [e.x + e.width / 2, e.y + e.height / 2]; }, i);
      await p.mouse.move(pb[0], pb[1]); await p.mouse.down(); await p.mouse.move(sb[0], sb[1], { steps: 6 }); await p.mouse.up();
      await p.waitForTimeout(250);
    }
    await p.waitForTimeout(500);
  }],
  ['doll', async p => {
    await p.click(stage(19));
    await p.waitForTimeout(700);
  }],
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
  ['home-games', async p => {                           // the home screen scrolled to the game groups
    await p.evaluate(() => document.getElementById('homeScreen').scrollTo(0, document.querySelector('.stageGroup:nth-child(5)').offsetTop - 10));
    await p.waitForTimeout(400);
  }],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  for (const d of DEVICES) {
    for (const [i, [name, play]] of SCENES.entries()) {
      const ctx = await browser.newContext({ viewport: d.viewport, deviceScaleFactor: d.scale, hasTouch: true, reducedMotion: 'reduce' });
      const page = await ctx.newPage();
      // home shows the locks a new user sees; the game scenes need the paid stages open
      await page.addInitScript(isHome => { try { localStorage.clear(); localStorage.setItem('hebrewSpellingUnlocked', 'paid'); if (isHome) localStorage.setItem('hebrewSpellingCompleted', '[0,1,2,3,4]'); } catch (e) {} }, HOME_SCENES.includes(name));
      await page.goto(BASE);
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
