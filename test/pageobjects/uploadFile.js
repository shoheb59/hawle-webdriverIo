const { $ } = require('@wdio/globals')
const Page = require('./page');
const { join } = require('path');
const path = require('path')
const {fileURLToPath, meta} = require('url')




//upload file
class UploadFile extends Page
{
 
    get btn_Dashbarodgroups()
    {
        return $("(//span[contains(text(), 'Dashboard groups')])[1]")
    }
    get btn_all()
    {
        return $("(//mat-icon[contains(text(), ' view_list')])[1]")
    }

    get btn_Upload ()
    {
        return $("//mat-icon[contains(text(), 'file_upload')]")
    }

    get btn_browse_file()
    {
        return $("//label[contains(text(),'Browse file')]")
    }

    get btn_submitForImportDashb()
    {
        return $("//span[contains(text(), ' Import')]")
    }

    get file_Input()
    {
        return $("//input[@type='file']")
    }


    
    
    
    
    
   
    
    async dashbaordUpload()
    {
        await browser.pause(7000)
        await this.btn_Dashbarodgroups.waitForClickable()
        await this.btn_Dashbarodgroups.click()
        await this.btn_all.waitForExist(
            {
                timeout: 12000
            }
        )
        
        await this.btn_all.waitForClickable()
        await this.btn_all.click();

    
        await this.btn_Upload.waitForDisplayed(
            {
                timeout: 120000
            }
        )
        await this.btn_Upload.waitForClickable()
        await browser.pause(12000)
        await this.btn_Upload.click();
        await browser.pause(5000);
        await this.fileUpload('D:\\webdriverIo\\testTesenso\\test\\utills\\dashboard.csv.json', await this.file_Input)
        await browser.debug();
    //     //await this.btn_browse_file.click()
        

    //     const filePath = "C:\\Users\\T490S\\OneDrive\\Desktop\\dashboard.csv.json";


    //     // Locate the file input element using XPath
    //     await this.file_Input;

    //     // Execute click on the file input element using JavaScript
       
    //    // await browser.execute('arguments[0].click();', await this.file_Input);

    //     // Upload the file using WebDriverIO's addValue command
    //     await this.file_Input.addValue(filePath);

    //     // Wait for visibility of btn_submitForImportDevice
        await browser.waitUntil(async () => {
            return await this.btn_submitForImportDashb.isDisplayed();
        }, { timeout: 20000, timeoutMsg: 'btn_submitForImportDevice not visible after 5s' });

        // Click on btn_submitForImportDevice
           await this.btn_submitForImportDashb.click();
           await browser.debug();

        

        


        
    }

    async fileUpload(url, locator) {
        const __filename = path.basename(module.parent.filename);
        const __dirname = path.dirname(__filename);
        const filePath = path.join(__dirname, url);
    
        const upload_file_element = await locator;
        await upload_file_element.scrollIntoView({ block: 'end' });
        await browser.execute(async (e) => {
          e.style.display = 'block';
        }, upload_file_element);
    
        await upload_file_element.waitForDisplayed();
        await upload_file_element.setValue(filePath);
      }

}
module.exports = new UploadFile ();