/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';
import { prd_overview_tags, prd_overview_userRoles, prd_create_group, prd_get_group, prd_delete_group,prd_create_item,prd_get_Item,prd_delete_item } from '../pages/PrdPage.js';

let authKey;
let app_id;
let app_name;
let group_id;
let item_id;
describe("PRD Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Create Tags Flow', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                prd_overview_tags(authKey, app_id).then((response) => {
                    expect(response.status).to.eq(201)
                    cy.log("create tags response", response.body)
                })
            })
        })
    })

    it('Create UserRoles Flow', () => {
        prd_overview_userRoles(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("create userroles response", response.body)
        })
    })

    it('Create PrdGroup Flow', () => {
        prd_create_group(authKey, app_id, 'PRD GROUP TEST' + app_id).then((response) => {
            group_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("create PrdGroup response", response.body)
        })
    })

    it('Get PrdGroup Flow', () => {
        prd_get_group(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PrdGroup response", response.body)
        })
    })

    it('Delete PrdGroup Flow', () => {
        prd_delete_group(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Delete PrdGroup response", response.body)
        })
    })

    it('Create PrdItem Flow', () => {
        prd_create_item(authKey, app_id, group_id, 'PRD ITEM TEST' + app_id).then((response) => {
            item_id=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("create PrdItem response", response.body)
        })
    })

    it('Get Prd Item Flow', () => {
        prd_get_Item(authKey, group_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PrdItem response", response.body)
        })
    })
    it('Delete PrdItem Flow', () => {
        prd_delete_item(authKey, app_id,group_id,item_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Delete PrdItem Response", response.body)
        })
    })

})


