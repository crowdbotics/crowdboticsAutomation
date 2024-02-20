/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';
import {  getStudioScreen, doGetStudioScreenEdge} from '../pages/StudioPage.js';


let app_id;
let app_name;
let authKey;
describe("Studio lnading page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Studio Page flow', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                const roles = ["Member", "Sales", "Collaborator", "Admin", "Finance"];
                const selectRole = roles[Math.floor(Math.random() * roles.length)];
                getStudioScreen(authKey, app_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("studio landing page", response.body)
                })
            })
        })
    })
    it('Get Studio screen edge', () => {
        doGetStudioScreenEdge(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Studio screen edge", response.body)
        })
    })
});