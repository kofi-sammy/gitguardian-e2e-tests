import { Locator, Page } from "@playwright/test";
import MainPage from "../../../main-page";

/** Personal security page */
class PersonalSecurityPage extends MainPage{
    currentPaswordTextField: Locator;
    newPasswordTextField: Locator;
    confirmNewPasswordTextField: Locator;
    successMessage: Locator;
    submitButton: Locator;

    constructor(page: Page){
        super(page);
        this.currentPaswordTextField = this.page.locator('#old_password')
        this.newPasswordTextField = this.page.locator('#new_password');
        this.confirmNewPasswordTextField  = this.page.locator('#confirm_password');
        this.successMessage = this.page.locator('#root>:nth-child(1)')
        this.submitButton = this.page.locator('button[type="submit"]')
    }

    /**
     * Set current password.
     * @param {string} password - new user password.
     */
    async setCurrentPassword(password: string): Promise<void>{
        await this.currentPaswordTextField.fill(password)
    }
     
    /**
     * Set new password.
     * @param {string} password - new user password.
     */
    async setNewPassword(password: string): Promise<void>{
        await this.newPasswordTextField.fill(password)
    }

    /**
     * Set confirm new password.
     * @param {string} password - new user password.
     */
    async setConfirmPassword(password: string): Promise<void>{
        await this.confirmNewPasswordTextField.fill(password);
    }

    /**
     * Submit form.
     */
    async submit(): Promise<void>{
        await this.submitButton.click();
    }

    /**
     * Update password.
     */
    async updatePassword(currentPassword: string, newPassword: string): Promise<void>{
        await this.setCurrentPassword(currentPassword);
        await this.setNewPassword(newPassword);
        await this.setConfirmPassword(newPassword);
        await this.submit();
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

export default PersonalSecurityPage;