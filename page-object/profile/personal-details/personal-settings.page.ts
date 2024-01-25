import {Locator, Page} from "@playwright/test";
import MainPage from "../../main-page";

/** Personal Details Page */
class PersonalSettingsPage extends MainPage{
  accountSetting: Locator;
  securitySetting: Locator;
  
  constructor(page: Page){
    super(page);
    this.accountSetting = this.page.locator('a[href*="/personal/account"]');
    this.securitySetting = this.page.locator('a[href*="/personal/security"]');
  }

    /**
     * Account setting.
     */
    async goToAccount(): Promise<void>{
        await this.accountSetting.click();
    }

    /**
     * Security setting.
     */
    async goToUserSecuritySetting(): Promise<void>{
        await this.securitySetting.click();
    }
}

export default PersonalSettingsPage;