import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';

test.describe('Products', () => {
  test('TC7 - should navigate to test cases page and verify content', async ({ page }) => {
    const home = new HomePage(page);

    await home.open();
    await home.goToTestCases();

    await expect(page).toHaveURL(/\/test_cases/);
    await expect(page.getByRole('heading', { name: 'Test Cases', exact: true })).toBeVisible();
  });

  test('TC8 - should open product list and product details page', async ({ page }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);

    await home.open();
    await home.goToProducts();
    await products.openFirstProduct();
    await products.assertProductDetailLoaded();
  });

  test('TC18 - View Product Categories', async ({ page }) => {
    const home = new HomePage(page);
    

    await home.open();
    await expect(home.searchCategoryDropdown).toBeVisible();
    await home.selectCategory('Women', 'Dress');

    await expect(page).toHaveURL(/\/category_products\//);
    await expect(page.getByRole('heading', { name: /dress products/i })).toBeVisible();

    await home.selectCategory('Men', 'Tshirts');

    await expect(page).toHaveURL(/\/category_products\//);
    await expect(page.getByRole('heading', { name: /tshirts products/i })).toBeVisible();
  });
});
