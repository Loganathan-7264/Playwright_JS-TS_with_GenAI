import {test} from "@playwright/test"

test("Alerts", async({page})=>{
    await page.goto("https://demoqa.com/alerts");

    // Listner
    page.on("dialog", (alert)=>{
        const alerttype=alert.type();
        console.log(alerttype);

        if(alerttype=="confirm"){
            alert.dismiss();
        }
        else if(alerttype=="prompt"){
            alert.accept("Loga")
        }
        else{
            alert.accept();
        }
    })

    await page.locator("#alertButton").click();
    await page.locator("#confirmButton").click();
    await page.locator("#promtButton").click();
    const dialogPromise=page.waitForEvent("dialog");
    await page.locator("#timerAlertButton").click();
    await dialogPromise
    await page.pause();

})