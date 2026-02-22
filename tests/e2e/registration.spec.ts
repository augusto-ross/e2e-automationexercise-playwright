import { test } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';
import { RegisterPage } from '../../pages/RegisterPage';
import { LoginPage } from '../../pages/LoginPage';
import { generateUser } from '../../utils/DataFactory';

test.describe('Registration', () => {
  test('TC1 - should register a new user successfully', async ({ page }) => {
    const user = generateUser();
    const signupPage = new SignupPage(page);
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);

    await signupPage.open();
    await signupPage.signup(user.name, user.email);

    await registerPage.fillAccountInfo(user);
    await registerPage.assertAccountCreated();

    await registerPage.continue();
    await loginPage.assertLoggedIn();
  });
});
