/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doNewPrdLogin } from '../pages/loginPage.js';
import { doGetGitCommits,doGetGitPulls,doGetZoomLevel,doGetUserProjectPermission,doGetDownloadErrorLogFile,doGetEnterprisesOrgRepo,doGetEnterprisesOrgRepoApps,doGetEnterprisesOrgModuleMatrics,doGetEnterprisesOrgMatrics,doGetOrgMemeberDetails,doGetAllAppCreatedByOrg,doGetAllCommitMetricsByOrg,dopatchSpecificgitConfigByOrg,dogetSpecificgitConfigByOrg,dogetAllgitConfigByOrg,dopatchContextByOrgUser,dogetContextByOrgUser,addFeatureMaually, generateAzureCostEstimation, unlinkJiraUrl, getStarterCode, requestTechnicalRecomandation, generateStarterCode, getTecnicalReconmondationList, featureAutoEstimation, featureDecompose, deleteFeatureCommet, patchFeatureComments, putFeatureComments, getFeatureCommentById, addCommentsIntoFeature, getAllFeatureComments, downloadPrd, doGetAllChatMessage, doCreateChatMessage, doGetChatMessageById, doDeleteChatMessageById, doClearChatMessage, doDeleteUserRoleByIdOrganizationPRD, doPatchUserRoleOrganizationPRD, doPutUserRoleOrganizationPRD, doGetUserRoleByIdOrganizationPRD, doCreateUserRolesOrganizationPRD, doGetAllUserRolesOrganizationPRD, doGetPRDWishlist, doDeletePhaseByIdOrganizationPRD, doPutPhaseOrganizationPRD, doPatchPhaseOrganizationPRD, doCreatePhaseOrganizationPRD, doGetPhaseByIdOrganizationPRD, doGetAllPhaseOrganizationPRD, doRemoveModuleIntoFeatureOrganizationPRD, doAddModuleIntofeatureOrganizationPRD, doDeletefeatureUsingIdOrganizationPRD, doPatchfeatureUsingIdOrganizationPRD, doPutfeatureUsingIdOrganizationPRD, doGetfeatureUsingIdOrganizationPRD, doCreatefeatureOrganizationPRD, doGetAllfeatureOrganizationPRD, doMoveFetaureIntoCategoryOrganizationPRD, doDeleteOrganizationPRDCategoryUsingId, doPatchOrganizationPRDCategory, doPutOrganizationPRDCategory, doGetOrganizationPRDCategoryUsingId, doCreateOrganizationPRDCategory, doGetOrganizationPRDCategoryList, dogetOrganizationPRDEstimate, doGetOrganizationPRDList, doGenerateOrganizationPRD, doGetOrganizationPRDById, doPutOrganizationPRD, doPatchOrganizationPRD, doDeleteOrganizationPRD, doGetJiraSetup, doCreateJiraSetUp, doGetJiraSetupById, doPutJiraSetup, doPatchJiraSetup, doDeletejiraSetupById, doGetPrdanalyzerisks, doCreateGeneratesugesstfeature, docreateStartoverprd, doCreateGeneratemodelwithai, doCreateprdGetestimate, doCreatetoggleselfserveestimation, doCreateUpdatecontextstore, doCreateContactsales, doGetCopilot,doGetCopilotByID,doGetPrddemo,doCreateLoadPrdintochat,doCreatesendmessagetocopilot,doCreateSyncPRDtocopilotagent } from '../pages/NewPrdPage.js';

