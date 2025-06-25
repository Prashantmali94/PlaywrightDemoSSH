const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginpage");
const HomePage = require("../pages/homepage");
const testData = require("../Testlogin.json");

test.describe("Login App Test using POM", () => {
  for (const data of testData) {
    test(`Login with user ${data.id}`, async ({ page }) => {
      await page.goto("https://freelance-learn-automation.vercel.app/login");

      const login = new LoginPage(page);
      await login.verifySignInText();
      await login.loginToapplication(data.email, data.password);

      const homePage = new HomePage(page);
      await homePage.logoutFromApplication();
      await homePage.VerifyManageOption();

      await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/login");
    });
  }
});
