// Regression check for the home screen and every stage: opens each stage card, records which screen
// and title appear, goes back home. Run it before and after a refactor and diff the output.
//
//   python www/serve.py            # in another terminal (http://localhost:8181)
//   node tools/smoke-test.js > before.txt   ... change code ...   node tools/smoke-test.js > after.txt
//
// Playwright is installed in this folder's node_modules.
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 380, height: 760 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await page.goto('http://localhost:8181/');
  // a fixed set of completed entries, so the ✓ marks are checked too
  await page.evaluate(() => {
    localStorage.setItem('hebrewSpellingCompleted', JSON.stringify([0, 7, 9, 10, 12, 13, 14, 15, 16]));
    localStorage.setItem('hebrewSpellingUnlocked', 'paid');   // paid stages open
  });
  await page.reload();

  const visible = () => page.evaluate(() =>
    [...document.querySelectorAll('#app > div')].filter(d => !d.classList.contains('hidden')).map(d => d.id).join('+'));

  const home = await page.evaluate(() => [...document.querySelectorAll('.stageGroup')].map(g =>
    g.querySelector('h2').textContent + ': ' + [...g.querySelectorAll('.stageCard')].map(c =>
      c.querySelector('.stageNum').textContent + (c.classList.contains('completed') ? '✓' : '') + ' ' +
      c.querySelector('.stageLabel').textContent).join(' | ')));
  console.log(home.join('\n'));

  const count = await page.locator('.stageCard').count();
  for (let i = 0; i < count; i++) {
    await page.locator('.stageCard').nth(i).click();
    await page.waitForTimeout(250);
    const title = await page.evaluate(() => {
      const h = document.querySelector('#app > div:not(.hidden) header');
      return h ? h.innerText.replace(/\s+/g, ' ').replace('🏠 בַּיִת', '').trim() : '';
    });
    console.log(`${i + 1} -> ${await visible()} :: ${title}`);
    await page.locator('#app > div:not(.hidden) header button').first().click();   // the home button
    await page.waitForTimeout(150);
    const back = await visible();
    if (back !== 'homeScreen') console.log(`   !! home button left: ${back}`);
  }
  console.log('errors', JSON.stringify(errors));
  await browser.close();
})();
