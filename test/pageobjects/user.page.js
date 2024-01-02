const { $ } = require("@wdio/globals");
const Page = require("./page");
const DataGenerator = require("../utills/data-generator");
const MenuLinkUser = require("../pageobjects/components/menu.comp");

class UserPage
{
    get menuUserLink()
    {
        return MenuLinkUser;
    }
    get btnAddUser() {
        return $("//mat-icon[contains(text(),  'add')]");
      }

    get txt_Email()
    {
        return $("[type ='email']")
    }
    get rb_country()
    {
        return $("(//*[@role='combobox'])[2]")
    }
    get rb_CountryName()
    {
        return $("//span[contains(text(),  'Bangladesh +880')]")
    }
    get txt_PhoneNumber()
    {
        return $("[formcontrolname='phoneNumber']")
    }
    get radioButton_Salutation()
    {
        return $("(//*[@role='combobox'])[3]")
    }
    get rb_salutationMrs()
    {
        return $("(//span[contains(text(), 'Mrs')])[1]")
    }
    get txt_FirstName()
    {
        //return $("//mat-label[contains(text(), 'First Name')]")
        return $("(//*[@type = 'text'])[1]")
    }
    get txt_LastName()
    {
        //return $("//mat-label[contains(text(), 'Last Name')]")
        return $("(//*[@type = 'text'])[2]")
    }
    get txt_function()
    {
        //return $("//mat-label[contains(text(), 'Function')]")
        return $("(//*[@type = 'text'])[3]")
    }
    get rb_Role()
    {
        return $("(//*[@role='combobox'])[4]")
    }
    get rb_robleCustomerUser()
    {
        return $("//span[contains(text(), 'Customer Users')]")
    }
    get rb_activationMethod()
    {
        return $("(//*[@role='combobox'])[5]")
    }
    get rb_sendActiationMail()
    {
        return $("(//span[contains(text(), 'Send Activation Mail')])[1]")
    }

    get btn_saveUser()
    {
      return $("//span[contains(text(), 'Save')]")
    }

    async navigateToUserPage(){
        await this.menuUserLink.menuLink("User Management").click();
    }
    async userCreation()
    {
        await this.btnAddUser.click();
        await this.txt_Email.setValue('has@yopmail.com');
        await this.rb_country.click();
        await this.rb_CountryName.click();
        await this.txt_PhoneNumber.setValue("8801813557788");
        await this.txt_PhoneNumber.clearValue();
        await this.txt_PhoneNumber.setValue("+8801813557788");
        await this.radioButton_Salutation.click();
        await this.rb_salutationMrs.click();
        await this.txt_FirstName.scrollIntoView(
            {
                block:'start'
            }
        );
        await this.txt_FirstName.waitForExist();
        await this.txt_FirstName.setValue("trot");
        await this.txt_LastName.scrollIntoView(
            {
                block: 'start'
            }
        );
    
        await this.txt_LastName.setValue("john");
      
       await this.txt_function.scrollIntoView(
        {
            block: 'start'
        }
       )
        await this.txt_function.waitForExist(
            {
                timeout: 6000
            }
        )
        await this.txt_function.waitForClickable();
        await this.txt_function.setValue("Admin");
        await this.rb_Role.scrollIntoView(
            {
                block: 'start'
            }
        );
        
        await this.rb_Role.click();
        await this.rb_robleCustomerUser.click();
        await this.rb_activationMethod.click();
        await this.rb_sendActiationMail.click();
        await this.btn_saveUser.scrollIntoView(
            {
                block: 'start'
            }
        );
        await this.btn_saveUser.waitForClickable();
        await this.btn_saveUser.click()
        browser.pause(20000);
        







    }

}

module.exports = new UserPage();