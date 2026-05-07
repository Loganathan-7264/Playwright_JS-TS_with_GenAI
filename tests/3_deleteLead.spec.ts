import { expect, test } from "@playwright/test";


test("TC003: Delete Lead", async ({ page, context }) => {
    // Login
    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox", { name: 'Username' }).fill("test.automate");
    await page.getByRole("textbox", { name: 'Password' }).fill("test@123");
    await page.getByRole("button", { name: 'Sign In' }).click();
    await page.getByText("Contacts / Leads").click();

    // Approach 1
    // page.once("dialog", async (dialog1) => {
    //     await expect(dialog1, "Are you sure you want to delete this contact? is not displayed").toContain("Are you sure");
    //     await dialog1.accept();


    //     page.once("dialog", async (dialog2) => {
    //         await expect(dialog2, "Contact deleted successfully is not displayed").toContain("Contact deleted successfully");
    //         await dialog2.accept();
    //     });
    // });

    // Approach 2
    // page.on("dialog", async(dialog)=>{
    // const message = dialog.message();

    // if(message.includes("Are you sure")){
    //     expect(message, "Are you sure you want to delete this contact? is not displayed").toContain("Are you sure you want to delete this contact?");
    //     await dialog.accept();
    // }
    // else if(message.includes("Contact deleted successfully")){
    //     expect(message, "Contact deleted successfully is not displayed").toContain("Contact deleted successfully");
    //     await dialog.accept();
    // }
    // })

    // Approach 3
      let dialogCount = 0;
  page.on("dialog", async (dialog) => {
    dialogCount++;
    const message = dialog.message().trim();

    if (dialogCount === 1) {
      expect(message).toBe("Are you sure you want to delete this contact?");
    } else if (dialogCount === 2) {
      expect(message).toBe("Contact deleted successfully");
    }
      await dialog.accept();
  });

    await page.locator("//p[text()='Tony']/ancestor::tr/td/following-sibling::td/button[text()='Delete']").first().click();
    const deletedLead = page.locator("//table[@id='contactsTable']/tbody//p[text()='tony123@gmail.com']");
    await expect(deletedLead, "Lead not deleted").not.toBeVisible();

    // await page.pause();

})