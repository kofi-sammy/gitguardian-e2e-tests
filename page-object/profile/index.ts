import { Page } from "@playwright/test";

import PersonalSettingsPage from "./personal-details/personal-settings.page";
import PersonalSecurityPage from "./personal-details/security/personal-security.page";
import PersonalAccountPage from "./personal-details/account/personal-account.page";

export interface UserProfilePages{
    personalSettingsPage: PersonalSettingsPage,
    personalSecurityPage: PersonalSecurityPage,
    personalAccountPage: PersonalAccountPage,
}

export default(page: Page): UserProfilePages=>({
    personalSettingsPage: new PersonalSettingsPage(page),
    personalSecurityPage: new PersonalSecurityPage(page),
    personalAccountPage: new PersonalAccountPage(page),
})
    

   