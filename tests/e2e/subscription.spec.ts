import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { CartPage } from '../../pages/CartPage';

test.describe('Subscription', () => {
  test('TC10 - should subscribe successfully from home page', async ({ page }) => {
    const home = new HomePage(page);

    await home.open();
    await home.subscribe('testsubscriber@example.com');
    await home.assertSubscriptionSuccess();
  });

  test('TC11 - should subscribe successfully from cart page', async ({ page }) => {
    const home = new HomePage(page);
    const cart = new CartPage(page);

    await home.open();
    await home.goToCart();
    await cart.subscribe('testsubscriber@example.com');
    await cart.assertSubscriptionSuccess();
  });
});
