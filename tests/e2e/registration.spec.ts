import { test } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';
import { RegisterPage } from '../../pages/RegisterPage';
import { LoginPage } from '../../pages/LoginPage';
import { generateUser } from '../../utils/DataFactory';
import { validUser } from '../../utils/testUsers';

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

  test('TC5 - should show error when registering with an existing email', async ({ page }) => {
    const signupPage = new SignupPage(page);

    await signupPage.open();
    await signupPage.signup('Any Name', validUser.email);

    await signupPage.assertExistingEmailError();
  });
});
