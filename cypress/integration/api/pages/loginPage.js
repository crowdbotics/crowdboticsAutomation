import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

export const doLogin = () => {
    // ******************* LOGIN AND GET AUTH KEY ******************** //
    const tokenvalue = authenticator.generate("574WTVJOJ562OOSF2FCFPBJM6FIKHQBR");
    cy.readFile('cypress/fixtures/login.json').then((data) => {
        data.token = parseInt(tokenvalue)
        cy.writeFile('cypress/fixtures/login.json', JSON.stringify(data))
    })
    return cy.fixture('login.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}



