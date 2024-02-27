/// <reference types = "cypress"/>
import { doAddJobRequest, doGetJobRequest, doGetJobRequestUsingId, doEditJobRequest, doDeleteJobRequest } from '../pages/JobPage.js';
import { doJobLogin } from '../pages/loginPage.js';
import { doCteareApp } from '../pages/DashboardPage.js';
let job_id;
let authKey;
let app_id;
let project_description;
describe("Job Page", () => {
    const app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Add Job Request Flow', () => {
        doJobLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                // expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                doAddJobRequest(authKey, app_id).then((response) => {
                    job_id = response.body.id;
                    expect(response.status).to.eq(201)
                    cy.log("Add Job Request response", response.body)
                })
            })
        })
    })
    it('Get Job Request Flow', () => {

        doGetJobRequest(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Job Request response", response.body)
        })
    })

    it('Get Job Request Using ID Flow', () => {

        doGetJobRequestUsingId(authKey, app_id, job_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Job Request Using ID response", response.body)
        })
    })
    it('Edit Job Request Flow', () => {
        project_description = "TestDescription" + app_id;
        doEditJobRequest(authKey, app_id, job_id, project_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Edit Job Request response", response.body)
        })
    })
    it('Delete job Request Flow', () => {

        doDeleteJobRequest(authKey, app_id, job_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Delete job Request response", response.body)
        })
    })
})