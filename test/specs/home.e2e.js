const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const SecurePage = require('../pageobjects/secure.page');
const securePage = require('../pageobjects/secure.page');
const randomNumber = Math.floor(Math.random() * 1000);
const zone  = 'ZoneTest'+ randomNumber;


describe('User able to Create Zone', () => {
it('Create Zone', async () =>
{
    
    await HomePage.home(zone)
    await expect(SecurePage.zoneText).toBeExisting();
    await expect(SecurePage.zoneText).toHaveTextContaining('Overview of all Zones');
    
})
})