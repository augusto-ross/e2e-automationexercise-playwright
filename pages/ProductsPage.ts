import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly title: Locator;
  readonly productCards: Locator;
  readonly searchedProductsTitle: Locator;
  readonly addedModal: Locator;
  readonly viewCartButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly firstProductLink: Locator;
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly addToCartButton: Locator;



  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: /All Products/i });
    this.productCards = page.locator('.product-image-wrapper');
    this.searchedProductsTitle = page.getByRole('heading', { name: /Searched Products/i });
    this.addedModal = page.locator('.modal-content');
    this.viewCartButton = page.getByRole('link', { name: /view cart/i });
    this.continueShoppingButton = page.getByRole('button', { name: /continue shopping/i });
    this.firstProductLink = this.productCards.first().getByRole('link', { name: /view product/i });
    this.productName = page.locator('.product-information h2');
    this.productPrice = page.locator('.product-information span').filter({ hasText: /^Rs\.\s*\d+/ });
    this.addToCartButton = page.getByRole('button', { name: /add to cart/i });  

  }

  async assertLoaded() {
    await this.page.waitForURL(/\/products/i, { waitUntil: 'domcontentloaded' });
    await expect(this.title).toBeVisible();
    await expect(this.productCards.first()).toBeVisible();
}

  async assertSearchResultsVisible() {
    await expect(this.searchedProductsTitle).toBeVisible();
    await expect(this.productCards.first()).toBeVisible();
  }
  async addFirstProductToCartAndViewCart() {
    await this.assertLoaded();

    const firstCard = this.productCards.first();

    // Garante que o overlay aparece
    await firstCard.scrollIntoViewIfNeeded();
    await firstCard.hover();

    // Clica especificamente no botão do overlay (o laranja)
    const overlayAddToCart = firstCard.locator('.product-overlay a', { hasText: 'Add to cart' });
    await overlayAddToCart.click();

    await expect(this.addedModal).toBeVisible();

    await Promise.all([
      this.page.waitForURL(/\/view_cart/i),
      this.viewCartButton.click(),
    ]);

  }

  async openFirstProduct() {
    const firstCard = this.productCards.first();
    await firstCard.getByRole('link', { name: /view product/i }).click();

  }

  async assertProductDetailLoaded() {
    await expect(this.productName).toBeVisible();
    await expect(this.productPrice).toBeVisible();
    await expect(this.addToCartButton).toBeVisible();
  }
}
