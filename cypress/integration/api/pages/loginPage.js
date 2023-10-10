import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

let anish;
let res;
let auth_key;
class LoginPage {
    doLogin() {
        // ******************* LOGIN AND GET AUTH KEY ******************** //
        const tokenvalue = authenticator.generate("574WTVJOJ562OOSF2FCFPBJM6FIKHQBR");
        cy.readFile('cypress/fixtures/login.json').then((data) => {
            data.token = parseInt(tokenvalue)
            cy.writeFile('cypress/fixtures/login.json', JSON.stringify(data))
        })


        cy.fixture('login.json').then((myFixture) => {
            cy.request({
                method: 'POST',
                url: Cypress.env('url') + Cypress.env('loginEndPoint'),
                body: myFixture

            }).then((response) => {
                expect(response.status).to.eq(200)
                auth_key = response.body.key
                cy.log('api auth key is generated ', auth_key)
                Cypress.env('token_key', auth_key);
                cy.log('json data    ===========', response.body)
                res = response;
            })


        })
        cy.log('json data  dfghdg   ===========', res)
        return res;

    }
}
export default LoginPage;