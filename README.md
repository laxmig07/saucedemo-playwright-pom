# SauceDemo UI Automation with Playwright

## Overview
An end-to-end UI automation project for the SauceDemo demo e-commerce application, built using Playwright and JavaScript with the Page Object Model (POM) design pattern.

## Tech Stack
- JavaScript
- Playwright Test
- Node.js
- Page Object Model (POM)

## Test Scenario
The end-to-end test covers:
1. Login to SauceDemo
2. Verify the products page
3. Select a product and add it to the cart
4. Verify the cart and proceed to checkout
5. Enter checkout information
6. Complete the order and verify the confirmation message

## Project Structure
- `page-objects/` — Page classes and Page Object Manager
- `tests/` — Playwright test specifications
- `utils/` — Test data

## Prerequisites
- Node.js and npm
- Git

## Installation
Clone the repository, then run:

```bash
npm install
npx playwright install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run the SauceDemo test:

```bash
npx playwright test tests/SauceDemoPOM.spec.js
```

Run with a visible browser:

```bash
npx playwright test tests/SauceDemoPOM.spec.js --headed
```

## Application
https://www.saucedemo.com/

## Learning Objectives
- Implement the Page Object Model
- Reuse page classes across test steps
- Automate a complete e-commerce checkout flow
- Use Playwright assertions and locator strategies

## Author
QA Automation portfolio project.
