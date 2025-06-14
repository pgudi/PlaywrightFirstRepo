const {test, expect} = require('@playwright/test')

test('Launch and Navigate URL', async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(4000)
})