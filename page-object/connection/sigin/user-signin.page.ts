import { Locator, Page} from "@playwright/test";
import MainPage from "../../main-page";

/** User signin page */
class UserSiginPage extends MainPage {
    emailTextField: Locator;
    passwordTextField: Locator;
    submitButton: Locator;
    forgotPasswordButton: Locator;
    signupButton: Locator;
    loginWithGithubButton: Locator;
    loginWithSSOButton: Locator;

    constructor(page: Page){
        super(page);
        this.emailTextField = this.page.locator('#email');
        this.passwordTextField = this.page.locator('#password');
        this.submitButton = this.page.locator('button[type="submit"]');
        this.forgotPasswordButton = this.page.locator('a[href="/auth/reset"]');
        this.signupButton = this.page.locator('a[href*="/auth/signup"]');
        this.loginWithGithubButton = this.page.locator('a[href*="/api/v1/auth/user/github_login/"]');
        this.loginWithSSOButton = this.page.locator('a[href*="/auth/sso"]')
    }

    /**
     * Set user email.
     * @param {string} email - user email.
     */
    async setUserEmail(email: string): Promise<void>{
        await this.emailTextField.fill(email);
    }

    /**
     * Set user password.
     * @param {string} password - user password.
     */
    async setUserPassword(password: string): Promise<void>{
        await this.passwordTextField.fill(password);
    }

    /**
     * Submit form.
     */
    async submit(): Promise<void>{
        await this.submitButton.click();
    }

    /**
     * Forgot user login info.
     */
    async forgotUserLogin(): Promise<void>{
        await this.forgotPasswordButton.click();
    }

    /**
     * Go to signup page.
     */
    async goToSignUp(): Promise<void>{
        await this.signupButton.click();
    }

    /** 
     * Login with github.
     */
    async goToGithub(): Promise<void>{
        await this.loginWithGithubButton.click();
    }

    /**
     * Login with SSO.
     */
    async goToSSO(): Promise<void>{
        await this.loginWithSSOButton.click()
    }

    /**
     * Login credential - login with email and password.
     */
    async loginWithEmail(email: string, password: string): Promise<void>{
        await this.setUserEmail(email);
        await this.setUserPassword(password);
        await this.submit();
    }
}

export default UserSiginPage;