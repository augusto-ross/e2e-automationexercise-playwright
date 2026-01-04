import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly title: Locator;
  readonly productCards: Locator;
  readonly searchedProductsTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: /All Products/i });
    this.productCards = page.locator('.product-image-wrapper');
    this.searchedProductsTitle = page.getByRole('heading', { name: /Searched Products/i });
  }

  async assertLoaded() {
    await this.page.waitForURL(/\/products/i);
    await expect(this.page.locator('.features_items')).toBeVisible();
    await expect(this.productCards.first()).toBeVisible();
  }

  async assertSearchResultsVisible() {
    await expect(this.searchedProductsTitle).toBeVisible();
    await expect(this.productCards.first()).toBeVisible();
  }
}
