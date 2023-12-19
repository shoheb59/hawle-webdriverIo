const { $ } = require('@wdio/globals')
const Page = require('./page');
const MenuLinkHydrant = require('../pageobjects/components/menu.comp')
const DataGenerator = require('../utills/data-generator')

class HydrantPage 
{
    get menuLinkHydrant ()
    {
        return MenuLinkHydrant;
    }

    get btnAddHydrant()
    {
        return $("//mat-icon[contains(text(),  'add')]")
    }
    get btnSearch()
    {
        return $("//mat-icon[contains(text(),  'search')]")
    }
    get textLabelPage()
    {
        return $("//mat-label[contains(text(), 'Page')]")
    }
    //hydrant form 

    get txtField_hydrantNumber()
    {
        return $("[type = 'text']")
    }
    

    
    async navigateHydrantPage()
    {

        await this.menuLinkHydrant.menuLink('Hydrants').click();
    }
    async createHydrant()
    {
        
        await browser.pause(9000);
        await this.btnAddHydrant.waitForExist();
        await this.textLabelPage.scrollIntoView();
        await browser.pause(3000)
        const text = await this.btnAddHydrant.getText();
        console.log('text is:'+text)
        await this.btnAddHydrant.click();
        await browser.pause(7000);
        
    }

    async hydrantForm()
    {
        const hydrantNum = 'demoHydrant' + DataGenerator.generateRandorString();
        await this.txtField_hydrantNumber.waitForClickable(
            {
                timeout: 5000
            }
        );
        await this.txtField_hydrantNumber.setValue(hydrantNum);

    }
}

module.exports = new HydrantPage();