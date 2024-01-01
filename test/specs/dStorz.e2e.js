const { expect } = require('@wdio/globals')
const DstorzPage = require('../pageobjects/d-storz.page')
const DataGenerator = require('../utills/data-generator')
const LoginPage = require('../pageobjects/login.page')




describe('User page navigation',  () => 
{
    //  before('login', async () =>
    // {
    //     await LoginPage.open()
    //     await LoginPage.login('ntypeuser@yopmail.com', '55995960')

    // })
    it('user management page navigaiton', async() =>
    {
        await DstorzPage.navigateToDStorzPage();
    })

})