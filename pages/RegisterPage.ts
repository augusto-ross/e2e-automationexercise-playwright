import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserData } from '../utils/DataFactory';

export class RegisterPage extends BasePage {
  readonly passwordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedHeading: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.passwordInput = page.locator('[data-qa="password"]');
    this.firstNameInput = page.locator('[data-qa="first_name"]');
    this.lastNameInput = page.locator('[data-qa="last_name"]');
    this.addressInput = page.locator('[data-qa="address"]');
    this.stateInput = page.locator('[data-qa="state"]');
    this.cityInput = page.locator('[data-qa="city"]');
    this.zipcodeInput = page.locator('[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
    this.accountCreatedHeading = page.getByText('Account Created!');
    this.continueButton = page.locator('[data-qa="continue-button"]');
  }

  async fillAccountInfo(user: UserData) {
    await this.passwordInput.fill(user.password);
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.addressInput.fill(user.address);
    await this.stateInput.fill(user.state);
    await this.cityInput.fill(user.city);
    await this.zipcodeInput.fill(user.zipcode);
    await this.mobileNumberInput.fill(user.mobileNumber);
    await this.createAccountButton.click();
  }

  async assertAccountCreated() {
    await expect(this.accountCreatedHeading).toBeVisible();
  }

  async continue() {
    await this.continueButton.click();
  }
}
