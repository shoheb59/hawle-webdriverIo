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

    async navigateToUserPage(){
        await this.menuUserLink.menuLink("User Management").click();
    }

}

module.exports = new UserPage();