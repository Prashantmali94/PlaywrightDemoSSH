const{test,expect}=require("@playwright/test")
test.use({viewport:{width:1280,height:800}})

test("Dropdwon",async function({page})

{
    //Open web Page
    await page.goto("https://demo.automationtesting.in/Register.html")
    //await page.waitForTimeout(3000)
    await expect(page).toHaveURL(/.*Register*./)

   const title = await page.title();
   expect(title).toBe("Register");
  
   const target = page.locator("#Skills");
   await target.scrollIntoViewIfNeeded();
   //await page.waitForTimeout(3000)

   await page.locator("#Skills").selectOption({label:"Android"});
   //await page.waitForTimeout(3000)
   
   await page.locator("#Skills").selectOption({label:"APIs"});
   //await page.waitForTimeout(3000)
   
   const skills = await page.$("#Skills");
   const allSkills = await skills.$$("option");

for (let i = 0; i < allSkills.length; i++) 
{
  const skillOption = allSkills[i];
  const valueOfText = await skillOption.textContent();
  console.log("The Skill text content is:", valueOfText?.trim());
}
console.log("Total number of skills= : ", allSkills.length);

// Step 1: Click on the visible Select2 wrapper
await page.click(".select2-selection--single")

// Step 2: Wait for dropdown options
await page.waitForSelector(".select2-results__option");


// Step 3: Select your option
await page.click('.select2-results__option:text("India")');
await expect(page.locator('#select2-country-container')).toHaveText('India');

await page.waitForTimeout(3000)


})