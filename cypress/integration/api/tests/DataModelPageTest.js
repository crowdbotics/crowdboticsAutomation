/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doDatamodelLogin } from '../pages/loginPage.js';
import { doAddDataModel, doGetDataModel } from '../pages/DataModelPage.js';

let authKey;
let app_id;
let app_name;

describe("DataModel Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Add DataModel Flow', () => {
        doDatamodelLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                //  expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                doAddDataModel(authKey, app_id).then((response) => {
                    expect(response.status).to.eq(400)
                    cy.log("Add DataModel response", response.body)
                })
            })
        })
    })
    it('Get DataModel Flow', () => {
        doGetDataModel(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get DataModel response", response.body)
        })
    })
})