const{test,expect}=require("@playwright/test")

test("Verify the error mesage",async function({page})
{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.getByPlaceholder("Username").type("Admin")
   await page.locator("input[name='password']").type("admin1234")
   await page.locator("//button[@type='submit']").click()
   const Errormsg= await page.locator("//p[contains(@class,'alert-content-text')]").textContent()

   console.log("Error Message is= "+Errormsg);
   expect(Errormsg.includes("Invalid")).toBeTruthy()
   expect(Errormsg==="Invalid credentials").toBeTruthy()
   


})