import { chromium, test } from '@playwright/test';

test("Form Fill up", async({page})=>{


    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByRole("textbox",{name:'First Name'}).fill("Tony");
    await page.getByRole("textbox",{name:'Last Name'}).fill("Stark");
    await page.getByRole("textbox",{name:'name@example.com'}).fill("tonystark@gmail.com");
    await page.getByRole("radio",{name:'Male',exact:true}).click();
    await page.getByRole("textbox",{name:'Mobile Number'}).fill("9876543210");
    await page.locator("input[id='dateOfBirthInput']").fill("01 Jan 2000");
    await page.locator("input[id='dateOfBirthInput']").press("Tab");
    await page.locator("#subjectsInput").fill("Maths");
    await page.getByRole("option",{name: 'Maths'}).click();
    await page.locator("#subjectsInput").fill("Computer");
    await page.getByRole("option",{name: 'Computer Science'}).click();
    await page.getByRole("checkbox", {name:'Sports'}).click();
    await page.getByRole("checkbox", {name:'Music'}).click();
    await page.getByRole("textbox", {name:'Current Address'}).fill("Stark Industries, Stark Tower, USA");
    await page.locator("//div[text()='Select State']/following-sibling::div/input").click();
    await page.getByRole("option",{name: 'Haryana'}).click();
    await page.locator("//div[text()='Select City']/following-sibling::div/input").click();
    await page.getByRole("option",{name: 'Karnal'}).click();
    await page.getByRole("button",{name: 'Submit'}).click();
    
    await page.pause();

})