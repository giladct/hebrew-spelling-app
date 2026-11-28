// Makes the stage pictures of the home screen: www/img/stage-thumbs/NN.webp (NN = stage number 01-22).
// Each one is a compact screenshot of the first screen of that stage, taken from the running app (so rerun it after a
// stage's look changes). Run with the app served (python serve.py or any server of www/):
//   node tools/stage-thumbs.js [http://localhost:8765]
// Only the screenshot is altered, never the app: the header, skip / hear buttons and feedback are hidden and the game is
// zoomed out until it fits the picture height (the home cards are ~190 px wide, 270/400 of that high).
const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const URL = process.argv[2] || 'http://localhost:8765';
const OUT = path.join(__dirname, '..', 'www', 'img', 'stage-thumbs');
const H = 270;   // picture height in CSS px, the width is 400

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 400, height: 700 }, deviceScaleFactor: 2 });
  await p.goto(URL + '/index.html');
  await p.evaluate(() => { isStageLocked = () => false; showHome(); });
  await p.addStyleTag({ content: `
    header, .helpBtn, #skipBtn, #smSkipBtn, #dw10SkipBtn, #xwSkipBtn, #puzzleSkipBtn, #actionRow, .smSpeakBtn,
    .dw10SpeakBtn, #camelHearBtn, #feedback, #smFeedback, #dw10Feedback, #camelFeedback, #sentFeedback,
    #memFeedback, #xwFeedback, #puzzleFeedback, #dollFeedback { display: none !important; }
    #dollStage { flex: none !important; height: 210px !important; }
    #app { padding-top: 4px !important; }
    main { justify-content: flex-start !important; gap: 8px !important; padding-top: 4px !important; }` });
  await p.waitForTimeout(300);
  const total = await p.evaluate(() => document.querySelectorAll('.stageCard').length);
  for (let n = 1; n <= total; n++) {
    await p.evaluate(n => [...document.querySelectorAll('.stageCard')].find(c => c.querySelector('.stageNum').textContent.trim() === String(n)).click(), n);
    await p.waitForTimeout(900);
    await p.evaluate(() => { try { stopInstruction(); } catch (e) {} });
    const info = await p.evaluate(H => {
      const scr = [...document.querySelectorAll('#app > div')].find(d => !d.classList.contains('hidden'));
      const main = scr.querySelector('main');
      main.style.zoom = '1';
      const span = () => {
        const kids = [...main.children].filter(k => k.getBoundingClientRect().height > 0);
        return Math.max(...kids.map(k => k.getBoundingClientRect().bottom)) - Math.min(...kids.map(k => k.getBoundingClientRect().top));
      };
      let h = span(), z = 1;
      // zooming out also widens the layout (grids grow), so measure again and adjust a few times
      for (let i = 0; i < 6 && h > H - 8; i++) { z *= (H - 8) / h; main.style.zoom = String(z); h = span(); }
      return { top: Math.round(main.getBoundingClientRect().top) };
    }, H);
    await p.waitForTimeout(120);
    const png = await p.screenshot({ clip: { x: 0, y: Math.max(0, info.top - 2), width: 400, height: H } });
    await sharp(png).resize(600, 405).webp({ quality: 82 }).toFile(path.join(OUT, String(n).padStart(2, '0') + '.webp'));
    await p.evaluate(() => { document.querySelectorAll('main').forEach(m => m.style.zoom = ''); showHome(); });
    await p.waitForTimeout(100);
  }
  await b.close();
  console.log(total + ' pictures in ' + OUT);
})();
