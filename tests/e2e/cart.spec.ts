import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Cart', () => {
  test('TC12 - should add multiple products to cart', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await home.open();
    await home.goToProducts();
    await products.assertLoaded();

    await products.addNthProductToCartAndContinue(0);
    await products.addNthProductToCartAndViewCart(1);

    await cart.assertItemCount(2);
  });

  test('TC13 - should verify product quantity in cart', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await home.open();
    await home.goToProducts();
    await products.openFirstProduct();

    await products.setQuantity(4);
    await products.addToCartFromDetailAndViewCart();

    await cart.assertFirstItemQuantity(4);
  });

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
