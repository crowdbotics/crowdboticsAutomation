import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>


describe("Checkout flow", () => {
    let auth_key;
    const login = new LoginPage();
<<<<<<< HEAD
    it('POST request', () => {
         let response = login.login();
=======
    it('POST request', function () {
        login.doLogin();
        // login.doLogin().then((res) =>{
        //     cy.log('json data    ===========', res)
        // })

>>>>>>> f687c59bad3fdbdfd7caacf2a9b1971355b133cd
        // expect(response.status).to.eq(200)
        // auth_key = response.body.key
        // cy.log('api auth key is generated ', auth_key)
    })
})

