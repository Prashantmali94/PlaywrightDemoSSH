const{test,expect}= require("@playwright/test")
//test.use({viewport:{width:1000,height:800}})

test("Verify the login details", async function ({page}) {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").type("Admin")
    await page.locator("//input[@placeholder='Password']").type("admin123")
    await page.locator("//button[normalize-space()='Login']").click()

    await expect(page).toHaveURL(/dashboard/);
    await page.getByAltText("profile picture").first().click()
    //await page.locator("//a[normalize-space()='Log out']").click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/)
})