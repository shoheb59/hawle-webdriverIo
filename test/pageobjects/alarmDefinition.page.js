const { $ } = require("@wdio/globals");
const Page = require("./page");
const DataGenerator = require("../utills/data-generator");
const MenuLinkAlarm = require("../pageobjects/components/menu.comp");


class AlarmDFPage 
{
    get menuDAlarmLink()
    {
        return MenuLinkAlarm;
    }
    get btn_alarmDefinitions()
    {
        return $('#button-alarm-definitions')
    }

    get btnAddAlarmDefinition() {
        return $("//mat-icon[contains(text(),  'add')]");
      }
    //General Info
    get txtName()
    {
        return $("//*[@type='text']")
    }
    get rb_AssignZone()
    {
        return $("(//*[@role='combobox'])[2]")
    }

    get rb_ZoneName()
    {
        return  $("//span[contains(text(), 'Ozune')]")
    }
    get rb_EventType()
    {
        return $("(//*[@role='combobox'])[4]")
    }

    get rb_EventTypeName()
    {
        return $("//span[contains(text(), 'Open')]")
    }
    get rb_assignRoles()
    {
        return $("(//*[@role='combobox'])[5]")
    }
    get rb_AssingCustomerRoles()
    {
        return $("//span[contains(text(), 'Customer Users')]")

    }
    get btn_Next()
    {
        return $("//span[contains(text(), 'Next')]")
    }
    get rb_Notificaiton()
    {
        return $("(//*[@role='combobox'])[7]")
    }
    get rb_NotificationName()
    {
        return $("//span[contains(text(), 'Email')]")
    }

    get rd_active()
    {
        //return $("(//*[@type= 'radio'])[1]")
        return $("//span[contains(text(), 'Active')]")
        
    }
    //date & time
    get dateFrom()
    {
        //return $("(//*[@type= 'date'])[1]")
        //return $("(//*[@type='button'])[5]")
        return $("(//mat-datetimepicker)[1]")
    }
    get dateFormToday()
    {
        return $(".mat-datetimepicker-calendar-body-cell-content.mat-datetimepicker-calendar-body-today")
    }

    get timeFrom()
    {
        return $("(//*[@type='time'])[1]")
    }
    get time_Hours()
    {
        return $(".mat-datetimepicker-clock-hours.active .mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-selected.ng-star-inserted")
    }
    get time_Minutes()
    {
        return $(".mat-datetimepicker-clock-minutes.active .mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-selected.ng-star-inserted")
    }

    get btn_Save()
    {
        return $("//span[contains(text(),'Save')]")
    }


    async navigateToAlarmPage(){
        await this.menuDAlarmLink.menuLink("Alarm Management").click();
    }
    async navigateToAlarmDefinition()
    {
        await this.btn_alarmDefinitions.waitForClickable();
        await this.btn_alarmDefinitions.click();

    }
    async createAlarmDefinitionGeneralInfo()
    {
        
        //General info
        await this.btnAddAlarmDefinition.waitForClickable()
        await this.btnAddAlarmDefinition.click();
        await this.txtName.setValue("alarm Definition"+ DataGenerator);
        await this.rb_AssignZone.click();
        await this.rb_ZoneName.scrollIntoView({
            block: 'start'
        })
        await this.rb_ZoneName.click();
        await this.rb_EventType.click();
        await this.rb_EventTypeName.click();
        await this.rb_assignRoles.click();
        await this.rb_AssingCustomerRoles.click();
        await this.btn_Next.scrollIntoView(
            {
                block: 'start'
            }
        )
        await this.btn_Next.click();


    }
    async createAlarmDFNotification()
    {
        await this.rb_Notificaiton.waitForClickable();
        await this.rb_Notificaiton.click();
        await this.rb_NotificationName.click();
        await this.btn_Next.scrollIntoView({
            block: 'start'
        });
        await this.btn_Next.click();


    }
    async createAlarmDfDate()
    {
        await this.rd_active.waitForExist();
        await this.rd_active.click();
        await browser.pause(3000);
        await this.dateFrom.waitForClickable();
        await this.dateFrom.click();
        await this.dateFormToday.waitForClickable();
        await this.dateFormToday.click();
        await this.timeFrom.waitForClickable();
        await this.timeFrom.click();
        await this.time_Hours.waitForClickable();
        await this.time_Hours.click();
        await this.time_Minutes.waitForClickable();
        await this.time_Minutes.click();
        await this.btn_Save.scrollIntoView(
            {
                block: 'start'
            }
        )
        await this.btn_Save.click();
        await browser.pause(6000)


    }

}

module.exports = new AlarmDFPage();