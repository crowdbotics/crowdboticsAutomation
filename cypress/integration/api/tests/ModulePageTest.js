/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doModuleLogin } from '../pages/loginPage.js';
import { doUpdateModule,doGetmodulelist, moduleInstall, doGetapiPreinstallmodule, doCreateModules, doGetReadModules } from '../pages/ModulePage.js';


let authKey;
let app_id;
let app_name;
let module_id;
describe("Module Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Api_pre_install_module', () => {
        doModuleLogin().then((response) => {
            authKey = response.body.key;
            cy.log("login response", response.body)
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("App Create Response", response.body)
                app_id = response.body.id;
                app_name = response.body.name;
                module_id = 239;
                doGetapiPreinstallmodule(authKey, app_id, module_id).then((response) => {
                    expect(response.status).to.eq(200)

                })
            })
        })

    })
    // it('Add DataModel Flow', () => {
    //     cy.resloveSyncIssue();
    //     moduleInstall(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(202)
    //         cy.log("Module installation triggered", response.body)
    //     })
    // })

    it('Get_Modules List', () => {
        doGetmodulelist(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Modules List", response.body)
        })
    })

    it('Create_module', () => {
        doCreateModules(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            module_id=response.body.id;
            cy.log("Create Modules Status response", response.body)
        })
    })

    it('Read_module', () => {
        doGetReadModules(authKey, app_id,module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Read Modules Status response", response.body)
        })
    })  
    it('update_module', () => {
        doUpdateModule(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            module_id=response.body.id;
            cy.log("update Modules Status response", response.body)
        })
    })
})