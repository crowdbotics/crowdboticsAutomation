/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';
import {doCreateStudioAIScreen} from '../pages/CanvasPage.js'

let app_name;
let authKey;
let app_id;
describe("Catalog Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Add Catalog Feature Flow', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                doCreateStudioAIScreen(authKey,app_id).then((response) => {
                    expect(response.status).to.eq(201)
                    cy.log("Add Catalog Feature response", response.body)
                })
            })
        })
    })
});