import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactPage extends BasePage {
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly messageInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;
    
    constructor(page: Page) {
      super(page);
        this.nameInput = page.locator('input[data-qa="name"]');
        this.emailInput = page.locator('input[data-qa="email"]');  
        this.subjectInput = page.locator('input[data-qa="subject"]');
        this.messageInput = page.locator('textarea[data-qa="message"]');
        this.submitButton = page.locator('input[data-qa="submit-button"]');
        this.successMessage = page.locator('div[class="status alert alert-success"]');
    }

    async assertLoaded() {
        await this.page.waitForURL(/\/contact_us/i, { waitUntil: 'domcontentloaded' });
        await expect(this.nameInput).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.subjectInput).toBeVisible();
        await expect(this.messageInput).toBeVisible();
        await expect(this.submitButton).toBeVisible();
    }

    async submitContactForm(data: { name: string, email: string, subject: string, message: string }) {
        await this.assertLoaded();
        await this.nameInput.fill(data.name);
        await this.emailInput.fill(data.email);
        await this.subjectInput.fill(data.subject);
        await this.messageInput.fill(data.message);

        this.page.once('dialog', async (dialog) => {
            await dialog.accept();
        });
        await this.submitButton.click();
    }

    async assertSuccessMessageVisible() {
        await expect(this.successMessage).toBeVisible();
        await expect(this.successMessage).toHaveText(/Success! Your details have been submitted successfully./i);
    }

    async open() {
        await this.page.goto('/contact_us');
        await this.assertLoaded();
    }

}