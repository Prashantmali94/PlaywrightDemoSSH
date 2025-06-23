const{test,expect}=require("@playwright/test")
test.use({viewport:{width:1080,height:800}})

test("Handle Iframe/Frame",async function({page})
{

    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

    const Iframe=await page.frameLocator("//frame[@name='packageListFrame']")

    await Iframe.locator("//a[text()='java.applet']").click()

    await page.waitForTimeout(2000)

})
