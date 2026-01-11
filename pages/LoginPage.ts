import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  // Login form
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;
  readonly loginError: Locator;

  readonly logoutLink: Locator;
  readonly loggedInAsText: Locator;

  constructor(page: Page) {
    super(page);


    this.logoutLink = page.getByRole('link', { name: /logout/i });
    this.loggedInAsText = page.getByText(/logged in as/i);

  
    this.loginEmailInput = page.locator('[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.loginError = page.getByText(/your email or password is incorrect/i);
  }

  async open() {
    await this.goto('/login');
    await expect(this.loginButton).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutLink.click();
    await expect(this.loginButton).toBeVisible(); // back to logged-out state
  }

  async assertLoggedIn() {
    await expect(this.loggedInAsText).toBeVisible();
    await expect(this.logoutLink).toBeVisible();
  }

  async assertLoginError() {
    await expect(this.loginError).toBeVisible();
  
  }

}
