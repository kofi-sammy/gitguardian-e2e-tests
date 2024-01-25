import { test, expect } from "@playwright/test";
import pageObject from "../page-object";

test('As a user, I can logout from my workspace', async({page})=>{
    const email = 'sammydev56@gmail.com';
    const password = 'Testing@024175';

    const $ = pageObject(page)
    await page.goto('https://dashboard.gitguardian.com');
    await $.landingModalPage.acceptAll();
    await $.userSigninPage.loginWithEmail(email, password);
    await $.topNavBar.goToUserProfile();
    const logoutButton = await $.userMenuListPage.logout();
    await expect(logoutButton).not.toBeTruthy();
})