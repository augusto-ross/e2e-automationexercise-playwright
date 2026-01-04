import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { generateUser } from '../../utils/DataFactory';
import { invalidUser, validUser } from '../../utils/testUsers';

test.describe('Auth', () => {
  test('should login with valid user', async ({ page }) => {
    const login = new LoginPage(page);
    const user = validUser;

    await login.open();
    await login.login(user.email, user.password);
    await login.assertLoggedIn();
    });

  test('should not login with invalid user', async ({ page }) => {
    const login = new LoginPage(page);
    const user = invalidUser;

    await login.open();
    await login.login(user.email, user.password);
    await login.assertLoginError();
  });
});
