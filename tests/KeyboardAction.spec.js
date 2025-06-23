const{test,expect}=require("@playwright/test")
test.use({viewport:{width:1080,height:800}})

test("Keyboard Event In Playwright",async function({page})
{
   await page.goto("https://www.google.com/")

   await page.locator("textarea[name='q']").focus()

   await page.keyboard.type("Mukesh Otwani!")

   await page.keyboard.press("ArrowLeft")

   await page.keyboard.down("Shift")

   for(let i=0;i<6;i++)
   {
    await page.keyboard.press("ArrowLeft")
   }
   await page.keyboard.up("Shift")

   await page.keyboard.press("Backspace")
   await page.waitForTimeout(2000)

   await page.keyboard.press("Enter")
   await page.waitForTimeout(2000)

   /*await page.locator("textarea[name='q']").fill("Mukesh Otwani")
   await page.waitForTimeout(2000)

   await page.keyboard.press("Meta+A")
   await page.waitForTimeout(2000)

   await page.keyboard.press("Meta+C")
   await page.waitForTimeout(2000)

   await page.keyboard.press("Backspace")
   await page.waitForTimeout(2000)

   await page.keyboard.press("Meta+V")

   await page.waitForTimeout(2000)

   await page.keyboard.press("Enter")

   await page.waitForTimeout(2000)*/
})