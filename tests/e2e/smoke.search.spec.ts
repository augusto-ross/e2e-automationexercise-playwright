import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { LoginPage } from '../../pages/LoginPage';
import { validUser } from '../../utils/testUsers';

test.describe('Search', () => {
  test('TC9 - should open site and search a product', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);

    await home.open();
    await home.goToProducts();
    await products.assertLoaded();

    await home.searchProduct('Dress');
    await products.assertSearchResultsVisible();
  });

  test('TC20 - should verify cart products are visible after login', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const loginPage = new LoginPage(page);

    await home.open();
    await home.goToProducts();
    await products.assertLoaded();

    await home.searchProduct('Dress');
    await products.assertSearchResultsVisible();

    await products.addNthProductToCartAndViewCart(0);
    await cart.assertHasAtLeastOneItem();

    await loginPage.open();
    await loginPage.login(validUser.email, validUser.password);
    await loginPage.assertLoggedIn();

    await home.goToCart();
    await cart.assertHasAtLeastOneItem();
  });
});
