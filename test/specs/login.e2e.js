const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')


describe('Hawle application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('ntypeuser@yopmail.com', '55995960')
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('home');
        console.log("Test Passed")
    })

})



