# QA E2E Automation – Automation Exercise

This repository contains an end-to-end (E2E) test automation project built using **Playwright + TypeScript**, applying the **Page Object Model (POM)** pattern.

The goal of this project is to demonstrate a structured and maintainable approach to QA automation, focusing on critical user flows and realistic testing scenarios.

---

## 🎯 Project Objectives

- Automate critical E2E flows of a demo e-commerce application
- Apply good practices for test automation architecture
- Use Playwright features to create stable and reliable tests
- Demonstrate QA reasoning beyond tool usage

---

## 🧪 System Under Test

- **Website:** https://automationexercise.com/
- **Domain:** E-commerce demo application
- **Main features tested:**
  - Home navigation
  - Product search
  - Product listing and visibility
  - (More scenarios to be added incrementally)

---

## 🧰 Tech Stack

- **Test Framework:** Playwright
- **Language:** TypeScript
- **Test Type:** End-to-End (E2E)
- **Pattern:** Page Object Model (POM)
- **Assertions:** Playwright built-in `expect`

---

## 🗂 Project Structure

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