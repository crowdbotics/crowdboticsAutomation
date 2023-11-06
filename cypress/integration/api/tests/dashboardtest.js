// import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>
import { doCteareApp, searchApp } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';

let authKey;
let  app_name;
describe("Dashboard Page", () => {
     app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Create App Flow', () => {
        doLogin().then((response) => {
            cy.log("login response", response.body.key)
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                app_name=response.body.name;
                cy.log("login response", response.body)
                expect(response.status).to.eq(201)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
            })
        })
    })
    it('Search App Flow', () => {

        searchApp(authKey, app_name).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
})



