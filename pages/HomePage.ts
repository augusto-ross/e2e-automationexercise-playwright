import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly logo: Locator;
  readonly productsLink: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchCategoryDropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = page.getByRole('link', { name: /automation/i });
    this.productsLink = page.getByRole('link', { name: /products/i });
    this.searchInput = page.locator('#search_product'); 
    this.searchButton = page.locator('#submit_search');
    this.searchCategoryDropdown = page.locator('.panel-group.category-products');
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

  async goToCart() {
    await Promise.all([
      this.page.waitForURL('**/view_cart', { waitUntil: 'domcontentloaded' }),
      this.page.locator('a[href="/view_cart"]').first().click(),
    ]);
  }

  async searchProduct(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  async goToTestCases() {
    await this.page.locator('a[href="/test_cases"]').first().click();
    await this.page.waitForURL('**/test_cases', { waitUntil: 'domcontentloaded' });
  }
  
  async selectCategory(category: string, subcategory: string) {
    await this.searchCategoryDropdown.getByRole('link', { name: new RegExp(`\\b${category}\\b`, 'i') }).click();
    await this.searchCategoryDropdown.getByRole('link', { name: subcategory }).click();
    await this.page.waitForURL(/\/category_products\//);
  }
}
