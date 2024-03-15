/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';
import { app_name_update } from '../pages/SettingsPage.js';
import { dogetplatforms } from '../pages/StatusPage.js';


let app_id;
let app_name;
let authKey;


describe("Status Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Get Platforms Flow', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                dogetplatforms(authKey,app_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("Get Platforms response", response.body)
                })
            })
        })
    })
})
