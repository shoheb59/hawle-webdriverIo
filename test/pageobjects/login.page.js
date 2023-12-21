const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('[formcontrolname="username"]');
    }

    get inputPassword () {
        return $('[formcontrolname="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await browser.maximizeWindow()
        await browser.waitUntil(async () =>
        {
            const ButtonEnable  = await this.inputUsername.isEnabled();
            const ButtonClickable  = await this.inputUsername.isClickable();
            return ButtonClickable && ButtonEnable;
        })
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        //await browser.pause(12000); 
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
