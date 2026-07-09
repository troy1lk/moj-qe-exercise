const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationintesting.online",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // Setup Allure Cypress plugin
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });

      return config;
    },
  },
});
