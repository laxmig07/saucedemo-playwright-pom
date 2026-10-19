import { defineConfig, devices } from '@playwright/test';

const config =({
  testDir: './tests',
  timeout: 100 * 1000,
  expect: {
    timeout: 5000, //override in global level
  },
  reporter: 'html',
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on', //off, on
  },
});
module.exports = config;