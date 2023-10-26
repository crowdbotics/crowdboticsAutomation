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
    createTags: "/api/v1/prd_tags/?app=",
    createUserRoles: "/api/v1/prd_roles/?app=",
    createMilestone: "",
    createTasks: "",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/api/tests/*.js'
  }
});
