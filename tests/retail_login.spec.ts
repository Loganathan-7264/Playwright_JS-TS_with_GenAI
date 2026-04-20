import test, { chromium } from "playwright/test";

test("Login", async()=>{
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    // Navigating to URL
    await page.goto("https://retail.theauto-mate.com/auth/login");

    // Log in
    await page.getByRole("textbox",{name:"Email"}).fill("Loga123@gmail.com");
    await page.locator('input[id="password"]').fill("Loga@321");
    await page.locator('button[type="submit"]').click();
    await page.close();
})