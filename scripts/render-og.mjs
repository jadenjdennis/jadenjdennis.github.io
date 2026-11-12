// Renders scripts/og.html to public/og.png using a locally installed Chrome via puppeteer-core.
// Dev-only helper: `npm i -D puppeteer-core` first if you want to re-render.
import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'node:url';
const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const html = fileURLToPath(new URL('./og.html', import.meta.url));
const out = fileURLToPath(new URL('../public/og.png', import.meta.url));
const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630 });
await page.goto(`file://${html}`, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out });
await browser.close();
console.log('wrote', out);
