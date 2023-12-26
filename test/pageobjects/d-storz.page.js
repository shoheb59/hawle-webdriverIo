const { $ } = require("@wdio/globals");
const Page = require("./page");
const DataGenerator = require("../utills/data-generator");
const MenuLinkDstoz = require("../pageobjects/components/menu.comp");

class DstorzPage
{
    get menuDStozLink()
    {
        return MenuLinkDstoz;
    }

    async navigateToDStorzPage(){
        await this.menuDStozLink.menuLink("D-Storz").click();
    }

}

module.exports = new DstorzPage();