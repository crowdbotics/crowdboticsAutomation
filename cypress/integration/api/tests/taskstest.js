// import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doAddMilestone, doGetTaskSharableStatus, doGetMilestone, doUpdateMilestone, doCreateTask, doAddTaskIntoMilestone, doPublicTask, doSearchTask, doGetAllMilestone } from '../pages/TasksPage.js';
import { doLogin } from '../pages/loginPage.js';

let authKey;
let app_id;
let milestone_name1 = "milestone1";
let updated_milestone_name = 'Milestone1Updated';
let milestone_id;
let milestone_name;
let task_name = "Task1";
let task_hours = "2.0";
let task_cost = "120.00";
let task_id;
describe("Tasks Page", () => {
    let app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Add Milestone', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                doAddMilestone(authKey, app_id, milestone_name1).then((response) => {
                    milestone_id = response.body.id;
                    milestone_name = response.body.title;
                    expect(response.status).to.eq(201)
                    cy.log("create milestone response", response.body)
                })
            })
        })
    })
    it('Get TaskSharableStatus', () => {

        doGetTaskSharableStatus(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Get Milestone', () => {

        doGetMilestone(authKey, app_id, milestone_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('UpdateMilestone', () => {

        doUpdateMilestone(authKey, app_id, milestone_id, updated_milestone_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Create Task', () => {

        doCreateTask(authKey, app_id, task_name, task_hours, task_cost).then((response) => {
            task_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("create milestone response", response.body)
        })
    })

    it('Add Task into Milestone', () => {

        doAddTaskIntoMilestone(authKey, app_id, milestone_id, task_id).then((response) => {

            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Public Task', () => {

        doPublicTask(authKey, app_id, task_id, task_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Search Task', () => {

        doSearchTask(authKey, app_id, task_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('View Task', () => {

        doSearchTask(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Get All Milestone', () => {

        doGetAllMilestone(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)

            cy.log("create milestone response", response.body)
        })
    })
})







