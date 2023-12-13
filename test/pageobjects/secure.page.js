const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $("//mat-icon[contains(text(), 'home')]");
    }
    get zoneText()
    {
        return $("//span[contains(text(), ' Overview of all Zones ')]")
    }
}

module.exports = new SecurePage();
