/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';
import { app_name_update, change_code_privacy_private_to_public, change_code_privacy_public_to_private, delete_app } from '../pages/SettingsPage.js';
let app_id;
let app_name;
let authKey;
describe("Settings Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Update app name flow', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                // cy.log("login response", response.body)
                // expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                app_name_update(authKey, app_name, app_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("update app name response", response.body)
                })
            })
        })
    })

    it('Change code privacy private to public', () => {
        change_code_privacy_private_to_public(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Change code privacy private to public response", response.body)
        })
    })

    it('Change code privacy public to private', () => {
        change_code_privacy_public_to_private(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Change code privacy public to private response", response.body)
        })
    })

    it('delete App', () => {
        delete_app(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("delete app response", response.body)
        })
    })

})