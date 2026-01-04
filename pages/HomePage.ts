import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly logo: Locator;
  readonly productsLink: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = page.getByRole('link', { name: /automation/i });
    this.productsLink = page.getByRole('link', { name: /products/i });
    this.searchInput = page.locator('#search_product'); // pode ajustar se mudar
    this.searchButton = page.locator('#submit_search');
  }

  async open() {
    await this.goto('/');
    await expect(this.page).toHaveTitle(/Automation Exercise/i);
  }

  async goToProducts() {
    await Promise.all([
      this.page.waitForURL('**/products', { waitUntil: 'domcontentloaded' }),
    await this.productsLink.click(),
    ]);
  }

  async searchProduct(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }
}
