import { expect, test } from "@playwright/test";


test("TC001: Create Lead", async({page, context})=>{
    // Login
    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox", {name:'Username'}).fill("");
    await page.getByRole("textbox",{name:'Password'}).fill("");
    await page.getByRole("button",{name:'Sign In'}).click();
    // Title verification
    await expect.soft(page,"Dashboard page not displayed").toHaveTitle(/Dashboard/);
    // Adding new contact
    await page.getByText("Contacts / Leads").click();
    const [newPage]=await Promise.all([context.waitForEvent("page"),
    await page.getByRole("link",{name:'Add New Contact'}).click()]);
    
    await newPage.locator("#contact_name").fill("Tony");
    await newPage.locator("#email").fill("tonystark@gmail.com");
    await newPage.locator("#phone").fill("9876543210");
    await newPage.locator("#company").fill("Stark Industries");
    await newPage.getByRole("radio",{name:'Male', exact:true}).check();
    await newPage.locator("#status").selectOption({value:'active'});
    await newPage.locator("#source").selectOption({value:'social_media'});
    await newPage.locator("#lead_score").fill("5");
    await newPage.locator("#deals").fill("3");
    await newPage.locator("#total_value").fill("20");
    await newPage.getByRole("checkbox",{name:'CRM'}).check();
    await newPage.getByRole("checkbox",{name:'Custom Dev'}).check();
    await newPage.locator("#priority").selectOption({value:'high'});
    await newPage.locator("#last_contact").fill("2026-02-28");
    await newPage.locator("#notes").fill("Approved");
    await newPage.getByRole("button",{name:'Add'}).click();
    const successMessage = newPage.locator("//div[text()='Lead added successfully!']");
    await expect.soft(successMessage,"Success message is not displayed").toContainText("Lead added successfully!");
    const addedLead = page.locator("//table[@id='contactsTable']/tbody//tr[1]/td[1]//p[1]");
    await expect(addedLead, "Added lead name is displayed").toHaveText("Tony");
    // await page.pause();

})
