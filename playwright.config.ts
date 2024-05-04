import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  timeout: 60000,
  workers: process.env.CI ? 1 : undefined,

  reporter: [["allure-playwright"]],

  use: {
    trace: "on-first-retry",
    screenshot: "on",
    video: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
