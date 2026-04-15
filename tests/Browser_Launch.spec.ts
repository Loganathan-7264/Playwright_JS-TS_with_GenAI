import { chromium, test } from "playwright/test";

test('Open the website', async () => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com/in/loganathan-p/');
    });
