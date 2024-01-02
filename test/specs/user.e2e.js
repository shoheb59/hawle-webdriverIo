const { expect } = require('@wdio/globals')
const UserPage = require('../pageobjects/user.page')
const DataGenerator = require('../utills/data-generator')
const userPage = require('../pageobjects/user.page')
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
        await UserPage.navigateToUserPage();
        
    })
    it('User creation', async()=>{
        await UserPage.userCreation();
    })

})
