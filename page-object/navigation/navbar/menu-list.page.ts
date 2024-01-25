import {Locator, Page } from "@playwright/test";
import MainPage from "../../main-page";

/** User menu list */
class UserMenuListPage extends MainPage{
    userSettingButton: Locator;
    logoutButton: Locator;

    constructor(page: Page){
        super(page);
        this.userSettingButton = this.page.locator('a[href="/settings/personal"]');
        this.logoutButton = this.page.locator('a[href="/logout"]');
    }
    
    /**
     * User setting.
     */
    async goToUserSetting(): Promise<void>{
        await this.userSettingButton.click();
    }

    /**
     * Logout.
     */
    async logout(): Promise<void>{
        await this.logoutButton.click();
    }
}

export default UserMenuListPage;