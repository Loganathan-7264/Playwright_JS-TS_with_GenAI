import test, { chromium } from "playwright/test";


test("Launch browser", async ()=>{
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.amazon.in/");
    await page.pause();
    await page.close();

})