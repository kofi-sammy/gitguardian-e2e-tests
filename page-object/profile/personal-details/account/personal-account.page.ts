import {Locator, Page } from "@playwright/test";
import MainPage from "../../../main-page";

class PersonalAccountPage extends MainPage{
    firstName: Locator;
    lastName: Locator;
    submitButton: Locator;
    successMessage: Locator;

    constructor(page: Page){
        super(page);
        this.firstName = this.page.locator('#first_name');
        this.lastName = this.page.locator('#last_name');
        this.submitButton = this.page.locator('button[type="submit"]');
        this.successMessage = this.page.locator('#root>:nth-child(1)');
    }

    /**
     * User first name.
     * @param {string} firstname.
     */
    async setFirstName(firstname: string): Promise<void>{
        await this.firstName.fill(firstname);
    }

    /**
     * User last name.
     * @param {string} lastname.
     */
    async setLastName(lastname: string): Promise<void>{
        await this.lastName.fill(lastname);
    }

    /**
     * Submit form.
     */
    async submit(): Promise<void>{
        await this.submitButton.click();
    }

    /**
     * Success message.
     */
    async getSuccessMessage() {
        await this.successMessage.waitFor({state:'visible'});
        const successMessageText = await this.successMessage.textContent();
        return successMessageText;
    }
    
    
}

export default PersonalAccountPage;