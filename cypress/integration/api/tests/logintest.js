// import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>
import { doLogin } from '../pages/loginPage.js';

describe("Login flow", () => {
    it('login request', () => {
        doLogin().then((response) => {
            expect(response.status, "Login Status code is not matching").to.eq(200)
            cy.log("login response", response.body.key)
        })
    })
})


