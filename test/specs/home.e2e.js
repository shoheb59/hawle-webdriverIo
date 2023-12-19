
const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const DataGenerator = require('../utills/data-generator')
const SecurePage = require('../pageobjects/secure.page');
//const securePage = require('../pageobjects/secure.page');



describe('User able to Create Zone', () => {
it('Create Zone', async () =>
{
    
  
    await HomePage.home();
    await expect(SecurePage.zoneText).toBeExisting();
    await expect(SecurePage.zoneText).toHaveTextContaining('Overview of all Zones');
    
})
})