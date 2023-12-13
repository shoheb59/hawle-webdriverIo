const { $ } = require('@wdio/globals')
const Page = require('./page');

//New-demo-commit
class HomePage extends Page
{
    get btnzone ()
    {
        return $("//div [contains(text(), 'Zones')]")
    }
    get btnAdd()
    {
        return $("//mat-icon [contains(text(), 'add')]")
    }
    get inputFieldZone()
    {
        return $("[type = 'text']")
    }
    get btnSave()
    {
        return $("(//span [contains(text(), 'Save')])[2]")
   
    }


    async home() {
        const randomNumber = Math.floor(Math.random() * 1000);
        const zone = 'ZoneTest' + randomNumber;
    
        await this.btnzone.waitForDisplayed();
        await this.btnzone.click();
        await browser.pause(3000);
        await this.btnAdd.click();
        await browser.pause(3000);
        await this.inputFieldZone.setValue(zone);
        await this.btnSave.click();
    

}
}
module.exports = new HomePage();