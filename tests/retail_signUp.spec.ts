import test, { chromium } from "playwright/test";


test("Sign Up", async()=>{
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Navigating to URL
    await page.goto("https://retail.theauto-mate.com/auth/login");
    // Sign Up
    await page.locator('a[class="text-black font-semibold hover:underline"]').click();
    await page.getByRole('textbox',{name:"Full Name"}).fill("Loganathan");
    await page.getByRole('textbox',{name:"Email"}).fill("Loga123@gmail.com");
    await page.getByRole('textbox',{name:"Phone Number"}).fill("9876543210");
    await page.locator('input[id="password"]').fill("Loga@321");
    await page.locator('input[id="confirmPassword"]').fill("Loga@321");
    await page.locator('button[type="submit"]').click();
});