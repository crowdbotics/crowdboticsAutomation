import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

export const doLogin = () => {
    // ******************* LOGIN AND GET AUTH KEY ******************** //
    const tokenvalue = authenticator.generate("VXHD455PWPHOUBIV2ZCXN3GFZUG5DCCY");
    cy.readFile('cypress/fixtures/api_login.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_login.json', JSON.stringify(data));
    });
    return cy.fixture('api_login.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doLogout = (auth_key) => {
    // ******************* Logout ******************** //


    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + '/api/v2/logout/',
        headers: {

            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

