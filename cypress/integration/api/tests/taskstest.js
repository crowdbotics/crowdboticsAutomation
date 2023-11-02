// import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>
import {doCteareApp} from '../pages/DashboardPage.js';
import { doCteareMilestone } from '../pages/TasksPage.js';
import {doLogin} from '../pages/loginPage.js';

let authKey;
let app_id;
describe("Dashboard Page", () => {
    let app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Create App Flow', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                doCteareMilestone(authKey, app_id).then((response) =>{
                    expect(response.status).to.eq(201)
                    cy.log("login response", response.body)
                })
            })
        })
    })
})



