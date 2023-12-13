const { $ } = require('@wdio/globals')
const Page = require('./page');


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
    get btnDelete()
    {
        return $("(//mat-icon[contains(text(), 'delete')])[2]")
    }
    get btnDialogDeleteYes()
    {
        return $("//span[contains(text(),'Delete')]")
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
    
        // Wait until the delete button is existing
        await this.btnDelete.waitUntil(() => {
            return this.btnDelete.isExisting();
        }, {
            timeout: 5000,
            timeoutMsg: 'Timeout waiting for delete button to exist',
            interval: 1000,
        });
    
        // Once the condition is met, proceed with the deletion
        await this.btnDelete.click();
        await this.btnDialogDeleteYes.click();
    }
}

module.exports = new HomePage();