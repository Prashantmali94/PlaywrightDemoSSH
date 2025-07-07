class formPage
{

    constructor(page)
    {
        this.page = page;
        this.formsubmit="//a[text()='Ajax Form Submit']";
        this.textonpage= page.locator("//h1[text()='Form Submit Demo']"); 
            
    }
    async clickOnFormSubmit()
    {
        await this.page.click(this.formsubmit);
        await this.page.waitForURL('**/ajax-form-submit-demo');

    }
    

}
module.exports = formPage;