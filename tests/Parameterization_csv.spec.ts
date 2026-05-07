import { test } from "@playwright/test";

import {parse} from "csv-parse/sync";
import fs from "fs";
const UserRole:any[] = parse(fs.readFileSync("resources/User.csv"),{
    skip_empty_lines:true,
    columns:true
})

for (let user of UserRole){
test(`User login - using csv ${user.TESTCASEID}`, async ({ page }) => {
    // Login
    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox", { name: 'Username' }).fill(user.USERNAME);
    await page.getByRole("textbox", { name: 'Password' }).fill(user.PASSWORD);
    await page.getByRole("button", { name: 'Sign In' }).click();

})
}