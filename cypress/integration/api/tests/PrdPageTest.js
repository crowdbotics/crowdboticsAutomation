/// <reference types = "cypress"/>
import {doCteareApp} from '../pages/DashboardPage.js';
import {doLogin} from '../pages/loginPage.js';
import {prd_overview_tags,prd_overview_userRoles,prd_AI,prd_catalog_templates,prd_add_features} from '../pages/PrdPage.js';

let authKey;
let app_id;
let app_name;
describe("PRD Page", () => {
    let app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
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
                prd_overview_tags(authKey, app_id).then((response) =>{
                    expect(response.status).to.eq(201)
                    cy.log("create tags response", response.body)
                })
            })
        })
    })
    
    it('Create UserRoles Flow', () => {
                prd_overview_userRoles(authKey, app_id).then((response) =>{
                    expect(response.status).to.eq(201)
                    cy.log("create userroles response", response.body)
                })
            })
         

    it('Create PRDAI Flow', () => {
            prd_AI(authKey, app_id, app_name).then((response) =>{
                expect(response.status).to.eq(202)
                cy.log("create AI response", response.body)
            })
        })

    it('Create PRDCatalogTemplates Flow', () => {
        prd_catalog_templates(authKey, app_id).then((response) =>{
                expect(response.status).to.eq(200)
                cy.log("create catalogtemplates response", response.body)
            })
        })

    it('Create PRDFeature Flow', () => {
        prd_add_features(authKey, app_id).then((response) =>{
                    expect(response.status).to.eq(200)
                    cy.log("create PRDFeature response", response.body)
                })
            })    
        
    })
    

