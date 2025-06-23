const{test,expect}=require('@playwright/test')

test("Verify Google Page", async function({page})

{
    await page.goto("https://www.orangehrm.com")
    const url=await page.url()
    console.log("This is OrangeHRM= "+url);

    const title = await page.title()
    console.log("This is OrangeHRM page Title= "+title);

   await expect(page).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software")
    

}) 