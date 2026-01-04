import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { generateUser } from '../../utils/DataFactory';
import { SignupPage } from '../../pages/SignupPage';
import { validUser } from '../../utils/testUsers';

test.describe('Auth', () => {
  test('should login with valid user', async ({ page }) => {
    const login = new LoginPage(page);
    const user = validUser;

    await login.open();
    await login.login(user.email, user.password);
    await login.assertLoggedIn();
    });
});
