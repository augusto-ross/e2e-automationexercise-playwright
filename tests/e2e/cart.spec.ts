import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Cart', () => {
  test('TC17 - should add product to cart and remove it', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await home.open();
    await home.goToProducts();

    await products.addFirstProductToCartAndViewCart();
    await cart.assertHasAtLeastOneItem();

    await cart.removeFirstItem();
    // removeFirstItem já valida “cart is empty”
  });
});
