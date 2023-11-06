import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

export const doLogin = () => {
    // ******************* LOGIN AND GET AUTH KEY ******************** //
    const tokenvalue = authenticator.generate("574WTVJOJ562OOSF2FCFPBJM6FIKHQBR");
    cy.readFile('cypress/fixtures/api_login.json').then((data) => {
        data.token = parseInt(tokenvalue)
        cy.writeFile('cypress/fixtures/api_login.json', JSON.stringify(data))
        // cy.wait(10000); 
    })
    return cy.fixture('api_login.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}