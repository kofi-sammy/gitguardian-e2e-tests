import { test, expect } from "@playwright/test";
import pageObject from "../page-object";

test('As a user, I can update first name and last name', async({page})=>{
    const email = 'sammydev56@gmail.com';
    const password = 'Testing@024175';
    const firstName = 'James';
    const lastName = 'Fabien';
   
    const $ = pageObject(page);
    await page.goto('https://dashboard.gitguardian.com');
    await $.landingModalPage.acceptAll();
    await $.userSigninPage.loginWithEmail(email, password);
    await $.topNavBar.goToUserProfile();
    await $.userMenuListPage.goToUserSetting();
    await $.personalSettingsPage.goToAccount();
    await $.personalAccountPage.setFirstName(firstName);
    await $.personalAccountPage.setLastName(lastName);
    await $.personalAccountPage.submit();
    const successMessage = await $.personalAccountPage.getSuccessMessage();
    await expect(successMessage).toBe('Updated user');
})