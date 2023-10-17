// import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>
import { doLogin } from 'D:/crowdbotics_automation/cypress/integration/api/pages/loginPage.js';

<<<<<<< HEAD

describe("Checkout flow", () => {
    let auth_key;
    const login = new LoginPage();

    it('POST request', () => {
         let response = login.login();

    it('POST request', function () {
        login.doLogin();
        // login.doLogin().then((res) =>{
        //     cy.log('json data    ===========', res)
        // })


        // expect(response.status).to.eq(200)
        // auth_key = response.body.key
        // cy.log('api auth key is generated ', auth_key)
    })
})
});
=======
describe("Login flow", () => {
    it('login request', () => {
        doLogin().then((response) => {
            expect(response.status, "Login Status code is not matching").to.eq(200)
            cy.log("login response", response.body.key)
        })
    })
})


>>>>>>> 972398ae658735eb35aa9cedd78bd2e2ba58e90f
