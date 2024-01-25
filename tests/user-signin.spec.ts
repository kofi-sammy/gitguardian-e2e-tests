import { test, expect } from "@playwright/test";
import pageObject from "../page-object";

test('As a user I can login with email and password', async({page})=>{
    const email = 'sammydev56@gmail.com';
    const password = 'Testing@024175';
    
    const $ = pageObject(page);
    await page.goto('https://dashboard.gitguardian.com');
    await $.landingModalPage.acceptAll();
    await $.userSigninPage.setUserEmail(email);
    await $.userSigninPage.setUserPassword(password);
    await $.userSigninPage.submit();
    await $.topNavBar.goToUserDashboard();
    const currentURL = page.url();
    await expect(currentURL).toContain('/get-started');
})