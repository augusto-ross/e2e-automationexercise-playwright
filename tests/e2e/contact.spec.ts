import { test } from '@playwright/test';
import { ContactPage } from '../../pages/ContactPage';
import { generateUser } from '../../utils/DataFactory';


test.describe('Contact Us', () => {
    test('should submit contact us form successfully', async ({ page }) => {
    const contact = new ContactPage(page);
    const userData = generateUser();

    await contact.open();
    await contact.submitContactForm({
        name: userData.name,
        email: userData.email,
        subject: 'Test Subject',
        message: 'This is a test message.',
    });
    await contact.assertSuccessMessageVisible();
    });
});

