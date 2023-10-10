// cypress/support/commands.js

 


Cypress.Commands.add("getApiResponse", () => {
    cy.request({
      method: "GET",
      url: "https://example.com/api/endpoint", // Replace with your API endpoint
    }).as("apiResponse");
  });