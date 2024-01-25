import { Page } from "@playwright/test";

import UserSiginPage from "./sigin/user-signin.page";
import LandingModalPage from "./landing/landing.page";

export interface ConnectionPages {
    userSigninPage: UserSiginPage,
    landingModalPage: LandingModalPage
}

export default(page: Page): ConnectionPages =>({
    userSigninPage: new UserSiginPage(page),
    landingModalPage: new LandingModalPage(page),
})