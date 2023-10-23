// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('callAPI', (method, endpoint, data) => {
  cy.log("this is callApi method")
    return cy.request({
      method,
      url: `${Cypress.env('baseUrl')}${endpoint}`,
      body: data
      // headers: {
      //   'Content-Type': 'application/json',
      //   // Add any authentication headers if needed
      // },
    }).then((response) => {
      // Add assertions to validate the response
      
      expect(response.status).to.eq(200); // Example: Check if the status code is 200
      // Add more assertions as needed based on your API response structure
  
      // Return the response object
      return response;
    });
  });

Cypress.Commands.add("enterText", (element1, element2) => {
    element1.type(element2)
});
Cypress.Commands.add("clickOnElement", (element1) => {
    element1.click({ force: true });
})

