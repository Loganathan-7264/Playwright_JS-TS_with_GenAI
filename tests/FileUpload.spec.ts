import { test } from "@playwright/test";
import path from "path";

// File upload from local path
// test("File Upload - with 'File' tagName", async({page})=>{
//     await page.goto("https://practice.expandtesting.com/upload");
//     const FileUpload =  page.getByTestId("file-input");
//     FileUpload.setInputFiles("C:/Users/DELL/Downloads/PW_logo.png");

//     await page.pause();
// })

// File upload from playwright folder
// test("File Upload - with 'File' tagName", async({page})=>{
//     await page.goto("https://practice.expandtesting.com/upload");
//     const FileUpload =  page.getByTestId("file-input");
//     FileUpload.setInputFiles("resources/PW_logo.png");

//     await page.pause();
// })

// test("File Upload - with 'File' tagName", async({page})=>{
//     await page.goto("https://practice.expandtesting.com/upload");
//     const FileUpload =  page.getByTestId("file-input");
//     FileUpload.setInputFiles(path.join(__dirname, '../resources/PW_logo.png'));

//     await page.pause();
// })

test("File upload without file type", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload");
    
    // const fileChooserPromise=page.waitForEvent("filechooser");
    // await page.locator("#drag-drop-upload").click();
    // const FileUpload=await fileChooserPromise;
    
    const [FileUpload] =await Promise.all([page.waitForEvent("filechooser"),page.locator("#drag-drop-upload").click()]);
    
    await FileUpload.setFiles("resources/PW_logo.png");

    await page.pause();
})
