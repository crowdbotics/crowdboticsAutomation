// import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>
import { doLogin,doLogout } from '../pages/loginPage.js';

let authKey;
describe("Login flow", () => {
    it('login request Flow', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            expect(response.status, "Login Status code is not matching").to.eq(200)
            cy.log("login response", response.body.key)
        })
    })
    it('logout request Flow', () => {
        doLogout(authKey).then((response) => {
            authKey = response.body.key;
            cy.log(response.status);
            cy.log("login response", response.body.key)
            expect(response.status, "logout status is matching").to.eq(200)
        })
    })
})




