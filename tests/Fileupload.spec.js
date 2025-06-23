const{test,expect}=require("@playwright/test")
test.use({viewport:{width:1080,height:800}})

test("Verify File Upload",async function({page})
{

    await page.goto("https://the-internet.herokuapp.com/upload")

    //await page.locator("#file-upload").setInputFiles("/Users/bhushanmali/Downloads/AI Tools Notes.pdf");

    await page.locator("#file-upload").setInputFiles("./Upload/AI Bte Tools Notes.pdf");

    await page.locator("#file-submit").click()
    
    expect(page.locator("//h3")).toHaveText("File Uploaded!")

    //await expect(page.getByText('File Uploaded!')).toBeVisible();

    await page.waitForTimeout(4000)



    


})