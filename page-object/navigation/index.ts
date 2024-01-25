import { Page } from "@playwright/test";

import TopNavBar from "./navbar/topbar.page";
import UserMenuListPage from "./navbar/menu-list.page";

export interface NavigationPages{
    topNavBar: TopNavBar,
    userMenuListPage: UserMenuListPage,
}

export default (page: Page): NavigationPages =>({
    topNavBar: new TopNavBar(page),
    userMenuListPage: new UserMenuListPage(page),
})