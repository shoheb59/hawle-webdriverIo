const { $ } = require("@wdio/globals");
const Page = require("./page");
const DataGenerator = require("../utills/data-generator");
const MenuLinkHydrant = require("../pageobjects/components/menu.comp");


class HydrantPage {

  get menuLinkHydrant() {
    return MenuLinkHydrant;
  }

  get btnAddHydrant() {
    return $("//mat-icon[contains(text(),  'add')]");
  }
  get btnSearch() {
    return $("//mat-icon[contains(text(),  'search')]");
  }
  get textLabelPage() {
    return $("//mat-label[contains(text(), 'Page')]");
  }
  //hydrant form

  get txtField_hydrantNumber() {
    return $("[type = 'text']");
  }

  get dd_brand() {
    return $("(//*[@role='combobox'])[2]");
  }
  get dropDown_Brand_List() {
    return $("//span[contains(text(), 'Wild')]");
    
  }

  get dd_OpenModel() {
    
        return $("(//*[@role='combobox'])[3]");
  }

  get dd_ModelList() {
    return $("//span[contains(text(), 'UNO 1')]");
  }

  get rb_belowGround() {
    return $("//span[contains(text(), ' Below ground ')]");
  }
  get textField_stroz1()
  {
    return $("//mat-label[contains(text(), 'Storz 1')]")
  }



  

  async navigateHydrantPage() {
    await this.menuLinkHydrant.menuLink("Hydrants").click();
  }

  async createHydrant() {
    await browser.pause(5000);
    await this.btnAddHydrant.waitForExist();
    await this.textLabelPage.scrollIntoView();
    await browser.pause(3000);
    const text = await this.btnAddHydrant.getText();
    console.log("text is:" + text);
    await this.btnAddHydrant.click();
    await browser.pause(7000);
    
  }

  async hydrantForm() {
    const hydrantNum = "demoHydrant" + DataGenerator.generateRandorString();
    await this.txtField_hydrantNumber.waitForClickable({
      timeout: 5000,
    });
    await this.txtField_hydrantNumber.setValue(hydrantNum);
    await this.dd_brand.click();
    await browser.pause(3000);

    //await this.dropDown_Brand_List.click();

    await this.dropDown_Brand_List.click(); // Select the first element
    await browser.pause(3000);
    await this.dd_OpenModel.click();
    //const matSelect = $("(//*[@role='combobox'])[3]");

    // Click on the dropdown to open the options
    //await matSelect.click();

    // Wait for the options to be visible (adjust the timeout as needed)
    await this.dd_OpenModel.waitForDisplayed({ timeout: 6000 });

    // Click on a specific option based on its text
    
    // const optionSelector = "//span[contains(text(), 'UNO 1')]";
    // await optionSelector.click();
    await this.dd_ModelList.click();
    await browser.pause(5000);
    //await this.dd_ModelList.click();
    await this.rb_belowGround.waitForDisplayed({timeout: 5000})
    await this.rb_belowGround.click();
    await this.textField_stroz1.scrollIntoView({
        block: 'end'

    })
    await browser.debug();
    await this.textField_stroz1.waitForDisplayed()
    await this.textField_stroz1.click();
    await browser.debug();

    // Click on the randomly selected item
    //await this.dropDown_Brand_List[randomIndex].click();
    await browser.pause(20000);
    
  }
}

module.exports = new HydrantPage();
