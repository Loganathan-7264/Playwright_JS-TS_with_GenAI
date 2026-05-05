import { test } from "@playwright/test";

test("File Download", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/download");
    
    const [downloadfile] =await Promise.all([page.waitForEvent("download"),
    page.getByRole("link",{name:'andom_data.txt'}).click()]);

    await downloadfile.saveAs("resources/"+downloadfile.suggestedFilename());


})