import {Page} from "@playwright/test";

class MainPage {
    page: Page;

    /**
     * create a new Page instance.
     * @param page - playwright page;
     */
    constructor(page: Page){
        this.page = page;
    }
}

export default MainPage;