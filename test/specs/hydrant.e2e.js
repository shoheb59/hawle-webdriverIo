const { expect } = require('@wdio/globals')
const HydrantPage = require('../pageobjects/hydrant.page')
const DataGenerator = require('../utills/data-generator')
const SecurePage = require('../pageobjects/secure.page');
const securePage = require('../pageobjects/secure.page');

describe ('Hydrant Page', () =>
{

    // before('login', async () =>
    // {
    //     await LoginPage.open()
    //     await LoginPage.login('ntypeuser@yopmail.com', '55995960')

    // })

it('Hydrant Creation', async() => {
    
    await HydrantPage.navigateHydrantPage();
    await HydrantPage.createHydrant();
    await HydrantPage.hydrantForm();
    await HydrantPage.hydrantFormPressureInfo();
    await HydrantPage.hydrantFormDatePage();
    await HydrantPage.hydrantFormLocationPage();
    await HydrantPage.hydrantFormDStorzPage();


})


})