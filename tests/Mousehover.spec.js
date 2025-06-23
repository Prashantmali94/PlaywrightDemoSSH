const{test,expect}=require("@playwright/test")
//test.use({viewport:{width:1280,height:800}})

test("Mouse hover action", async function({page})
{

    await page.goto("https://www.hdfc.com/")
    
    /*await page.locator("#email1").type("vicky01mahajan@gmail.com")

    await page.locator("#password1").type("Test@123")

    await page.getByRole('button', { name: 'Sign in' }).click();*/

    await expect(page).toHaveURL(/hdfc\.com/);

    await expect(page.getByText('Calculate Your Home Loan')).toBeVisible();

    await page.locator("//a[@id='lp-hover']").hover()
    
    await page.locator('#lp-hover-panel a[href="/housing-loans/home-loans"]').click();

    await expect(page.locator("//h1[normalize-space()='Home Loans']")).toBeVisible();

    await page.waitForTimeout(2000)
   
     
})