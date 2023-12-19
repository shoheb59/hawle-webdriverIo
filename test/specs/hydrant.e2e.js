const { expect } = require('@wdio/globals')
const HydrantPage = require('../pageobjects/hydrant.page')
const DataGenerator = require('../utills/data-generator')
const SecurePage = require('../pageobjects/secure.page');
const securePage = require('../pageobjects/secure.page');

describe ('Hydrant Page', () =>
{
it('Hydrant Creation', async() => {
    
    await HydrantPage.navigateHydrantPage();
    await HydrantPage.createHydrant();
    await HydrantPage.hydrantForm();


})


})