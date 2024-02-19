// import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>
import { doDeleteFile,doUpdateWithPatchFile,doUpdateWithPutFile,doGetFileById,doCreateFile,doDeleteComponent,doUpdateWithPatchComponent,doUpdateWithPutComponent,doGetComponentById,doCreateComponent,doGetComponentList,doDeleteBugTask,doUpdateWithPatchBugTask,doUpdateWithPutBugTask,doGetBugTaskById,doCreateBugTask,doGetBugTaskList,doGetAppetizeBuilds,getAppListById,dogGetFilesList,getEdges,getUserList,getAuditLogList,getAttributes,doCreateAttributes,getNotification, getAppSupportType, getCertificateList, doGetSkillsList, appTypeList, appTypeUsingId, doCteareApp, searchApp, doCheckAppGeneration, getInvoice, searchInvoice, getAppLogs, getAppLogsUsingLogID } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';

let component_id;
let appname;
let authKey;
let log_id;
let file_id;
let attribute_id;
let app_id;
let bugTask_id;
let app_type;
describe("Dashboard Page", () => {
    const app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Create App Flow', () => {
        doLogin().then((response) => {
            cy.log("login response", response.body.key)
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                appname = response.body.name;
                app_id = response.body.id;
                cy.log("login response", response.body)
                expect(response.status).to.eq(201)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
            })
        })
    })
    
    it('Get Notification Flow', () => {
        getNotification(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Search App Flow', () => {
        searchApp(authKey, appname).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Apptype List Flow', () => {
        appTypeList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Appetize Builds Flow', () => {
        doGetAppetizeBuilds(authKey,app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    
    it('Apptype List By Id Flow', () => {
        getAppListById(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
   

    
    it('Get Skill List Flow', () => {
        doGetSkillsList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    
    it('Get Bug Task List Flow', () => {
        doGetBugTaskList(authKey,app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Bug Task List response", response.body)

        })
    })

    it('Create Bug Task  Flow', () => {
        doCreateBugTask(authKey,app_id).then((response) => {
            bugTask_id=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Bug Task response", response.body)

        })
    })

    it('Get Bug Task Using Id Flow', () => {
        doGetBugTaskById(authKey,app_id,bugTask_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Bug Task Using Id response", response.body)

        })
    })

    it('Put Bug Task Using Id Flow', () => {
        doUpdateWithPutBugTask(authKey,app_id,bugTask_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Bug Task Using Id response", response.body)

        })
    })
    it('Patch Bug Task Using Id Flow', () => {
        doUpdateWithPatchBugTask(authKey,app_id,bugTask_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Bug Task Using Id response", response.body)

        })
    })
    it('Delete Bug Task Flow', () => {
        doDeleteBugTask(authKey,app_id,bugTask_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Bug Task response", response.body)

        })
    })
 
    it('Get Component List Flow', () => {
        doGetComponentList(authKey,app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Component List response", response.body)

        })
    })

    it('Create Component Flow', () => {
        doCreateComponent(authKey,app_id).then((response) => {
            component_id=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Component response", response.body)

        })
    })

    it('Get Component Using Id Flow', () => {
        doGetComponentById(authKey,app_id,component_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Component Using Id response", response.body)

        })
    })

    it('Put Component Using Id Flow', () => {
        doUpdateWithPutComponent(authKey,app_id,component_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Component Using Id response", response.body)

        })
    })
    it('Patch Component Using Id Flow', () => {
        doUpdateWithPatchComponent(authKey,app_id,component_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Component Using Id response", response.body)

        })
    })
    it('Delete Component Flow', () => {
        doDeleteComponent(authKey,app_id,component_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Component response", response.body)

        })
    })


    it('Get Certificate List Flow', () => {
        getCertificateList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get AppSupport Type Flow', () => {
        getAppSupportType(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Check App Generation Flow', () => {
        doCheckAppGeneration(authKey, app_id).then((response) => {
            cy.log("Check App Generationresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Get Invoice Flow', () => {
        getInvoice(authKey).then((response) => {
            cy.log("Get Invoice response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    
     it('Get User List Flow', () => {
        getUserList(authKey, app_id).then((response) => {
            cy.log("Get User Listresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Get File List Flow', () => {
        dogGetFilesList(authKey, app_id).then((response) => {
            cy.log("Get File List response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Create File Flow', () => {
        doCreateFile(authKey,app_id).then((response) => {
            file_id=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create File response", response.body)

        })
    })

    it('Get File Using Id Flow', () => {
        doGetFileById(authKey,app_id,file_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get File Using Id response", response.body)

        })
    })

    it('Put File Using Id Flow', () => {
        doUpdateWithPutFile(authKey,app_id,file_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put File Using Id response", response.body)

        })
    })
    it('Patch File Using Id Flow', () => {
        doUpdateWithPatchFile(authKey,app_id,file_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch File Using Id response", response.body)

        })
    })
    it('Delete File Flow', () => {
        doDeleteFile(authKey,app_id,file_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete File response", response.body)

        })
    })
    
    it('Get Edge List Flow', () => {
        getEdges(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Edge List response", response.body)
        })
    })
    it('Search Invoice Flow', () => {
        searchInvoice(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get App Logs Flow', () => {
        getAppLogs(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            log_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get App Logs Using Id Flow', () => {
        getAppLogsUsingLogID(authKey, log_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Create Attributes Flow', () => {
        doCreateAttributes(authKey, app_id).then((response) => {
            attribute_id=response.body.id;
            expect(response.status).to.eq(200)
            cy.log("Create Attributes response", response.body)
        })
    })

    it('Get Attributes Flow', () => {
        getAttributes(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Attributes response", response.body)
        })
    })
    
    it('Get Audit Log List Flow', () => {
        getAuditLogList(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Attributes response", response.body)
        })
    })
})



