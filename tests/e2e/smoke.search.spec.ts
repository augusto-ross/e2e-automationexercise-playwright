import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';

test.describe('Smoke - Search', () => { 
  test('TC9 - should open site and search a product', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);

    await home.open();
    await home.goToProducts();
    await products.assertLoaded();

    await home.searchProduct('Dress');
    await products.assertSearchResultsVisible();
  });
});
