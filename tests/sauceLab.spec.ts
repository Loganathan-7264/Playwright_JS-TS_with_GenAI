import test from "playwright/test";

test("Cart count", async({page})=>{
    
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox",{name:'Username'}).fill("standard_user");
    await page.getByRole("textbox",{name:'Password'}).fill("secret_sauce");
    await page.getByRole("button",{name:'Login'}).click();

    const addCart = page.getByRole("button",{name:'Add to cart'});
    console.log(await addCart.all());
    console.log(await addCart.count());

    await page.pause();

    
})