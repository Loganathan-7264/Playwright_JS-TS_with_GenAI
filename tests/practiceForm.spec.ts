import { chromium, test } from '@playwright/test';

test("Form Fill up", async({page})=>{


    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByRole("textbox",{name:'First Name'}).fill("Tony");
    await page.getByRole("textbox",{name:'Last Name'}).fill("Stark");
    await page.getByRole("textbox",{name:'name@example.com'}).fill("tonystark@gmail.com");
    await page.getByRole("radio",{name:'Male',exact:true}).click();
    await page.getByRole("textbox",{name:'Mobile Number'}).fill("9876543210");
    await page.locator("input[id='dateOfBirthInput']").fill("01 Jan 2000");
    await page.locator("//input[@id='subjectsInput']").fill("English");
    await page.getByText("English",{exact:true}).click();
    await page.getByRole("checkbox",{name:'Sports'}).click();
    await page.getByRole("textbox",{name:'Current Address'}).fill("Strak Industres, Stark Tower, US");
    await page.locator("#state").click();
    await page.getByText("Rajasthan").click();
    await page.locator("#city").click();
    await page.getByText("Jaipur").click();
    await page.getByRole("button",{name:'Submit'}).click();
    await page.pause();

})