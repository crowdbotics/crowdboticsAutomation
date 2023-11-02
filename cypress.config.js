const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 10000,
  env:
  {
    baseUrl: "https://crowdbotics-slack-dev.herokuapp.com",
    username: "sneh@crowdbotics.com",
    password: "devstringx@123",
    authenticationToken: "UGNYCSUVC4BCH7NL7G54KGBNN7GOLGJK",
    token_key: "",
    loginEndPoint: "/api/v2/totp-login/",
    createApp: "/api/v1/github-repos/",
    createMilestone: "",
    createTasks: "",
    updateAppName: "/api/v2/apps/",
    codePrivacyPrivateToPublic1: "/api/v1/github-repos/",
    codePrivacyPrivateToPublic2: "/private/",
    codePrivacyPublicToPrivate1: "/api/v1/github-repos/",
    codePrivacyPublicToPrivate2: "/private/",
    deleteApp:"/api/v2/apps/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/api/tests/*.js'
   //specPattern: 'cypress/integration/pagetest/add_test_case.js'
  }
});
