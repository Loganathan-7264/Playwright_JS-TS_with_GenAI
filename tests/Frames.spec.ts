import test from "@playwright/test";


test("Frames", async({page})=>{
    await page.goto("https://letcode.in/frame");

    const newFrame=page.frame({name:'firstFr'});
    
    if(newFrame!=null){
    await newFrame?.locator("input[placeholder='Enter name']").fill("Tony");
    await newFrame?.locator("input[name='lname']").fill("Stark");
    }
    const innerFrame=newFrame?.frameLocator("iframe[src='innerframe']");
    if(innerFrame!=null){
    await innerFrame?.locator("input[name='email']").fill("tony42@gmail.com");
    }
    
    await page.pause();

})