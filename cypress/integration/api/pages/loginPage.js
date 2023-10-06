import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

let anish;
let res;
let auth_key;
class LoginPage {
    doLogin() {
        // ******************* LOGIN AND GET AUTH KEY ********************
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
        return res;

    }
}
export default LoginPage;
// describe("Checkout flow", () => {
//     let auth_key;
//     let milestone_id;
//     let task_id;
//     let app_id;
//     let payment_id;
//     let quote_id;
//     let attributes_id;
//     const baseURL= "https://cbdash-pr-4940.herokuapp.com"
//     before('Login with 2FA', () => {
//         // ******************* LOGIN AND GET AUTH KEY ********************
//         const token = authenticator.generate("GBK5PY3WYRFE7V54JTBQDR7FBHUCBVNI");
//         cy.request({
//             method: 'POST',
//             url: baseURL+'/api/v2/login/',
//             body: cy.fixture(login.json),
//         }).then((response) => {
//             // expect(response.status).to.eq(200)
//             // auth_key = response.body.key
//             // cy.log('api auth key is generated ', auth_key)
//             return response.body
//         })
//     })
// })