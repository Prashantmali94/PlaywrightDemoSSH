const{expect}=require("@playwright/test");


class LoginPage
{

    constructor(page)
    {

        this.page = page;
        this.username="#email1"
        this.header="//h2[normalize-space()='Sign In']"
        this.password="//input[@placeholder='Enter Password']"
        this.loginButton="//button[normalize-space()='Sign in']"
    }

    async verifySignInText()
    {
        await expect(this.page.locator(this.header)).toBeVisible();
    }

    async loginToapplication(eamil, password)
    {
        await this.page.fill(this.username,eamil)

        await this.page.fill(this.password,password)

        await this.page.click(this.loginButton)

        
    }
}

module.exports = LoginPage;