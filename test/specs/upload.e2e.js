const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const UploadFile = require ('../pageobjects/uploadFile.js')


describe('Upload Dashboard file', () =>
{
    before('login', async () =>
    {
        await LoginPage.open()
        await LoginPage.login('ntypeuser@yopmail.com', '55995960')

    })

    it('Upload file', async () =>
    {
       
        await UploadFile.dashbaordUpload();
        await browser.deleteSession({
            shutdownDriver: false
        });


    })
})