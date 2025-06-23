const{test, expect}=require("@playwright/test");
const LoginPage=require("../pages/loginpage");
const { log } = require("console");
const HomePage=require("../pages/homepage");

test("Login App Test using POM", async function({page})
{


    await page.goto("https://freelance-learn-automation.vercel.app/login");

     const login=new LoginPage(page)

     await login.loginToapplication();

     await login.verifySignInText();

     const homePage=new HomePage(page);
     await homePage.logoutFromApplication();

     await homePage.VerifyManageOption();
        await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/login");

});
