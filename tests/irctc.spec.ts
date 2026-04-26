import test, { chromium } from "playwright/test";


test("IRCTC Search train", async()=>{
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.irctc.co.in/nget/train-search")
    await page.getByRole("searchbox",{name:"Enter From station. Input is Mandatory."}).fill("CBE");
    await page.getByRole("option",{name:"COIMBATORE JN - CBE (COIMBATORE) TAMIL"}).click();
    await page.getByRole("searchbox",{name:"Enter To station. Input is Mandatory."}).fill("Chennai");
    // await page.getByRole("option",{name:"MGR CHENNAI CTL - MAS (CHENNAI) TAMIL"}).click();
    await page.getByText(" MGR CHENNAI CTL - MAS ").click();
    await page.locator("p-calendar[formcontrolname='journeyDate']>span>input[type='text']").click();
    await page.locator("//p-calendar//a[contains(@class, 'ui-datepicker-next')]").click();
    await page.locator("//a[text()='30']").click()
    await page.locator("p-dropdown[id='journeyClass']").click();
    await page.locator("//li[@aria-label='AC 3 Tier (3A)']").click();
    await page.locator("p-dropdown[id='journeyQuota']").click();
    await page.locator("//li[@aria-label='LADIES']").click();
    await page.getByRole("button",{name:"Search Trains"}).click();
    await page.pause();
})