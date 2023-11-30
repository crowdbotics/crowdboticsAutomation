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
    logoutEndPoint: "/api/v2/logout/",
    createApp: "/api/v1/github-repos/",
    searchApp1: "/api/v2/apps/?custom_name=",
    searchApp2: "&page=1&limit=8",
    createTags: "/api/v1/prd_tags/?app=",
    createUserRoles: "/api/v1/prd_roles/?app=",
    createprdGroup: "/api/v1/prd_groups/?app=",
    createprdItem: "/api/v1/prd_items/?app=",
    getprdGroup: "/api/v1/prd_groups/?app=",
    getprdItem: "/api/v1/prd_items/?group=",
    deleteprdItem: "/api/v1/prd_groups/bulk-delete/?app=",
    deleteprdGroup: "/api/v1/prd_groups/?app=",
    createprdai1: "/api/v1/apps/",
    createprdai2: "/prd-ai-generator/generate_features/",
    createcatalogtemplates: "/api/v1/prd_groups/import-archetype/?app=",
    createprdfeature: "/api/v1/prd_groups/import-features/?app=",
    createMilestone: "",
    createTasks: "",
    updateAppName: "/api/v2/apps/",
    codePrivacyPrivateToPublic1: "/api/v1/github-repos/",
    codePrivacyPrivateToPublic2: "/private/",
    codePrivacyPublicToPrivate1: "/api/v1/github-repos/",
    codePrivacyPublicToPrivate2: "/private/",
    deleteApp:"/api/v2/apps/",
    addJobRequest1: "/api/v2/apps/",
    addJobRequest2: "/jobs/",
    changePlan1: "/api/v2/apps/",
    changePlan2: "/plan/update/",
    viewTask1: "/api/v2/apps/",
    viewTask2: "/milestones/",
    getTaskId1: "/api/v2/tasks/",
    getTaskId2: "/",
    addMileStone1: "/api/v2/apps/",
    addMileStone2: "/milestones/",
    getTaskSharableStatus: "/api/v2/tasks/shareable-status/",
    getMilestone1: "/api/v2/apps/",
    getMilestone2: "/milestones/",
    getMilestone2: "/",
    updateMilestone1:"/api/v2/apps/",
    updateMilestone2: "/milestones/",
    updateMilestone3: "/",
    deleteMilestone1: "/api/v2/apps/",
    deleteMilestone2: "/milestones/",
    deleteMilestone3: "/",
    createTask: "/api/v2/tasks/",
    addTaskIntoMilestone1: "/api/v2/apps/",
    addTaskIntoMilestone2: "/milestones/",
    addTaskIntoMilestone3: "/add-task/",
    publicTask1 : "/api/v2/tasks/",
    publicTask2 : "/public/",
    searchTask1: "/api/v2/tasks/search-by-id/?search=",
    searchTask2: "&app=",
    getAllMilestone1: "/api/v2/apps/",
    getAllMilestone2: "/milestones/?current_tab=proposal",


    


  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/api/tests/*.js'
   //specPattern: 'cypress/integration/pagetest/add_test_case.js'
  }
});
