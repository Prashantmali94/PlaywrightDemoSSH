const{test,expect}=require("@playwright/test")
test.use({viewport:{width:1080,height:800}})

test("Verify Application Title",async function({page})
{
    await page.goto("http://www.google.com")

    await page.locator("textarea[name='q']").type("Mukesh Otwani")

    await page.waitForSelector("//li[@role='presentation']")

    const elements= await page.$$("//li[@role='presentation']")

    for(let i=0;i<elements.length;i++)
        
    {
         const text=await elements[i].textContent();
        
         if(text.includes('playwright'))
         {
              await elements[i].click()
              break
         }

    }
})