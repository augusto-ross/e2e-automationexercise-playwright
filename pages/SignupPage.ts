import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SignupPage extends BasePage {
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
  readonly signupErrorExistingEmail: Locator;

  constructor(page: Page) {
    super(page);
    this.signupNameInput = page.locator('[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.signupErrorExistingEmail = page.getByText(/email address already exist/i);
  }

  async open() {
    await this.goto('/login');
    await expect(this.signupButton).toBeVisible();
  }

  async signup(name: string, email: string) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }

  async assertExistingEmailError() {
    await expect(this.signupErrorExistingEmail).toBeVisible();
  }
}