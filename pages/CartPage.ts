import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartTable: Locator;
  readonly cartRows: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    super(page);

    // Container/tabela do carrinho
    this.cartTable = page.locator('#cart_info_table');
    this.cartRows = page.locator('#cart_info_table tbody tr');

    // Mensagem comum quando o carrinho fica vazio:
    this.emptyCartMessage = page.getByText(/cart is empty/i);
  }

  async assertLoaded() {
    await this.page.waitForURL(/\/view_cart/i);
    await expect(this.cartTable).toBeVisible();
  }

  async assertHasAtLeastOneItem() {
    await this.assertLoaded();
    await expect(this.cartRows.first()).toBeVisible();
  }

  async removeFirstItem() {
    await this.assertHasAtLeastOneItem();

    const firstRow = this.cartRows.first();
    const deleteBtn = firstRow.locator('.cart_delete a, .cart_quantity_delete');

    await deleteBtn.first().click();

    await expect(this.emptyCartMessage).toBeVisible();
  }

  async assertItemCount(expectedCount: number) {
    await this.assertLoaded();
    await expect(this.cartRows).toHaveCount(expectedCount);
  }

  async assertFirstItemQuantity(expectedQty: number) {
    await this.assertLoaded();
    const qtyButton = this.cartRows.first().locator('.cart_quantity button');
    await expect(qtyButton).toHaveText(expectedQty.toString());
  }
}
