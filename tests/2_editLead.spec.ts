
import { expect, test } from "@playwright/test";


test("TC002: Edit Lead", async({page, context})=>{
    // Login
    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox", {name:'Username'}).fill("test.automate");
    await page.getByRole("textbox",{name:'Password'}).fill("test@123");
    await page.getByRole("button",{name:'Sign In'}).click();
    await page.getByText("Contacts / Leads").click();
    await page.locator("//p[text()='Tony']/ancestor::tr/td/following-sibling::td/button[text()='Edit']").first().click();
    await page.locator("#edit_email").fill("tony123@gmail.com");
    
    page.on("dialog", async(dialog)=>{
        const actualDialog = dialog.message();
        expect(actualDialog, "Contact updated successfully message is not displayed").toEqual("Contact updated successfully");
        await dialog.accept();
    })

    await page.getByRole("button",{name:'Save Changes'}).click();
    const emaillocator = page.locator("//table[@id='contactsTable']/tbody/tr[1]/td[1]//p[2]");
    await expect(emaillocator, "Updated email is not displayed").toHaveText("tony123@gmail.com");
    // await page.pause();


})