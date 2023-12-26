const { expect } = require('@wdio/globals')
const AlarmPage = require('../pageobjects/alarm.page')
const DataGenerator = require('../utills/data-generator')
const LoginPage = require('../pageobjects/login.page')




describe('Alarm page navigation',  () => 
{
     before('login', async () =>
    {
        await LoginPage.open()
        await LoginPage.login('ntypeuser@yopmail.com', '55995960')

    })
    it('Alarm management page navigaiton', async() =>
    {
        await AlarmPage.navigateToAlarmPage();
    })

})