const{test,expect}=require("@playwright/test");

test("Handle alert",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog",async (d)=>
    {

        console.log(d.message());
        expect(d.type()).toBe("alert"); // Check if the dialog is an alert
        expect(d.message()).toContain("I am a JS Alert");
        await d.accept(); // Accept the alert
    })


    await page.click("//button[normalize-space()='Click for JS Alert']");




})


test("Handle confirm",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog",async (dialogwindow)=>
    {

        console.log(dialogwindow.message());
        expect(dialogwindow.type()).toBe("confirm");
        expect(dialogwindow.message()).toContain("I am a JS Confirm");
        await dialogwindow.dismiss();
    })


    await page.click("//button[text()='Click for JS Confirm']");




})

test("Handle prompt",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog",async (prompthandle)=>
    {

        console.log(prompthandle.message());
        expect(prompthandle.type()).toBe("prompt");
        expect(prompthandle.message()).toContain("I am a JS prompt");
        await prompthandle.accept("Thank you for the prompt!");
    })

    await page.waitForTimeout(2000);
    await page.click("//button[text()='Click for JS Prompt']");

    await page.waitForTimeout(2000);




})