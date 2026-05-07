import { test } from "@playwright/test";
import UserRole from "../resources/UserRole.json"

for(let user of UserRole){

test(`User login - using json ${user.TestCaseID}`, async ({ page }) => {
    // Login
    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox", { name: 'Username' }).fill(user.Username);
    await page.getByRole("textbox", { name: 'Password' }).fill(user.Password);
    await page.getByRole("button", { name: 'Sign In' }).click();

})
}