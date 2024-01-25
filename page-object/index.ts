import { Page } from "@playwright/test";

import connectionPages, {ConnectionPages} from "./connection";
import navigationPages, {NavigationPages} from "./navigation";
import userProfilePages, { UserProfilePages } from "./profile";

// Combine all page interfaces into a single interface.
export interface Pages extends ConnectionPages, NavigationPages, UserProfilePages {};

// Export a factory function that takes a Playwright Page instance and returns an object with all page instances.
export default (page: Page): Pages=>({
    ...connectionPages(page),
    ...navigationPages(page),
    ...userProfilePages(page),
})