class ajaxformpage
{

constructor(page)
{
this.page = page;
this.namefield = "//input[@name='title']"
this.messagefield = "//textarea[@name='description']"
this.submitbutton = "//input[@name='btn-submit']"
this.platform = "//a[contains(text(),'Platform ')]"; 
}

async fillForm(name, message)
{
await this.page.fill(this.namefield, name);
await this.page.fill(this.messagefield, message);
await this.page.click(this.submitbutton);
}

async clickOnPlatform()
    {
        await this.page.locator(this.platform).hover();
        
    }
}
module.exports = ajaxformpage;