import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>


describe("Checkout flow", () => {
    let auth_key;
    const login = new LoginPage();
    it('POST request', () => {
         let response = login.login();
        // expect(response.status).to.eq(200)
        // auth_key = response.body.key
        // cy.log('api auth key is generated ', auth_key)
    })
})

