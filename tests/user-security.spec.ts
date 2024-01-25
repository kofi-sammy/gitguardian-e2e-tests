import { test, expect } from "@playwright/test";
import pageObject from "../page-object";

test('As a user, I can update password', async({page})=>{
    const email = 'sammydev56@gmail.com';
    const password = 'Testing@024175';
    const newPassword = 'Testing@024176';
    
    const $ = pageObject(page);
    await page.goto('https://dashboard.gitguardian.com');
    await $.landingModalPage.acceptAll();
    await $.userSigninPage.loginWithEmail(email, password);
    await $.topNavBar.goToUserProfile();
    await $.userMenuListPage.goToUserSetting();
    await $.personalSettingsPage.goToUserSecuritySetting();
    await $.personalSecurityPage.updatePassword(password,newPassword);
    const successMessage = await $.personalSecurityPage.getSuccessMessage();
    await expect(successMessage).toBe('Password updated');
})