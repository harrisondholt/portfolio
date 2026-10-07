// Regenerates assets/Harrison-Holt-Resume.pdf and assets/og-image.png.
// Usage (from the repo root):  node tools/build-assets.js
// Needs Playwright with a Chromium build: set CHROMIUM_PATH if it is not on the default path.
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');

(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH, args: ['--no-sandbox'] } : {});

  const pdfPage = await browser.newPage();
  await pdfPage.goto(pathToFileURL(path.join(root, 'tools/resume.html')).href);
  await pdfPage.pdf({ path: path.join(root, 'assets/Harrison-Holt-Resume.pdf'), format: 'Letter', printBackground: true, preferCSSPageSize: true });

  const ogPage = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await ogPage.goto(pathToFileURL(path.join(root, 'tools/og.html')).href);
  await ogPage.evaluate(() => document.fonts.ready);
  await ogPage.screenshot({ path: path.join(root, 'assets/og-image.png') });

  await browser.close();
  console.log('Wrote assets/Harrison-Holt-Resume.pdf and assets/og-image.png');
})();
