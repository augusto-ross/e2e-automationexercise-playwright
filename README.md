# QA E2E Automation - Automation Exercise

Welcome to this E2E test automation project! This repository showcases a robust automation framework built with **Playwright** and **TypeScript**, designed to test the [Automation Exercise](https://automationexercise.com/) e-commerce platform.

The main goal here is to move beyond simple script execution and demonstrate a scalable, maintainable architecture using the **Page Object Model (POM)**.

## Project Objectives

I built this project to:
- Automate critical user flows (registration, auth, search, products, cart, contact).
- Showcase architectural best practices in QA.
- Leverage Playwright's modern features for stability.
- Highlight the reasoning behind automation strategies, not just the code.

## System Under Test

- **Website:** https://automationexercise.com/
- **Domain:** E-commerce demo
- **Key Scenarios:** Registration, auth, product search, product details, cart management, contact form.

## Tech Stack

- **Framework:** Playwright
- **Language:** TypeScript
- **Pattern:** Page Object Model (POM)
- **Assertions:** Playwright's built-in `expect`

## Project Structure

Here is how the code is organized:

```
pages/
  BasePage.ts
  CartPage.ts
  ContactPage.ts
  HomePage.ts
  LoginPage.ts
  ProductsPage.ts
  RegisterPage.ts
  SignupPage.ts

tests/
  e2e/
    auth.spec.ts
    cart.spec.ts
    contact.spec.ts
    products.spec.ts
    registration.spec.ts
    smoke.search.spec.ts

utils/
  DataFactory.ts
  testUsers.ts

playwright.config.ts
```

### Structure explanation

- **pages/**  
  Contains Page Objects that encapsulate UI elements and user actions for each screen.

- **tests/e2e/**  
  Contains test specifications for auth, contact, cart, products, and smoke search.

- **BasePage**  
  Centralizes shared behaviors such as navigation and common utilities.

- **utils/**  
  Factories and test data (dynamic user generation and fixed credentials).

---

## Automation Strategy

- Focus on **business-critical scenarios** instead of full coverage
- Prefer **stable and semantic locators** (`getByRole`, visible text)
- Avoid hard waits (`waitForTimeout`)
- Validate **functional readiness**, not just technical page load events
- Keep selectors and UI logic inside Page Objects

---

## Covered Scenarios

| TC | Description |
|----|-------------|
| TC1 | Register a new user successfully |
| TC2 | Login with valid credentials |
| TC3 | Login with invalid credentials |
| TC4 | Logout |
| TC5 | Register with an existing email (error validation) |
| TC6 | Contact Us form submission |
| TC8 | Product list and product detail page |
| TC9 | Search for a product |
| TC12 | Add multiple products to cart |
| TC13 | Verify product quantity in cart |
| TC17 | Remove product from cart |

---

## How to Run the Tests

### Install dependencies
```bash
npm install
```

### Run all tests (headless)
```bash
npx playwright test
```

### Run tests with browser UI
```bash
npx playwright test --headed
```

### Run tests in UI mode
```bash
npx playwright test --ui
```

### View HTML report
```bash
npx playwright show-report
```
