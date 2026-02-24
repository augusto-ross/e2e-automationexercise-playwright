import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Cart', () => {
  let home: HomePage;
  let products: ProductsPage;
  let cart: CartPage;

  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    products = new ProductsPage(page);
    cart = new CartPage(page);

    await home.open();
    await home.goToProducts();
  });

  test('TC12 - should add multiple products to cart', async () => {
    await products.assertLoaded();

    await products.addNthProductToCartAndContinue(0);
    await products.addNthProductToCartAndViewCart(1);

    await cart.assertItemCount(2);
  });

  test('TC13 - should verify product quantity in cart', async () => {
    await products.openFirstProduct();

    await products.setQuantity(4);
    await products.addToCartFromDetailAndViewCart();

    await cart.assertFirstItemQuantity(4);
  });

  test('TC17 - should add product to cart and remove it', async () => {
    await products.addFirstProductToCartAndViewCart();
    await cart.assertHasAtLeastOneItem();

    await cart.removeFirstItem();
    // removeFirstItem já valida "cart is empty"
  });
});
