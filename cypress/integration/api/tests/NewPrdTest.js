/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';
import { doGetPRDPKCategory, doPostPRDPKCategory } from '../pages/NewPrdPage.js';

let authKey;
let app_id;
let app_name;
let group_id;
let group_name;
let categories_name;
let item_id;
let feature_id;
let tag_id;
let description_name;
let role_id;
let comment_id;
let categories_id
let title_name;
let item_name;
let added_items = [];
describe("PRD Category", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('prd pk category', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                doGetPRDPKCategory(authKey, app_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("prd pk category", response.body)
                })
            })
        })
    })

    it('Add prd pk category', () => {
        doPostPRDPKCategory(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("add new prd pk category response", response.body)
        })
    })
})

