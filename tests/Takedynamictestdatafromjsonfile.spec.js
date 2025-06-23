const{test, expect} = require('@playwright/test');
const { stringify, parse } = require('querystring');
test.use({viewport: {width: 1280, height: 720}});
const testData = JSON.parse(JSON.stringify(require("../Testdata.json")));

test('test dynamic data from JSON file', async function({page}) 
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.locator('#email1').fill(testData.email);
    await page.locator('#password1').fill(testData.password);
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(2000);
})