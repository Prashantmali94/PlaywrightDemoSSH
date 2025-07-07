
const { test, expect } = require("@playwright/test");
const formPage = require("../pages/simpleformpage");
const ajaxformpage = require("../pages/ajaxFormPage");                               
const testData = require("../Testlogin.json");

test.describe("Open Page and Verify Header", () => 
{


      for (const data of testData) 
    {
      
      test(`Launch the applicationn`, async ({ page }) =>
    {
         const form = new formPage(page);
         
        await page.goto("https://www.lambdatest.com/selenium-playground/")

        await expect(page).toHaveTitle("Selenium Grid Online | Run Selenium Test On Cloud");
        
        await form.clickOnFormSubmit();

        await expect(form.textonpage).toHaveText("Form Submit Demo");

         const ajaxform = new ajaxformpage(page);
         await ajaxform.fillForm(data.name, data.message);
         await ajaxform.clickOnPlatform();

    })
    
    }





})