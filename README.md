# QA E2E Automation – Automation Exercise

Welcome to this E2E test automation project! This repository showcases a robust automation framework built with **Playwright** and **TypeScript**, designed to test the [Automation Exercise](https://automationexercise.com/) e-commerce platform.

The main goal here is to move beyond simple script execution and demonstrate a scalable, maintainable architecture using the **Page Object Model (POM)**.

## 🎯 Project Objectives

I built this project to:
- Automate critical user flows (like searching and browsing products).
- Showcase architectural best practices in QA.
- Leverage Playwright's modern features for stability.
- Highlight the reasoning behind automation strategies, not just the code.

## 🧪 System Under Test

- **Website:** https://automationexercise.com/
- **Domain:** E-commerce demo
- **Key Scenarios:** Home navigation, product search, and listing validation.

## 🧰 Tech Stack

- **Framework:** Playwright
- **Language:** TypeScript
- **Pattern:** Page Object Model (POM)
- **Assertions:** Playwright's built-in `expect`

## 🗂 Project Structure

Here is how the code is organized:

```
pages/
├─ BasePage.ts
├─ HomePage.ts
├─ ProductsPage.ts

tests/
└─ e2e/
   └─ search.spec.ts

utils/
playwright.config.ts
```

### Structure explanation

- **pages/**  
  Contains Page Objects that encapsulate UI elements and user actions for each screen.

- **tests/e2e/**  
  Contains test specifications describing user scenarios.

- **BasePage**  
  Centralizes shared behaviors such as navigation and common utilities.

---

## 🧠 Automation Strategy

- Focus on **business-critical scenarios** instead of full coverage
- Prefer **stable and semantic locators** (`getByRole`, visible text)
- Avoid hard waits (`waitForTimeout`)
- Validate **functional readiness**, not just technical page load events
- Keep selectors and UI logic inside Page Objects

---

## ▶️ How to Run the Tests

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