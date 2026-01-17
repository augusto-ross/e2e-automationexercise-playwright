import {test} from '@playwright/test';
import {HomePage} from '../../pages/HomePage';
import {ProductsPage} from '../../pages/ProductsPage';


test.describe('Products', () => {
    test('should open product list and product details page', async ({page}) => {
        const home = new HomePage(page);
        const products = new ProductsPage(page);

        await home.open();
        await home.goToProducts();
        await products.openFirstProduct();
        await products.assertProductDetailLoaded();
        
    });
});

