const{test,expect}=require('@playwright/test')
test.use({viewport:{width:1000,height:500}})
test("Handle drop down", async function({page})

{
   await page.goto("https://freelance-learn-automation.vercel.app/signup")
   //First prefrence always be lable then value then index. This is for when we have to select one
   //option from drop dowm

   await page.locator("#state").selectOption({ label: "Goa" });

   //await page.waitForTimeout(3000)

   await page.locator("#state").selectOption({value:"Maharashtra"})

   //await page.waitForTimeout(3000)
   
   await page.locator("#state").selectOption({index:4})

   //await page.waitForTimeout(3000)

   /*const value = await page.locator("#state").textContent();
   
   console.log("These are all states:", value);

   await expect(value.includes("Kerala")).toBeTruthy()
 */

   let state = await page.$("#state");

let allElements = await state.$$("option");

for (let i = 0; i < allElements.length; i++) 
{
    let element = allElements[i];
    let value = await element.textContent();
    console.log("This is state value:", value?.trim());

    if(value.includes("Rajasthan"))
        {
              break
        }
}
  console.log("Total number of states:", allElements.length);

  const hobbiesDropdown = page.locator("#hobbies");
  await hobbiesDropdown.scrollIntoViewIfNeeded();
  await hobbiesDropdown.selectOption(["Playing", "Reading","Swimming","Singing"]);


   await page.waitForTimeout(5000)
})