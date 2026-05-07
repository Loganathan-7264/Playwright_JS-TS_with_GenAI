import { expect, test } from "@playwright/test";
import path from "path";

test("TC004: Upload Profile Photo", async({page})=>{
    await page.goto("https://apps.theauto-mate.com/crm/login.php");
    await page.getByRole("textbox",{name:'Username'}).fill("");
    await page.getByRole("textbox",{name:'Password'}).fill("");
    await page.getByRole("button",{name:'Sign In'}).click();
    
    await page.getByRole("link",{name:'Settings'}).click();

    const chooseFile = page.getByRole("button",{name:'Choose File'});
    await chooseFile.setInputFiles(path.join(__dirname, '../resources/PW_logo.png'));

    expect(chooseFile,"Profile photo not uploaded").toHaveValue(/PW_logo.png/);

    // await page.pause();

})
