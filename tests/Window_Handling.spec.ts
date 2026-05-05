import test from "@playwright/test";


test("Window handling", async({page,context})=>{
    await page.goto("https://www.flipkart.com/");
    const search = page.getByRole("textbox",{name:'Search for Products, Brands and More'});
    await search.fill("Oneplus");
    await search.press("Enter");

    // const newPagePromise=context.waitForEvent("page");
    // // await page.getByRole("link",{name:'OnePlus Nord 6 (Pitch Black, 256 GB)'}).click();
    // await page.getByText("OnePlus Nord 6 (Pitch Black, 256 GB)").click();
    // const newPage = await newPagePromise;

    const [newPage] = await Promise.all([context.waitForEvent("page"), page.getByText("OnePlus Nord 6 (Pitch Black, 256 GB)").click()]);

    await newPage.bringToFront();
    await newPage.locator("//div[text()='Buy now']").click();
    await page.bringToFront();
    await search.clear();
    await search.fill("Laptop");
    await search.press("Enter");

    await page.pause();

})