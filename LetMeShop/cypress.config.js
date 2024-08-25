const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true, // Enable HTML report generation
    json: true  // Enable JSON report generation
  },
  e2e: {
    env: {
      LetMeShope: "https://rahulshettyacademy.com/client/",
      GREENKART:"https://rahulshettyacademy.com/seleniumPractise/#/",
      AutomationPractice:"https://rahulshettyacademy.com/AutomationPractice/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      on("file:preprocessor", cucumber());
     
    },
    specPattern:"cypress/integration/Tests/*.feature"

  },
});
