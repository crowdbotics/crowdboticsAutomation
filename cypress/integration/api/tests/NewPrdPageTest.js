/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doNewPrdLogin } from '../pages/loginPage.js';
import { doGetOrganizationPRDList, doGenerateOrganizationPRD, doGetOrganizationPRDById, doPutOrganizationPRD, doPatchOrganizationPRD, doDeleteOrganizationPRD } from '../pages/NewPrdPage.js';

let  app_name;
let  app_id;
let authKey;
let generatePrd_id;
describe("New PRD Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Get all PRD List by organization User', () => {
        doNewPrdLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                doGetOrganizationPRDList(authKey).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("Get all PRD List by organization User response", response.body)
                })
            })
        })
    })

    it('Generate PRD by organization User', () => {
        doGenerateOrganizationPRD(authKey).then((response) => {
            generatePrd_id = response.body.data.id;
            expect(response.status).to.eq(202)
            cy.log("Generate PRD by organization User Response", response.body)

        })
    })
    it('Get generated PRD Using Id by organization User', () => {
        doGetOrganizationPRDById(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get generated PRD Using Id by organization User", response.body)

        })
    })
    it('Put generated PRD by organization User', () => {
        doPutOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put generated PRD by organization User response", response.body)
        })
    })
    it('Patch generated PRD by organization User', () => {
        doPatchOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch generated PRD by organization User response", response.body)
        })
    })
    it('Delete generated PRD by organization User', () => {
        doDeleteOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete generated PRD by organization User Response", response.body)
        })

    })
})

