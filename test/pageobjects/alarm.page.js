const { $ } = require("@wdio/globals");
const Page = require("./page");
const DataGenerator = require("../utills/data-generator");
const MenuLinkAlarm = require("../pageobjects/components/menu.comp");

class AlarmPage
{
    get menuDAlarmLink()
    {
        return MenuLinkAlarm;
    }

    async navigateToAlarmPage(){
        await this.menuDAlarmLink.menuLink("Alarm Management").click();
    }

}

module.exports = new AlarmPage();