import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly subscriptionEmailInput: Locator;
  readonly subscriptionSubmitButton: Locator;
  readonly subscriptionSuccessMessage: Locator;

  constructor(protected readonly page: Page) {
    this.subscriptionEmailInput = page.locator('#susbscribe_email');
    this.subscriptionSubmitButton = page.locator('#subscribe');
    this.subscriptionSuccessMessage = page.getByText('You have been successfully subscribed!');
  }

  async goto(path: string = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  async subscribe(email: string) {
    await this.subscriptionEmailInput.scrollIntoViewIfNeeded();
    await this.subscriptionEmailInput.fill(email);
    await this.subscriptionSubmitButton.click();
  }

  async assertSubscriptionSuccess() {
    await expect(this.subscriptionSuccessMessage).toBeVisible();
  }
}