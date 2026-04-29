import {test, expect } from "@playwright/test";


test("The Auto-Mate - Assertions & dropdown validations", async ({page})=>{
    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await expect.soft(page,"Page URL should contain 'login'").toHaveURL(/login/);
    const logo = page.locator("img[alt='logo']");
    await expect.soft(logo,"Logo should be visible").toBeVisible();
    const text=page.getByText("Your Trusted Partner for Automation Testing Solutions and Training");
    await expect.soft(text,"Login page should display text").toHaveText("Your Trusted Partner for Automation Testing Solutions and Training");

    await page.getByRole("textbox",{name:'Username'}).fill("apr26.crm");
    await page.getByRole("textbox",{name:'Password'}).fill("apr26.crm");
    await page.getByRole("button", {name:'Sign In'}).click();
    await page.getByRole("link",{name:'Settings'}).click();
    await page.getByRole("button",{name:'Account'}).click();
    const languageDropDown= page.locator("#language");
    await languageDropDown.selectOption({value:'French'});
    await expect(languageDropDown,"Language should be French").toHaveValue('French');

    await page.pause();



})