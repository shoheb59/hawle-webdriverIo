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
    return $("(//*[@role='combobox'])[4]")
  }
  get dd_stroz1List() {
    return $("//span[contains(text(), '55mm')]");
  }

  get textField_stroz2()
  {
    return $("(//*[@role='combobox'])[6]")
  }

  get dd_stroz2List() {
    return $("//span[contains(text(), '75mm')]");
  }
  get btn_Next()
  {
    return $("//span[contains(text(), 'Next')]")
  }

  //Pressure Info 
  get pressureInfoNumber()
  {
    return $("(//*[@type = 'number'])[1]")
  }

  get outputpressurNumber1()
  {
    return $("(//*[@type = 'number'])[2]")
  }
  get outputpressurNumber2()
  {
    return $("(//*[@type = 'number'])[4]")
  }

  //Location Page

  get lat()
  {
    return $("(//*[@type = 'number'])[6]")
  }
  get long()
  {
    return $("(//*[@type = 'number'])[7]")
  }

  //Dstroz Page
  get saveButtonHydrant()
  {
    return $("(//span[contains(text(), 'Save')])[2]")
  }



  

  async navigateHydrantPage() {
    await this.menuLinkHydrant.menuLink("Hydrants").click();
  }

  async createHydrant() {
    await this.btnAddHydrant.waitForExist();
    await this.textLabelPage.scrollIntoView();
    const text = await this.btnAddHydrant.getText();
    console.log("text is:" + text);
    await this.btnAddHydrant.click();
    
  }

  async hydrantForm() {
    const hydrantNum = "demoHydrant" + DataGenerator.generateRandorString();
    await this.txtField_hydrantNumber.waitForClickable({
      timeout: 5000,
    });
    await this.txtField_hydrantNumber.setValue(hydrantNum);
    await this.dd_brand.click();
    await this.dropDown_Brand_List.click(); // Select the first element
    await this.dd_OpenModel.click();
    await this.dd_OpenModel.waitForDisplayed({ timeout: 6000 });

    await this.dd_ModelList.click();
    await this.rb_belowGround.waitForDisplayed({timeout: 5000})
    await this.rb_belowGround.click();
    await this.textField_stroz1.scrollIntoView({
        block: 'end'

    })
   
    await this.textField_stroz1.waitForDisplayed()
    await this.textField_stroz1.click();
    await this.dd_stroz1List.waitForClickable()
    await this.dd_stroz1List.click();
    

  //stroz 2
  await this.textField_stroz2.scrollIntoView({
    block: 'start'

})

    await this.textField_stroz2.waitForDisplayed(
      {
        timeout: 6000
      }
    )
    await this.textField_stroz2.click();
    await this.dd_stroz2List.waitForClickable(
      {
        timeout: 2000
      }
    )
    await this.dd_stroz2List.click();
    await this.btn_Next.scrollIntoView(
      {
        block: 'start'
      }
    )
    await this.btn_Next.click();
   


    
  }

  async hydrantFormPressureInfo()
  {
    await this.pressureInfoNumber.waitForDisplayed();
    await this.pressureInfoNumber.setValue("200");
    await this.outputpressurNumber1.setValue("10")
    await this.outputpressurNumber2.scrollIntoView();
    await this.outputpressurNumber2.setValue("20");
    await this.btn_Next.scrollIntoView(
      {
        block: 'start'
      }
    )
    await this.btn_Next.click();
    


  }
  async hydrantFormDatePage()
  {
    await this.btn_Next.scrollIntoView();
    await this.btn_Next.click();
  
    
  }

  async hydrantFormLocationPage()
  {
    await this.lat.scrollIntoView();
    await this.lat.setValue("50");
    await this.long.scrollIntoView();
    await this.long.setValue("10");
    {
      await this.btn_Next.scrollIntoView(
        {
          block: 'start'
        }
      )
      await this.btn_Next.click();
      
    }
    

  }
  async hydrantFormDStorzPage()
  {
    await this.saveButtonHydrant.waitForClickable();
    await this.saveButtonHydrant.scrollIntoView();
    await this.saveButtonHydrant.click()
  }
}

module.exports = new HydrantPage();
