import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

export const doLogin = () => {
    // ******************* LOGIN AND GET AUTH KEY ******************** //
    const tokenvalue = authenticator.generate("JPCML2HFM2ODRKXRMAMF6F4W4KBNDYTF");
    cy.readFile('cypress/fixtures/api_prod_login.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_prod_login.json', JSON.stringify(data));
    });
    return cy.fixture('api_prod_login.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('prodbaseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}