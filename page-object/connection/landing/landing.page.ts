import { Locator, Page } from "@playwright/test";
import MainPage from "../../main-page";

/** GitGuardian landing page. */
class LandingModalPage extends MainPage{
    acceptButton: Locator;

    constructor(page: Page){
        super(page)
        this.acceptButton = this.page.locator('button.iubenda-cs-accept-btn.iubenda-cs-btn-primary')
    }

    /**
     * Accept all button 
     */
    async acceptAll(): Promise<void>{
        await this.acceptButton.click()
    }
}

export default LandingModalPage;