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

    // get dropdown_Brand()
    // {
    //     return $("//span[contains(text(), 'Wild')]")
    // }
    get dd_brand()
    {
        return $("(//*[@role='combobox'])[2]")
    }
    get dropDown_Brand_List()
    {
        //return $(".ng-tns-c241-145.ng-trigger.ng-trigger-transformPanel.mat-select-panel.mat-primary mat-option:nth-child(1)")
        return $("//span[contains(text(), 'Wild')]")
        //return $(".mat-select-placeholder.mat-select-min-line.ng-tns-c241-40.ng-star-inserted")
    }

    get dd_OpenModel()
    {
        return $("mat-select-placeholder.mat-select-min-line.ng-tns-c241-40.ng-star-inserted")
    }

    get dd_ModelList()
    {
        return $("//span[contains(text(), 'UNO')]")
    }

    get rb_belowGround()
    {
        return $("(//*[@type='radio'])[2]")
    }
    

    
    async navigateHydrantPage()
    {

        await this.menuLinkHydrant.menuLink('Hydrants').click();
    }
    async createHydrant()
    {
        
        //await browser.pause(5000);
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
        await this.dd_brand.click()
        await browser.pause(3000)
        
        //await this.dropDown_Brand_List.click();
        
        await this.dropDown_Brand_List.click(); // Select the first element
        await browser.pause(3000)
        await this.dd_OpenModel.click();
        await browser.pause(3000)
        await this.dd_ModelList.click();
        await this.rb_belowGround.click();
       
      

         // Click on the randomly selected item
        //await this.dropDown_Brand_List[randomIndex].click();
        await browser.pause(20000);
        await browser.debug();
        

    }
}

module.exports = new HydrantPage();