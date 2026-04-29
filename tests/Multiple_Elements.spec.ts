import {test, expect } from "@playwright/test";


test("Saucedemo - Product checkout using Assertions", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox", {name:'Username'}).fill("standard_user");
    await page.getByRole("textbox",{name:'Password'}).fill("secret_sauce");
    await page.getByRole("button",{name:'Login'}).click();
    const addToCart = page.getByRole("button", {name:'Add to cart'});
    const CartCount = await addToCart.count();
    console.log(CartCount);
    // await expect(addToCart).

    for(let i=0; i<CartCount; i++ ){
        await addToCart.first().click();

        await page.waitForTimeout(2000);

    }
    await page.pause();

})