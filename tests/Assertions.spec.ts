import test, { expect } from "playwright/test";


test("Saucedemo - Product checkout using Assertions", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox", {name:'Username'}).fill("standard_user");
    await page.getByRole("textbox",{name:'Password'}).fill("secret_sauce");
    await page.getByRole("button",{name:'Login'}).click();
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator(".shopping_cart_link").click();
    const productName =  page.getByText("Sauce Labs Backpack");
    await expect(productName, "Sauce Labs Backpack should be visible").toBeVisible();
    await page.getByRole("button",{name:'Checkout'}).click();
    await expect(page, "Page should have URL='https://www.saucedemo.com/checkout-step-one.html'").toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
    await page.getByRole("textbox", {name:'First Name'}).fill("Tony");
    await page.getByRole("textbox", {name:'Last Name'}).fill("Stark");
    await page.getByRole("textbox", {name:'Zip/Postal Code'}).fill("600001");
    await page.getByRole("button",{name:'Continue'}).click();
    await page.getByRole("button",{name:'Finish'}).click();
    const thankYouMsg = await page.getByRole("heading",{name:'Thank you for your order!'}).textContent();
    expect(thankYouMsg,"Thank you for your order! should be visible").toEqual("Thank you for your order!");
    const backHome = page.getByRole("button",{name:'Back Home'});
    expect(backHome, "Back Home should be enabled").toBeEnabled();

    await page.pause();
})