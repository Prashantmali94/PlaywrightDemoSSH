const{test, expect}=require("@playwright/test");
test.use({viewport:{width:1000,height:800}})    

test("Working with loadState", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByText('New user? Signup').click();

    await page.waitForLoadState('networkidle');
    const count=await page.locator("//input[@type='checkbox']").count();
    console.log("Checkbox count:", count);

    expect(count).toBe(3);
})                         