let app_name;
let app_id;
let authKey;
let generatePrd_id;
let category_id;
let feature_id;
let myPhaseId;
let userRoles_id;
let chat_id;
let comment_id;
let newFaetiureId;
let jira_id;
let ids;
let copilot_id;
let  org_Id =87;
let gitConfig_Id=48;
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
                localStorage.setItem('app_id', response.body.id);
                doGetOrganizationPRDList(authKey).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("Get all PRD List by organization User response", response.body)
                })
            })
        })
    })

    it('Generate PRD by organization User without app', () => {
        doGenerateOrganizationPRD(authKey).then((response) => {
            ids = response.body.data.id;
            generatePrd_id = ids - 1;
            expect(response.status).to.eq(202)
            cy.log(ids);
            cy.log(generatePrd_id);
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


    it('Get PRD Estimate by organization User', () => {
        dogetOrganizationPRDEstimate(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PRD Estimate by organization User Response", response.body)
        })

    })

    it('Get PRD Category List by organization User', () => {
        doGetOrganizationPRDCategoryList(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Response Body:", JSON.stringify(response.body))
            cy.log("Get PRD Category List by organization User Response", response.body)
        })

    })


    it('Get All Phase from PRD for organization User', () => {
        doGetAllPhaseOrganizationPRD(authKey, generatePrd_id).then((response) => {
            cy.log("Response Body:", JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        })
    })
    it('Create Phase by PRD organizational user', () => {
        doCreatePhaseOrganizationPRD(authKey, generatePrd_id).then((response) => {
            myPhaseId = response.body.id;
            expect(response.status).to.eq(201);
            cy.log("Response Body:", JSON.stringify(response.body));

        })
    })
    it('Get Phase by ID PRD organizational user', () => {
        doGetPhaseByIdOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Put Phase by ID PRD organizational user', () => {
        doPutPhaseOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Patch Phase by ID PRD organizational user', () => {
        doPatchPhaseOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Get All User Roles from PRD for organization User', () => {
        doGetAllUserRolesOrganizationPRD(authKey, generatePrd_id).then((response) => {
            cy.log("Response Body:", JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        })
    })
    it('Create User Roles  by PRD organizational user', () => {
        doCreateUserRolesOrganizationPRD(authKey, generatePrd_id).then((response) => {
            userRoles_id = response.body.id;
            expect(response.status).to.eq(201);
            cy.log("Response Body:", JSON.stringify(response.body));

        })
    })
    it('Get User Roles by ID PRD organizational user', () => {
        doGetUserRoleByIdOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Put User Roles by ID PRD organizational user', () => {
        doPutUserRoleOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Patch User Roles by ID PRD organizational user', () => {
        doPatchUserRoleOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Delete User Roles by ID PRD organizational user', () => {
        doDeleteUserRoleByIdOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(204);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })

    it('Create PRD Category by organization User', () => {
        const tiltle = 'Cat' + (Math.random() + 1).toString(36).substring(7);
        doCreateOrganizationPRDCategory(authKey, generatePrd_id, tiltle, myPhaseId).then((response) => {
            category_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create PRD Category by organization User Response", response.body)
        })
    })
    it('Get category using Id for organization User', () => {
        doGetOrganizationPRDCategoryUsingId(authKey, generatePrd_id, category_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get category using Id for organization User Response", response.body)
        })
    })
    it('Put category using Id for organization User', () => {
        const tiltleput = 'CatPut' + (Math.random() + 1).toString(36).substring(7);
        doPutOrganizationPRDCategory(authKey, generatePrd_id, category_id, tiltleput, myPhaseId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put category using Id for organization User Response", response.body)
        })

    })
    it('Patch category using Id for organization User', () => {
        const tiltlepatch = 'CatPatch' + (Math.random() + 1).toString(36).substring(7);
        doPatchOrganizationPRDCategory(authKey, generatePrd_id, category_id, tiltlepatch, myPhaseId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch category using Id for organization User Response", response.body)
        })
    })

    // })
    // it('Move feature one category to another for organization User', () => {
    //     doMoveFetaureIntoCategoryOrganizationPRD(authKey, generatePrd_id,category_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch category using Id for organization User Response", response.body)
    //     })

    // })

    // it('Get all feature from category for organization User', () => {
    //     doGetAllfeatureOrganizationPRD(authKey, generatePrd_id).then((response) => {
    //  
    //        expect(response.status).to.eq(200)
    //         cy.log("Get all feature from category for organization User Response", response.body)
    //     })

    // })
    it('Create Feature into category for organization User', () => {
        doCreatefeatureOrganizationPRD(authKey, generatePrd_id).then((response) => {
            feature_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Feature into category for organization User Response", response.body)
        })

    })

    // it('Get Feature using Id from category for organization User', () => {
    //     doGetfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Put Feature using Id from category for organization User', () => {
    //     doPutfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Put Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Patch Feature using Id from category for organization User', () => {
    //     doPatchfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch Feature using Id from category for organization User Response", response.body)
    //     })

    // })

    // it('Add Module into the feature for organization User', () => {
    //     doAddModuleIntofeatureOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Module into the feature for organization User response", response.body)
    //     })

    // })
    // it('Remove Module into the feature for organization User', () => {
    //     doRemoveModuleIntoFeatureOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Remove Module into the feature for organization User response", response.body)
    //     })

    // })
    // it('Delete Feature using Id from category for organization User', () => {
    //     doDeletefeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Patch Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Delete category using Id for organization User', () => {
    //     doDeleteOrganizationPRDCategoryUsingId(authKey, generatePrd_id,category_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Delete category using Id for organization User Response", response.body)
    //     })

    // })

    // it('Delete Phase by ID PRD organizational user', () => {
    //     doDeletePhaseByIdOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
    //         expect(response.status).to.eq(204);
    //         cy.log("Response Body:", JSON.stringify(response.body))

    //     })
    // })
    it('Get All Chat Message', () => {
        doGetAllChatMessage(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All Chat Message Response", response.body)
        })
    })
    it('Create Chat Message', () => {
        doCreateChatMessage(authKey, generatePrd_id).then((response) => {
            chat_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Chat Message Response", response.body)
        })
    })
    it('Get Chat Message using Id', () => {
        doGetChatMessageById(authKey, generatePrd_id, chat_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Chat Message using Id Response", response.body)
        })
    })
    it('Delete Chat Message using Id', () => {
        doDeleteChatMessageById(authKey, generatePrd_id, chat_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Chat Message using Id Response", response.body)
        })
    })
    it('Clear All Chat Message', () => {
        doClearChatMessage(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Clear All Chat Message Response", response.body)
        })
    })
    it('download PRD ', () => {
        downloadPrd(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("download PRD Response", response.body)
        })
    })

    it('Get All comment from feature', () => {
        getAllFeatureComments(authKey, generatePrd_id, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All comment from feature", response.body)
        })
    })
    it('Add comment into the feature', () => {
        addCommentsIntoFeature(authKey, generatePrd_id, feature_id).then((response) => {
            comment_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add comment into the feature Response", response.body)
        })
    })
    it('Get comment from feature using ID', () => {
        getFeatureCommentById(authKey, generatePrd_id, feature_id, comment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get comment from feature using ID Response", response.body)
        })

    })

    it('Update comment into the feature using put', () => {
        putFeatureComments(authKey, generatePrd_id, feature_id, comment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update comment into the feature using put Response", response.body)
        })

    })
    it('Update comment into the feature using patch', () => {
        patchFeatureComments(authKey, generatePrd_id, feature_id, comment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update comment into the feature using patch Response", response.body)
        })

    })

    it('Feature decompose flow', () => {
        newFaetiureId = feature_id - 1;
        cy.log("Feature ID:", feature_id);
        cy.log("New Feature ID:", newFaetiureId);
        featureDecompose(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Feature decompose flow Response", response.body)
        })
    })

    it('Feature Auto Estimation flow', () => {
        featureAutoEstimation(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Feature Auto Estimation flow Response", response.body)
        })
    })

    it('Get All Technical Recomandation flow', () => {
        getTecnicalReconmondationList(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All Technical Recomandation flow Response", response.body)
        })
    })

    it('Generate Starter Code flow', () => {
        generateStarterCode(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Generate Starter Code flow Response", response.body)
        })

    })

    it('Request Tecnical Recomandation flow', () => {
        requestTechnicalRecomandation(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Request Tecnical Recomandation flow Response", response.body)
        })
    })

    it('Get Starter Code flow', () => {
        getStarterCode(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Starter Code flow Response", response.body)
        })
    })

    it('Unlink Jira Url flow', () => {
        unlinkJiraUrl(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Unlink Jira Url flow Response", response.body)
        })
    })

    it('Generate Azure Cost Estimation  flow', () => {
        generateAzureCostEstimation(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Generate Azure Cost Estimation  flow Response", response.body)
        })
    })

    it('Add Feature Manually flow', () => {
        addFeatureMaually(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Add Feature Manually flow Response", response.body)
        })
    })
    it('Delete generated PRD by organization User', () => {
        doDeleteOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete generated PRD by organization User Response", response.body)
        })

    })

    it('Delete comment from feature', () => {
        deleteFeatureCommet(authKey, generatePrd_id, comment_id, feature_id).then((response) => {
            cy.log("Auth Key:", authKey);
            cy.log("Generated PRD ID:", generatePrd_id);
            cy.log("Comment ID:", comment_id);
            expect(response.status).to.eq(204)
            cy.log("Delete comment from feature Response", response.body)
        })

    })

    it('Get Jira Setup user', () => {
        doGetJiraSetup(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Jira Setup Message Response", response.body)
        })
    })

    it('Create Jira Setup', () => {
        const project = 'Cat' + (Math.random() + 1).toString(36).substring(7);
        doCreateJiraSetUp(authKey, generatePrd_id, project).then((response) => {
            jira_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Jira Setup Message Response", response.body)
        })
    })

    it('Get Jira Setup using Id', () => {
        doGetJiraSetupById(authKey, generatePrd_id, jira_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Jira Setup using Id Response", response.body)
        })
    })

    it('Put Jira Setup using Id', () => {
        doPutJiraSetup(authKey, generatePrd_id, jira_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Jira Setup using Id Response", response.body)
        })
    })

    it('Patch Jira Setup using Id', () => {
        doPatchJiraSetup(authKey, generatePrd_id, jira_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Jira Setup using Id Response", response.body)
        })
    })

    it('Delete Jira Setup using Id', () => {
        doDeletejiraSetupById(authKey, generatePrd_id, jira_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Jira Setup using Id Response", response.body)
        })
    })

    it('Get Prd analyze risks', () => {
        doGetPrdanalyzerisks(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Get Prd analyze risks Response", response.body)
        })
    })


    it('Create Generate AI Suggest features', () => {
        doCreateGeneratesugesstfeature(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Create Generate AI Suggest features Response", response.body)
        })

    })

    it('Create Start over PRD', () => {
        docreateStartoverprd(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Start over PRD response", response.body)
        })
    })

    it('Create Generate model with AI', () => {
        doCreateGeneratemodelwithai(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Generate model with AI Response", response.body)
        })

    })

    it('Create PRD Get estimate', () => {
        doCreateprdGetestimate(authKey, ids).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create PRD Get estimate Response", response.body)
        })

    })

    it('create Toggle self serve estimation', () => {
        doCreatetoggleselfserveestimation(authKey, ids).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create Toggle self serve estimation Response", response.body)
        })

    })

    it('create Update context store', () => {
        doCreateUpdatecontextstore(authKey, ids).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create Update context store Response", response.body)
        })

    })

    it('create Contact sales', () => {
        doCreateContactsales(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create Contact sales Response", response.body)
        })

    })

    it('Get PRD Copilot Flow', () => {
        doGetCopilot(authKey).then((response) => {
            copilot_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
            cy.log("Get PRD Copilot response", response.body)
        })
    })

    it('get verify the copilot By ID', () => {
        doGetCopilotByID(authKey, copilot_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get copilot Id response", response.body)
        })
    })

    it('Get PRD Demo Flow', () => {
        doGetPrddemo(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PRD Demo response", response.body)
        })
    })

    it('Create Loard PRD into chat Message', () => {
        doCreateLoadPrdintochat(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Loard PRD into chat Response", response.body)
        })
    })

    it('Create Send message to copilot', () => {
        doCreatesendmessagetocopilot(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Send message to copilot Response", response.body)
        })
    })

    it('Create Sync PRD to copilot agent', () => {
        doCreateSyncPRDtocopilotagent(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Sync PRD to copilot agent Response", response.body)
        })
    })
   
   it('get Context By Org User', () => {
    dogetContextByOrgUser(authKey,org_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("get Context By Org User Response", response.body)
    })
})
it('Patch Context By Org User', () => {
    dopatchContextByOrgUser(authKey,org_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Patch Context By Org User Response", response.body)
    })
})
it('Get All gitConfig By Org', () => {
    dogetAllgitConfigByOrg(authKey,org_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get All gitConfig By Org Response", response.body)
    })
})
it('Get Specific gitConfig By Org', () => {
    dogetSpecificgitConfigByOrg(authKey,org_Id,gitConfig_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Specific gitConfig By Org Response", response.body)
    })
})
it('Patch Specific gitConfig By Org', () => {
    dopatchSpecificgitConfigByOrg(authKey,org_Id,gitConfig_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Patch Specific gitConfig By Org Response", response.body)
    })
})
it('Get Org Memeber Details', () => {
    doGetOrgMemeberDetails(authKey,org_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Orgd Memeber Details Response", response.body)
    })
})
it('Get All App Created By Org', () => {
    doGetAllAppCreatedByOrg(authKey,org_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get All App Created By Org Response", response.body)
    })
})
it('Get All Commit-Metrics By Org', () => {
    doGetAllCommitMetricsByOrg(authKey,org_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("et All Commit-Metrics By Org Response", response.body)
    })
})

it('Get Enterprises Org Matrics', () => {
    doGetEnterprisesOrgMatrics(authKey,org_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Enterprises Org Matrics Response", response.body)
    })
})
it('Get Enterprises Org Module Matrics', () => {
    doGetEnterprisesOrgModuleMatrics(authKey,org_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Enterprises Org Module Matrics Response", response.body)
    })
})
it('Get Enterprises Org Repo Apps', () => {
    doGetEnterprisesOrgRepoApps(authKey,org_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Enterprises Org Repo Apps Response", response.body)
    })
})

it('Get Enterprises Org Repo', () => {
    doGetEnterprisesOrgRepo(authKey,org_Id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Enterprises Org Repo Response", response.body)
    })
})

it('Get User Project Permission', () => {
    doGetUserProjectPermission(authKey,app_id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get User Project Permission Response", response.body)
    })
})

it('Get Zoom Level', () => {
    doGetZoomLevel(authKey,app_id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Zoom Level Response", response.body)
    })
})
it('Get Git Pulls', () => {
    doGetGitPulls(authKey,app_id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Git Pulls Response", response.body)
    })
})
it('Get Git Commits', () => {
    doGetGitCommits(authKey,app_id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("et Git Commits Response", response.body)
    })
})
})

