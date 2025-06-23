const{test,expect}=require('@playwright/test')

test.skip("This is my first test",async function({page})
{

}

)

test.skip("This is my second test",async function({page})
{
    expect(200).toBe(200)
}

)

test.skip("This is my Third test",async function({page})
{
    expect('This is my test').toContain('test')
}

)
test("This is my next test",async function({page})
{
    expect("This is my test".includes("test")).toBeTruthy()
}

)