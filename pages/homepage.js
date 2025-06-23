const{expect}=require("@playwright/test");

class HomePage
{

    constructor(page) 
    {
        this.page = page;
        this.manageoption="//span[normalize-space()='Manage']"
        this.mennu="//img[@alt='menu']"
        this.logoutButton="//button[normalize-space()='Sign out']"
    }

    async VerifyManageOption()
    {
        await expect(this.page.locator(this.manageoption)).toBeVisible();

    }
    async logoutFromApplication() 
    {
        await this.page.click(this.mennu);
        await this.page.click(this.logoutButton);
        
    }

}
module.exports = HomePage