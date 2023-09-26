import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

// const valae = require('../../fixtures/login')
class LoginPage {
     login() {
        // ******************* LOGIN AND GET AUTH KEY ********************
        const tokenvalue = authenticator.generate("574WTVJOJ562OOSF2FCFPBJM6FIKHQBR");
        cy.readFile('D:/crowdbotics_automation/cypress/fixtures/login.json').then((data) => {
            data.token = parseInt(tokenvalue)
            cy.writeFile('D:/crowdbotics_automation/cypress/fixtures/login.json', JSON.stringify(data))
        })


        cy.fixture('login.json').then((myFixture) => {
            cy.request({
                method: 'POST',
                url: Cypress.env('url') + Cypress.env('loginEndPoint'),

                body: myFixture

            }).then((response) => {
                expect(response.status).to.eq(200)
                // auth_key = response.body.key
                // cy.log('api auth key is generated ', auth_key)
                return response.body
            })
            cy.log('json data    ===========', myFixture)
        })

    }
}
export default LoginPage;
