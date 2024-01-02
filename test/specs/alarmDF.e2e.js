const { expect } = require('@wdio/globals')
const UserPage = require('../pageobjects/user.page')
const DataGenerator = require('../utills/data-generator')
const AlarmDFPage = require('../pageobjects/alarmDefinition.page')
const LoginPage = require('../pageobjects/login.page')


describe('Create Alarm Definition',  () => 
{
    //  before('login', async () =>
    // {
    //     await LoginPage.open()
    //     await LoginPage.login('ntypeuser@yopmail.com', '55995960')

    // })
    it('AD creation', async() =>
    {
        await browser.pause(12000)
        await AlarmDFPage.navigateToAlarmPage();
        await AlarmDFPage.navigateToAlarmDefinition();
        await AlarmDFPage.createAlarmDefinitionGeneralInfo();
        await AlarmDFPage.createAlarmDFNotification();
        await AlarmDFPage.createAlarmDfDate();
        
    })
   

})