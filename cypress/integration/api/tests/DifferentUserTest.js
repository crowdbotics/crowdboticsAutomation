/// <reference types = "cypress"/>
import { doGeneralUserLogin } from '../pages/loginPage.js';
import { doGetSkill, doCreateSkill, dodeleteSkillByid, doGetSkillsById, doPatchSkill, doPutSkill, doGetEdges, dopostedge, doGetEdgesByid, doputedge, dopatchedge, dodeleteEdgesByid, doPatchShareableComponent, doGetShareableComponentsById, doCreateShareableComponent, doGetShareableComponentsList, doGetCatalogPlatformList, doGetCatalogResourceList, doGetCatalogSectorList, doGetCatalogTaskList, doGetCatalogFeatureTypeList, doGetCatalogModuleTypeList, doGAddCatalogPlatformCustomDomain, doGetCatalogPlatformCustomDomain, doDeleteCatologModule, doUpdateWithPutCatologModule, doUpdateWithPatchCatologModule, doGetCatologModuleById, doDeleteCatalogArchetype, doUpdateWithPatchCatalogArchetype, doUpdateWithPutCatalogArchetype, doGetCatalogArchetypeById, doCreateCatalogArchetype, doDeleteCatalogAsset, doUpdateWithPatchCatalogAsset, doUpdateWithPutCatalogAsset, doGetCatalogAssetUsingId, doGetCatalogAssetList, doDeleteCatalogBaseType, doUpdateWithPatchCatalogBaseArchetype, doUpdateWithPutCatalogBaseArchetype, doCreateCatalogBaseArchetype, doGetCatalogBaseArchetypeList, doDeleteCatalogCategory, doUpdateWithPatchCatalogCategory, doUpdateWithPutCatalogCategory, doGetCatalogCategoryById, doDeleteCatalogModuleType, doUpdateWithPatchCatalogModuleType, doUpdateWithPutCatalogModuleType, doGetCatalogModuleTypeById, doCreateCatalogModuleType, doDeleteCatalogFeatureType, doUpdateWithPatchCatalogFeatureType, doUpdateWithPutCatalogFeatureType, doGetCatalogFeatureTypeById, doCreateCatalogFeatureType, doDeleteCatalogCodeModule, doUpdateWithPatchCatalogCodeModule, doUpdateWithPutCatalogCodeModule, doGetCatalogCodeModuleById, doDeleteCatalogTask, doUpdateWithPatchCatalogTask, doUpdateWithPutCatalogTask, doGetCatalogTaskById, doCreateCatalogTask, doDeleteCatalogSector, doUpdateWithPatchCatalogSector, doUpdateWithPutCatalogSector, doGetCatalogSectorById, doCreateCatalogSector, doDeleteCatalogResource, doUpdateWithPatchCatalogResource, doUpdateWithPutCatalogResource, doGetCatalogResourceById, doCreateCatalogResource, doDeleteCatalogPlatform, doUpdateWithPatchCatalogPlatform, doUpdateWithPutCatalogPlatform, doGetCatalogPlatformById, doAddCatalogPlatform, doGetSettingsFElist, doAddCatalogFeature, doGetCatologFeature, doAddCatalogCategory, doGetCatologCategoryList, doAddCatalogModule, doGetCatologModuleList, doImportFeature, doImportModule, doGetCatalogArchetypeList, doAddCatalogAsset, doCreateCatalogCodeModule, doGetEmbeddingSearch, doGetCodeComponents, doCreateCodeComponents, doGetCodeComponentsById, doPutCodeComponent, doPatchCodeComponent, doGettCatologFeatureById, doPatchCatologFeature, doPutCatologFeature, dodeleteCatologFeatureByid } from '../pages/CatalogPage.js';
import { doCreateConnector, doGetConnector, doGetInstallerInstalComponent, doGetConnectorUsingId, doUpdateConnector, doEditConnector, doDeleteConnector, getConnectors, getConnectorscategories, doGetShareableConnectors, doCreateShareableConnectors, doGetShareableConnectorsByID, doGetShareableDataModels, doGetShareableDataModelsByID, doGetConnectorscategoriesByID, doGetConnectorsByID } from '../pages/ConnectorsPage.js';
import { doGetMobilebuilds, doPostresendverification, doGetSlides, doPostslides, doDeleteCertificationsid, doPatchCertificationsid, doputCertificationsid, dogetCertificationsid, doPostCertifications, dogetCertifications, doDeleteFile, doUpdateWithPatchFile, doUpdateWithPutFile, doGetFileById, doCreateFile, doDeleteComponent, doUpdateWithPatchComponent, doUpdateWithPutComponent, doGetComponentById, doCreateComponent, doGetComponentList, doDeleteBugTask, doUpdateWithPatchBugTask, doUpdateWithPutBugTask, doGetBugTaskById, doCreateBugTask, doGetBugTaskList, doGetAppetizeBuilds, getAppListById, dogGetFilesList, getEdges, getUserList, getAuditLogList, getAttributes, doCreateAttributes, getNotification, getAppSupportType, getCertificateList, doGetSkillsList, appTypeList, appTypeUsingId, doCteareApp, searchApp, doCheckAppGeneration, getInvoice, searchInvoice, getAppLogs, getAppLogsUsingLogID, getStatistics, getBuildstages, getCandidates, getFeedbacks, getFeedbacksCategories, getReports, doGetFeedbacksCategoriesByID, dogetcbusers, doPostcbusers, dogetcbusersbyId, doputcbusersbyId, dopatchcbusersbyId, doGetReportsByID, doGetDevloperrequest, doGetDevloperrequestByID, doGetResponses, doGetAppetizedevices, dogGetAPIspec, doGetAttributesById, doGetLogs, doGetLogsById, doPostDashboardfeedbacks, doGetMemberfeedback, doGetfeedbackmemberByID, doGetAddons, doGetAddonsByID, doGetScaffolds, doTOTPdevice, doGetSocialaccounts, doGetSettingsfe, doGetPeojectClones, doGetProjectClonesByID, doPostDashboardFeedack, doPostMagicLink, doPostOutGrow, doGetSocialApp, doGetSocialAppByID, doPostTotpDeviceRemove, doGetUser, doPutUser, doGetUsers, doGetUsersByID, doGetProjectlogs, doGetProjectlogsByID } from '../pages/DashboardPage.js';
import { doAddDataModel, doGetDataModel, doGetModels, doGetModelsByID } from '../pages/DataModelPage.js';
import { doCreateDocument, doGetDocumentById, doPutDocumentById, doPatchDocumentById, doDeleteDocumentById, doGetListCodePackages, doCreateCodePackages, doGetCodePackagestById, doPutCodePackageById, doPatchCodePackageById } from '../pages/DocumentPage.js';
import { doPutJobtype, doDeleteJobtypeByid, doGetCandidatesbyID, doGetCandidates, doAddJobRequest, doGetJobRequest, doGetJobRequestUsingId, doEditJobRequest, doDeleteJobRequest, doGetjobtype, doAddjobtype, doGetjobtypeById, doPatchjobtype, dogetJobtitles, doGetJobtitlesByID } from '../pages/JobPage.js';
import { doGetapireports, doGetmodulelist, moduleInstall, doGetapiPreinstallmodule, doCreateModules, doGetModulesById, doPatchModules, doPutModules } from '../pages/ModulePage.js';
import { addFeatureMaually, generateAzureCostEstimation, unlinkJiraUrl, getStarterCode, requestTechnicalRecomandation, generateStarterCode, getTecnicalReconmondationList, featureAutoEstimation, featureDecompose, deleteFeatureCommet, patchFeatureComments, putFeatureComments, getFeatureCommentById, addCommentsIntoFeature, getAllFeatureComments, downloadPrd, doGetAllChatMessage, doCreateChatMessage, doGetChatMessageById, doDeleteChatMessageById, doClearChatMessage, doDeleteUserRoleByIdOrganizationPRD, doPatchUserRoleOrganizationPRD, doPutUserRoleOrganizationPRD, doGetUserRoleByIdOrganizationPRD, doCreateUserRolesOrganizationPRD, doGetAllUserRolesOrganizationPRD, doGetPRDWishlist, doDeletePhaseByIdOrganizationPRD, doPutPhaseOrganizationPRD, doPatchPhaseOrganizationPRD, doCreatePhaseOrganizationPRD, doGetPhaseByIdOrganizationPRD, doGetAllPhaseOrganizationPRD, doRemoveModuleIntoFeatureOrganizationPRD, doAddModuleIntofeatureOrganizationPRD, doDeletefeatureUsingIdOrganizationPRD, doPatchfeatureUsingIdOrganizationPRD, doPutfeatureUsingIdOrganizationPRD, doGetfeatureUsingIdOrganizationPRD, doCreatefeatureOrganizationPRD, doGetAllfeatureOrganizationPRD, doMoveFetaureIntoCategoryOrganizationPRD, doDeleteOrganizationPRDCategoryUsingId, doPatchOrganizationPRDCategory, doPutOrganizationPRDCategory, doGetOrganizationPRDCategoryUsingId, doCreateOrganizationPRDCategory, doGetOrganizationPRDCategoryList, dogetOrganizationPRDEstimate, doGetOrganizationPRDList, doGenerateOrganizationPRD, doGetOrganizationPRDById, doPutOrganizationPRD, doPatchOrganizationPRD, doDeleteOrganizationPRD, doGetJiraSetup, doCreateJiraSetUp, doGetJiraSetupById, doPutJiraSetup, doPatchJiraSetup, doDeletejiraSetupById } from '../pages/NewPrdPage.js';
import { doGetattachmentslist, doDeletefeature, doPatchFeature, doPutFeature, doPutCategories, doDeleteCategories, doCreateCategories, doApproveAllFeatures, doGetPRDAIfeatures, doGetPrdAiUserType, doGetPrdActivityLog, doGetStatementOfWork, doGetUsefullLinks, doPostUsefullLinks, doGetidUsefullLinks, doPutUsefullLinks, doPatchUsefullLinks, doDeleteUsefullLinks, doGetPaymentReceipt, doAddInstallerInstall, doGetStartOverPrdAi, doGetaAnalyzeRisks, doAddSuggestedFeatures, doGetCurrentPrdPdf, getRolesUsingId, getRoles, addPrdVersionStatus, getMilestoneStatusSummy, getMilestoneIndex, getCBCarePlanUsingId, getCurrentlyApprovedPrdVersion, prd_overview_tags, prd_overview_userRoles, prd_create_item, prd_get_Item, prd_delete_item, doPatchGroup, doPatchItem, doGetUserReposList, doApprovePrd, doUpdatePrdVersionStatus, doImportCatalog, doGetGroupUsingId, doPatchItemUpdateOrder, doGetItemsUsingId, doAddPrdRoles, doRemovePrdRoles, doAddPrdTag, doGetPrdTag, doGetPrdTagUsingId, doDeletePrdTag, doGetPrdVersions, doAddComment, doGetComment, doGetChangeCommentStatus, doGetViewInStudioPrd, doDeleteComment, doEditComment, doAddFeatureIntoPrd, doAddModuleIntoPrd, doAddArchetypeIntoPrd, doGetCodeStatusPrd, docreatePRDWithAI, doAddfeaturewithAI, doAddfeaturemanually, doGetSUserTypes, doCreateUserTypes, doGetSUserTypesByID, doPatchUserTypes, doPutUserTypes, dodeleteuserTypesByid, doGetRolesByID, doGetOpenAI, doGetDemoPhase, doGetDemoRoles, doGetDemoticket, doCreateStartcodespec, doGetCodetospecById, doPutCodetospec, doPatchCodetospec, doDeleteCodetospecById, doCreatecodespecgeneratedependencies, doGetCodepackages, doCreateCodespacpackagesinstall, doGetCodetospecerrorlog, doCreateCodetospecresetstatus } from '../pages/PrdPage.js';
import { doGetCodePackage, app_name_update, doAddLibrary, doGetLibrary, doRemoveLibrary, doAddGcpPlatform, doGetRepoBranch, change_code_privacy_private_to_public, change_code_privacy_public_to_private, delete_app, doCreateCodePackage, doGetCodePackageById, doPatchCodePackage, doPutCodePackage, dopostdeployment, dopostcanceldeployment } from '../pages/SettingsPage.js';
import { doGetStudiopage, getStudioScreen, doGetStudioScreenEdge, doPostCreateStudioScreen, doPostCLIFeedback } from '../pages/StudioPage.js';
import { doGetExistingTaskTemplate, doEditAmountInPaymentMilestone, doCreateTask, doViewTask, doGetTaskById, doAddQuoteInTask, doDeleteTask, doDeleteSubTask, doAddMilestone, doGetAllMilestone, doGetAllSubTask, doGetMilestone, doUpdateMilestone, doDeleteMilestone, doAddTaskIntoMilestone, doUpdateTaskIntoMilestone, doUpdateSubTask, doUpdateOtherSubTask, doPublicTask, doApprovePricing, doUndoApprovePricing, doApprovePayment, doUndoApprovedPayment, doAddPaymentMilestone, doGetPaymentMilestone, doGetAllPaymentMilestone, doDeletePaymentMilestone, doAddQuote, doGetQuoteMilestone, doCheckoutWithAch, doGetJobType, doUpdateJobTypeRate, doGetTaskSharableStatus, doCreateBillingSchedule, doUpdateBillingSchedule, doGetBillingSchedule, doCreateSubTask, doCreateOtherSubTask, doMoveTask, doUpdateMilestoneCostHrs, doTaskIntoWishlist, doSearchTask } from '../pages/TasksPage.js';
import { doGetAllMemberList, doUpdateMemberjobTitle, doCancelInvitation, doInviteMember, doGetTeamMember, doGetTeamMemberUsingId } from '../pages/TeamMemberPageAdmin.js';


let member_id;
let request_id;
let milestone_name = "milestone1";
let updated_milestone_name = 'Milestone1Updated';
let milestone_id;
let task_name = "Task1";
let task_hours = "2.0";
let task_cost = "120.00";
let taskId;
let payment_id;
let fe_subtask_id;
let milestone_wishlist_id;
let task_wishlist_id;
let wishlist_task_name = "taskwishlist";
let libraryIds;
let libraryToBeAdded;
let codepackageId;
let packageName;
let group_Id;
let group_name;
let categories_name;
let item_id;
let feature_Id;
let tag_id;
let description_name;
let role_id;
let comment_Id;
let categories_id
let title_name;
let item_name;
let added_items = [];
let task_Id = ["6120"];
let generatePrd_Id;
let useful_title;
let useful_url;
let usefullLinkId;
let usertypes_id;
let roles_id
let codetospec;
let user_id = ["4473"];
let models_id;
let edge_id;
let authKey;
let app_id;
let app_name;
let base_title;
let base_id;
let asset_id;
let base_description;
let feature_title;
let feature_slug;
let feature_description;
let feature_id;
let category_title;
let category_id;
let module_title;
let archetype_title;
let module_slug;
let module_description;
let module_id;
let group_id;
let archetype_id;
let slug;
let platform_slug;
let platform_title;
let platform_id;
let resource_description;
let resource_title;
let archetype_slug;
let resource_id;
let sector_title;
let sector_id;
let task_title;
let task_description;
let task_id;
let archtype_id;
let domain_name;
let shareableComponent_id;
let CodeComponents_id = 7;
let skills_id;
let connector_name;
let connector_description;
let connector_id;
let shareableconnectors_id;
let shareabledatamodels_id;
let connectors_id;
let connectorscategoris_id;
let component_id;
let appname;
let log_id;
let file_id;
let attribute_id;
let bugTask_id;
let app_type;
let Certifications_id;
let feedbacks_id;
let cb_usersid;
let reports_id;
let developerrequest_id;
let attributes_id;
let logs_id;
let memberfeedback_id;
let addons_id;
let projectclones_id;
let social_id = 1;
let users_id = 1;
let projectlogs_id;
let document_id;
let codepackage_id;
let job_id;
let project_description;
let job_name;
let job_cost;
let jobtype_id;
let candidates_id;
let jobtitles_id;
let generatePrd_id;
let categoryId;
let featureId;
let myPhaseId;
let userRoles_id;
let chat_id;
let comment_id;
let newFaetiureId;
let jira_id;

describe("Different User Testing", () => {
    packageName = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Verify the Login and App creation Flow @general @super @sales', () => {
        doGeneralUserLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                feature_title = "TestTitle" + app_id;
                feature_slug = "TestSlug" + app_id;
                feature_description = "TestDescription" + app_id;
                connector_name = "Testconnectors" + app_id;
                connector_description = 'TestDesc' + app_id;
                module_id = 239;
                libraryIds = ["54488", "54489", "54490", "54491", "54492"];
                libraryToBeAdded = libraryIds[Math.floor(Math.random() * libraryIds.length)];
                const roles = ["Member", "Sales", "Collaborator", "Admin", "Finance"];
                const selectRole = roles[Math.floor(Math.random() * roles.length)];
                localStorage.setItem('app_id', response.body.id);
            })
        })
    })

    it('Add Catalog Feature Flow @sales', () => {
        doAddCatalogFeature(authKey, feature_title, feature_slug, feature_description).then((response) => {
            feature_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add Catalog Feature response", response.body)
        })
    })

    it('Get Catolog Feature Flow @sales', () => {
        doGetCatologFeature(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catolog Feature response", response.body)
        })
    })

    it('Get Catalog feature Id Flow @sales', () => {
        doGettCatologFeatureById(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog feature Id response", response.body)
        })
    })

    it('Patch  Catalog feature Id Flow @sales', () => {
        doPatchCatologFeature(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch  Catalog feature  response", response.body)
        })
    })

    it('Put Catalog feature Id Flow @sales', () => {
        doPutCatologFeature(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("add Edge Screen", response.body)
        })
    })

    it('Delete Catalog feature Id Flow @sales', () => {
        dodeleteCatologFeatureByid(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog feature response", response.body)
        })
    })

    it('Get Catolog Category List Flow @general @super @sales', () => {
        doGetCatologCategoryList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catolog Category response", response.body)
        })
    })

    it('Add Catalog Category Flow @sales', () => {
        category_title = "TestTitle" + app_id;
        doAddCatalogCategory(authKey, category_title).then((response) => {
            category_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add Catalog Category response", response.body)
        })
    })

    it('Get Catalog Category Using Id Flow @sales', () => {
        doGetCatalogCategoryById(authKey, category_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("GEt Catalog Category Using Id response", response.body)
        })
    })

    it('Update With Put Catalog Category Using Id Flow @sales', () => {
        category_title = "TestTitle" + app_id;
        doUpdateWithPutCatalogCategory(authKey, category_id, category_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update with put Catalog Category response", response.body)
        })
    })

    it('Update With Patch Catalog Category Using Id Flow @sales', () => {
        category_title = "TestTitle" + app_id;
        doUpdateWithPatchCatalogCategory(authKey, category_id, category_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update with Patch Catalog Category response", response.body)
        })
    })

    it('Delete Catalog Category  Flow @sales', () => {
        doDeleteCatalogCategory(authKey, category_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("GEt Catalog Category Using Id response", response.body)
        })
    })

    it('Get Catolog Module List Flow @general @super @sales', () => {
        doGetCatologModuleList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catolog Module List", response.body)
        })
    })

    it('Add Catalog Module', () => {
        module_title = '_IunN' + (Math.random() + 1).toString(36).substring(7);
        module_slug = "TestModuleSlug" + (Math.random() + 1).toString(36).substring(7);
        doAddCatalogModule(authKey, module_title, module_slug).then((response) => {
            module_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("create userroles response", response.body)
        })
    })
    it('Get Catolog Module By Id Flow', () => {
        doGetCatologModuleById(authKey, module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catolog Module By Id", response.body)
        })
    })

    it('Update Catalog Module Using Put Method Flow', () => {
        module_title = '_IunNPut' + (Math.random() + 1).toString(36).substring(7);
        module_slug = "TestModuleSlugPut" + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatologModule(authKey, module_id, module_slug, module_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("'Update Catalog Module Using Put Method ", response.body)
        })
    })

    it('Update Catalog Module Using Patch Method Flow', () => {
        module_title = '_IunNPatch' + (Math.random() + 1).toString(36).substring(7);
        module_slug = "TestModuleSlugPatch" + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatologModule(authKey, module_id, module_slug, module_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("'Update Catalog Module Using Put Method ", response.body)
        })
    })

    it('Delete Catalog Module Flow', () => {
        doDeleteCatologModule(authKey, module_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog Module ", response.body)
        })
    })


    //**Need to fix */
    // it('Import Module', () => {
    //     group_id="PRD Group Test"+app_id;
    //     doImportModule(authKey, app_id,group_id).then((response) => {
    //         expect(response.status).to.eq(201)
    //         cy.log("create userroles response", response.body)
    //     })
    // })

    it('Get Archetype Flow @general @general @super @sales', () => {
        doGetCatalogArchetypeList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Archetype response", response.body)
        })
    })

    it('Create Catalog Archtype Flow @sales', () => {
        archetype_slug = '_IunN' + (Math.random() + 1).toString(36).substring(7);
        archetype_title = 'MyTitle' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogArchetype(authKey, archetype_slug, archetype_title).then((response) => {
            archtype_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Catalog Archtype response", response.body)
        })
    })

    it('Get Catalog Archtype Using Id Flow @sales', () => {
        doGetCatalogArchetypeById(authKey, archtype_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Archtype Using Id response", response.body)
        })
    })

    it('Update Catalog Archtype Using Put Method Flow @sales', () => {
        archetype_slug = '_IunNPUT' + (Math.random() + 1).toString(36).substring(7);
        archetype_title = 'MyTitlePut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogArchetype(authKey, archtype_id, archetype_slug, archetype_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Catalog Archtype Using Put Method response", response.body)
        })
    })

    it('Update Catalog Archtype Using Patch Method Flow @sales', () => {
        archetype_slug = '_IunNPATCH' + (Math.random() + 1).toString(36).substring(7);
        archetype_title = 'MyTitlePatch' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogArchetype(authKey, archtype_id, archetype_slug, archetype_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Catalog Archtype Using Patch Method response", response.body)
        })
    })


    it('Delete Catalog Archtype Flow @sales', () => {
        doDeleteCatalogArchetype(authKey, archtype_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog Archtype response", response.body)
        })
    })


    it('Get Catalog Asset List Flow @general @super @sales', () => {
        doGetCatalogAssetList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Asset Listresponse", response.body)
        })
    })
    it('Create Catalog Asset Flow @sales', () => {
        doAddCatalogAsset(authKey).then((response) => {
            asset_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Catalog Asset response", response.body)
        })
    })


    it('Get Catalog Asset Using Id Flow @sales', () => {
        doGetCatalogAssetUsingId(authKey, asset_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Asset Using Id response", response.body)
        })
    })

    it('Update Catalog Asset Using Put Method Flow @sales', () => {
        doUpdateWithPutCatalogAsset(authKey, asset_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Catalog Asset Using Put Method response", response.body)
        })
    })
    it('Update Catalog Asset Using Patch Method Flow @sales', () => {
        doUpdateWithPatchCatalogAsset(authKey, asset_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Catalog Asset Using Patch Method response", response.body)
        })
    })

    it('Delete Catalog Asset Flow @sales', () => {
        doDeleteCatalogAsset(authKey, asset_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog Asset response", response.body)
        })
    })
    it('Create Catalog Code Module Flow @sales', () => {
        slug = 'Mymoduleslug' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogCodeModule(authKey, slug).then((response) => {
            module_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Catalog Code Module response", response.body)
        })
    })

    it('Get Catalog Code Module Using Id Flow @sales', () => {
        doGetCatalogCodeModuleById(authKey, module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Catalog Code Module response", response.body)
        })
    })

    it('Update with Put Catalog Code Module Flow @sales', () => {
        slug = 'MymoduleslugWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogCodeModule(authKey, module_id, slug).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Catalog Code Module response", response.body)
        })
    })

    it('Update with Patch Catalog Code Module Flow @sales', () => {
        slug = 'MymoduleslugWithPatch' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogCodeModule(authKey, module_id, slug).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Catalog Code Module response", response.body)
        })
    })
    it('Delete Catalog Code Module Flow @sales', () => {
        doDeleteCatalogCodeModule(authKey, module_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Catalog Code Module response", response.body)
        })
    })
    //**Not avialble on swagger and app */
    // it('Get Embedding Search Flow', () => {
    //     doGetEmbeddingSearch(authKey).then((response) => {
    //          expect(response.status).to.eq(200)
    //         cy.log("Get Embedding Search response", response.body)
    //     })
    // })

    it('Get Catalog Platform List Flow @general @super @sales', () => {
        doGetCatalogPlatformList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Platform List Response", response.body)
        })
    })

    it('Add Catalog Platform Flow', () => {
        platform_slug = 'TestPlatformSlug' + (Math.random() + 1).toString(36).substring(7);
        platform_title = 'My Platform title' + (Math.random() + 1).toString(36).substring(7);
        doAddCatalogPlatform(authKey, platform_slug, platform_title).then((response) => {
            expect(response.status).to.eq(201)
            platform_id = response.body.id;
            cy.log("Get Embedding Search response", response.body)
        })
    })

    //**Need to connect with dev */
    // it('Get Catalog Platform Custom Domain', () => {
    //     doGetCatalogPlatformCustomDomain(authKey, platform_id,app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Catalog Platform Custom Domain", response.body)
    //     })
    // })

    //**Need to connect with dev*/
    // it('Add Catalog Platform Custom Domain Flow', () => {
    //     domain_name = 'TestPlatformSlug' + (Math.random() + 1).toString(36).substring(7);
    //     doGAddCatalogPlatformCustomDomain(authKey, platform_id,app_id,domain_name).then((response) => {
    //         expect(response.status).to.eq(201)
    //         cy.log("Get Embedding Search response", response.body)
    //     })
    // })
    it('Get Catalog Platform Using Id', () => {
        doGetCatalogPlatformById(authKey, platform_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update Catalog Platform using put method Flow', () => {
        platform_slug = 'UpdateWithPutPlatformSlug' + (Math.random() + 1).toString(36).substring(7);
        platform_title = 'UpdateWithPut My Platform title' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogPlatform(authKey, platform_id, platform_slug, platform_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Update Catalog Platform using patch method Flow', () => {
        platform_slug = 'UpdateWithPatchPlatformSlug' + (Math.random() + 1).toString(36).substring(7);
        platform_title = 'UpdateWithPatch My Platform title' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogPlatform(authKey, platform_id, platform_slug, platform_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Delete Catalog Platform Flow', () => {
        doDeleteCatalogPlatform(authKey, platform_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Resource List Flow @general @super @sales', () => {
        doGetCatalogResourceList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Create Catalog Resource Flow @sales', () => {
        resource_description = 'MyResourceDescription' + (Math.random() + 1).toString(36).substring(7);
        resource_title = 'MyResourceTitle' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogResource(authKey, resource_title, resource_description).then((response) => {
            resource_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Get Catalog Resource Using Id @sales', () => {
        doGetCatalogResourceById(authKey, resource_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update catalog Resource with Put Method Flow @sales', () => {
        resource_description = 'MyResourceDescriptionWithPut' + (Math.random() + 1).toString(36).substring(7);
        resource_title = 'MyResourceTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogResource(authKey, resource_id, resource_title, resource_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update catalog Resource with Patch Method Flow @sales', () => {
        resource_description = 'MyResourceDescriptionWithPatch' + (Math.random() + 1).toString(36).substring(7);
        resource_title = 'MyResourceTitleWithPatch' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogResource(authKey, resource_id, resource_title, resource_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Delete Catalog Resource Flow @sales', () => {
        doDeleteCatalogResource(authKey, resource_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Get Catalog Sector List Flow @general @super @sales', () => {
        doGetCatalogSectorList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Sector response", response.body)
        })
    })

    it('Create Catalog Sector Flow @sales', () => {
        sector_title = 'MySectorTitle' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogSector(authKey, sector_title).then((response) => {
            sector_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Sector By Id Flow @sales', () => {
        doGetCatalogSectorById(authKey, sector_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Update catalog Sector with Put Method Flow @sales', () => {
        sector_title = 'MySectorTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogSector(authKey, sector_id, sector_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update catalog Sector with Patch Method Flow @sales', () => {
        sector_title = 'MySectorTitleWithPatch' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogSector(authKey, sector_id, sector_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Delete Catalog Sector Flow @sales', () => {
        doDeleteCatalogSector(authKey, sector_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Get Catalog Task List Flow @general @super @sales', () => {
        doGetCatalogTaskList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Task List", response.body)
        })
    })

    it('Create Catalog Task Flow @sales', () => {
        task_title = 'MyTaskTitle' + (Math.random() + 1).toString(36).substring(7);
        task_description = 'MyTaskDescription' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogTask(authKey, task_title, task_description).then((response) => {
            task_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Get Catalog Task By Id Flow @sales', () => {
        doGetCatalogTaskById(authKey, task_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Update catalog Task with Put Method Flow @sales', () => {
        task_title = 'MyTaskTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        task_description = 'MyTaskDescriptionWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogTask(authKey, task_id, task_title, task_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update catalog Task with Patch Method Flow @sales', () => {
        task_title = 'MyTaskTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        task_description = 'MyTaskDescriptionWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogTask(authKey, task_id, task_title, task_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Delete Catalog Task Flow @sales', () => {
        doDeleteCatalogTask(authKey, task_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Feature Type List Flow @general @super @sales', () => {
        doGetCatalogFeatureTypeList(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Feature Type List Flow", response.body)
        })
    })
    it('Create Catalog FeatureType Flow', () => {
        feature_title = 'MyTaskTitle' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogFeatureType(authKey, feature_title).then((response) => {
            feature_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Feature Type By Id Flow', () => {
        doGetCatalogFeatureTypeById(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Update catalog Feature Type with Put Method Flow', () => {
        feature_title = 'MyFeatureTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogFeatureType(authKey, feature_id, feature_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update catalog Feature Type with Patch Method Flow', () => {
        feature_title = 'MyFeatureTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogFeatureType(authKey, feature_id, feature_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Delete Catalog Feature Type Flow', () => {
        doDeleteCatalogFeatureType(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Module Type List Flow @general @super @sales', () => {
        doGetCatalogModuleTypeList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Module Type List", response.body)
        })
    })
    it('Create Catalog ModuleType Flow', () => {
        module_title = 'MyModuleTitle' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogModuleType(authKey, module_title).then((response) => {
            module_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Module Type By Id Flow', () => {
        doGetCatalogModuleTypeById(authKey, module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Update catalog Module Type with Put Method Flow', () => {
        module_title = 'MyModuleTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogModuleType(authKey, module_id, module_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })


    it('Update catalog Module Type with Patch Method Flow', () => {
        module_title = 'MyModuleTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogModuleType(authKey, module_id, module_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Delete Catalog Module Type Flow', () => {
        doDeleteCatalogModuleType(authKey, module_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Base Type List Flow @general @super @sales', () => {
        doGetCatalogBaseArchetypeList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Base Type List response", response.body)
        })
    })
    it('Create Catalog BaseType Flow @sales', () => {
        base_title = 'MyBaseTitle' + (Math.random() + 1).toString(36).substring(7);
        base_description = 'MyBasedescription' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogBaseArchetype(authKey, base_title, base_description).then((response) => {
            base_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Catalog BaseType response", response.body)
        })
    })

    it('Update Catalog BaseType Using Put Method Flow @sales', () => {
        base_title = 'MyBaseTitlePut' + (Math.random() + 1).toString(36).substring(7);
        base_description = 'MyBasedescriptionPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogBaseArchetype(authKey, base_id, base_title, base_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Catalog BaseType response", response.body)
        })
    })

    it('Update Catalog BaseType Using Patch Method Flow @sales', () => {
        base_title = 'MyBaseTitlePut' + (Math.random() + 1).toString(36).substring(7);
        base_description = 'MyBasedescriptionPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogBaseArchetype(authKey, base_id, base_title, base_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Catalog BaseType response", response.body)
        })
    })

    it('Delete Catalog Base Type Flow @sales', () => {
        doDeleteCatalogBaseType(authKey, base_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog Base Type response", response.body)
        })
    })

    it('Get Settings FE List @general @super @sales', () => {
        doGetSettingsFElist(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Edge @general @super @sales', () => {
        doGetEdges(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Edge Screen", response.body)
        })
    })

    it('Post Edge @general @super @sales', () => {
        const myEdge_id = 'Test' + (Math.random() + 1).toString(36).substring(7);
        dopostedge(authKey, app_id, myEdge_id).then((response) => {
            edge_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("add Edge Screen", response.body)
        })
    })

    it('Get Edge using id @general @super @sales', () => {
        doGetEdgesByid(authKey, app_id, edge_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Edge Screen", response.body)
        })
    })

    it('Put Edge @general @super @sales', () => {
        doputedge(authKey, app_id, edge_id).then((response) => {
            edge_id = response.body.id;
            expect(response.status).to.eq(200)
            cy.log("add Edge Screen", response.body)
        })
    })

    it('Patch Edge @general @super @sales', () => {
        dopatchedge(authKey, app_id, edge_id).then((response) => {
            edge_id = response.body.id;
            expect(response.status).to.eq(200)
            cy.log("add Edge Screen", response.body)

        })
    })

    it('Delete Edge using id @general @super @sales', () => {
        dodeleteEdgesByid(authKey, app_id, edge_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Edge Screen", response.body)
        })
    })

    //**Error: Bad Gateway */
    // it('Get Shareable Components List Flow', () => {
    //     doGetShareableComponentsList(authKey).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Shareable Components List response", response.body)
    //     })
    // })

    it('Create Shareable Components  Flow @general @super @sales', () => {
        doCreateShareableComponent(authKey).then((response) => {
            expect(response.status).to.eq(201)
            shareableComponent_id = response.body.id;
            cy.log("Create Shareable Components response", response.body)
        })
    })

    it('Get Shareable Components Using Id Flow @general @super @sales', () => {
        doGetShareableComponentsById(authKey, shareableComponent_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Shareable Components Using Id response", response.body)
        })
    })

    it('Patch Shareable Components Using Id Flow', () => {
        doPatchShareableComponent(authKey, shareableComponent_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Shareable Components  response", response.body)
        })
    })

    it('Get Code Components List Flow @general @super @sales', () => {
        doGetCodeComponents(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Shareable Components List response", response.body)
        })
    })

    it('Add Code Components Flow', () => {
        doCreateCodeComponents(authKey).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Add comonents code", response.body)
            cy.log(CodeComponents_id)
        })
    })

    it('Get Code Components Using Id Flow @general @super @sales', () => {
        doGetCodeComponentsById(authKey, CodeComponents_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code Components Using Id response", response.body)
        })
    })

    it('Patch Code Components Using Id Flow', () => {
        doPatchCodeComponent(authKey, CodeComponents_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Code Components  response", response.body)
        })
    })

    it('Put Code Components', () => {
        doPutCodeComponent(authKey, CodeComponents_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Code Components", response.body)
        })
    })

    it('Get skill List Flow @general @super @sales', () => {
        doGetSkill(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Skill List response", response.body)
        })
    })

    it('Add Skill Flow @general @super @sales', () => {
        doCreateSkill(authKey).then((response) => {
            expect(response.status).to.eq(201)
            skills_id = response.body.id;
            cy.log("Add Skills flow", response.body)
        })
    })

    it('Get Skill Using Id Flow @general @super @sales', () => {
        doGetSkillsById(authKey, skills_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code Components Using Id response", response.body)
        })
    })

    it('Patch Skill Using Id Flow @general @super @sales', () => {
        doPatchSkill(authKey, skills_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Code Components  response", response.body)
        })
    })

    it('Put Skill @general @super @sales', () => {
        doPutSkill(authKey, skills_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Code Components", response.body)
        })
    })

    it('Delete Skill Id Flow @general @super @sales', () => {
        dodeleteSkillByid(authKey, skills_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog feature response", response.body)
        })
    })
    it('Create Connectors Flow @general @super @sales', () => {
        doCreateConnector(authKey, app_id, connector_name).then((response) => {
            connector_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Connectors response", response.body)
        })
    })
    it('Get Connectors Flow @general @super @sales', () => {
        doGetConnector(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Connectors response", response.body)
        })
    })

    it('Update Apps Connectors @general @super @sales', () => {
        connector_name = connector_name + 1;
        connector_description = connector_description + 1;
        doUpdateConnector(authKey, app_id, connector_name, connector_description, connector_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Apps Connector response", response.body)
        })
    })

    it('Edit Connectors Flow @general @super @sales', () => {
        connector_description = connector_description + 1;
        doEditConnector(authKey, app_id, connector_description, connector_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Edit Connectors response", response.body)
        })
    })


    it('Get Connectors Flow @general @super @sales', () => {
        doGetConnector(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Connectors response", response.body)
        })
    })

    it('Get Connectors Using Id Flow @general @super @sales', () => {
        doGetConnectorUsingId(authKey, app_id, connector_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Connectors Using Id response", response.body)
        })
    })
    it('Delete Connector Flow @general @super @sales', () => {
        doDeleteConnector(authKey, app_id, connector_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Connector response", response.body)
        })
    })
    it('Get Installer Installed Components @general @super @sales', () => {
        doGetInstallerInstalComponent(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get installed Components with Status response", response.body)
        })
    })

    it('Get Connectors Flow @general @super @sales', () => {
        getConnectors(authKey).then((response) => {
            cy.log("Get Connectors response", response.body)
            connectors_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Connectors Flow By ID @general @super @sales', () => {
        doGetConnectorsByID(authKey, connectors_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Connectors Id response", response.body)
        })
    })

    it('Get Connectorscategories Flow @general @super @sales', () => {
        getConnectorscategories(authKey).then((response) => {
            cy.log("Get Connectorscategories response", response.body)
            connectorscategoris_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Connectors categories Flow By ID @general @super @sales', () => {
        doGetConnectorscategoriesByID(authKey, connectorscategoris_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Connectors categories Id response", response.body)
        })
    })

    // remove from swagger bug logged for this PLAN-1295
    // it('Get Shareable Connectors Flow', () => {
    //     doGetShareableConnectors(authKey).then((response) => {
    //         cy.log("Get Connectors response", response.body)
    //         expect(response.status).to.eq(200)
    //     })
    // })

    it('Add Shareable Connectors Flow @general @super @sales', () => {
        doCreateShareableConnectors(authKey).then((response) => {
            expect(response.status).to.eq(201)
            shareableconnectors_id = response.body.id;
            cy.log("AddShareable Connectors", response.body)
        })
    })

    it('Get Shareable Connectors Flow @general @super @sales', () => {
        doGetShareableConnectorsByID(authKey, shareableconnectors_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code Components Using Id response", response.body)
        })
    })

    it('Get Shareable Data Models Flow @general @super @sales', () => {
        doGetShareableDataModels(authKey).then((response) => {
            cy.log("Get Shareable Data Models response", response.body)
            shareabledatamodels_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Shareable Data Models Flow By ID @general @super @sales', () => {
        doGetShareableDataModelsByID(authKey, shareabledatamodels_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Shareable Data Models Id response", response.body)
        })
    })

    it('Get Notification Flow @general @super @sales', () => {
        getNotification(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Search App Flow @general @super @sales', () => {
        searchApp(authKey, appname).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Apptype List Flow @general @super @sales', () => {
        appTypeList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Appetize Builds Flow @general @super @sales', () => {
        doGetAppetizeBuilds(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Apptype List By Id Flow @general @super @sales', () => {
        getAppListById(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })



    it('Get Skill List Flow @general @super @sales', () => {
        doGetSkillsList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    // *** Test case is not available on swagger
    // it('Get Bug Task List Flow', () => {
    //     doGetBugTaskList(authKey,app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Bug Task List response", response.body)

    //     })
    // })

    // *** Test cases is not available on swagger
    // it('Create Bug Task  Flow', () => {
    //     doCreateBugTask(authKey,app_id).then((response) => {
    //         bugTask_id=response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Create Bug Task response", response.body)

    //     })
    // })

    // *** Test cases is not available on swagger
    // it('Get Bug Task Using Id Flow', () => {
    //     doGetBugTaskById(authKey,app_id,bugTask_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Bug Task Using Id response", response.body)

    //     })
    // })

    // *** Test cases is not available on swagger
    // it('Put Bug Task Using Id Flow', () => {
    //     doUpdateWithPutBugTask(authKey,app_id,bugTask_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Put Bug Task Using Id response", response.body)

    //     })
    // })

    // *** Test cases is not available on swagger
    // it('Patch Bug Task Using Id Flow', () => {
    //     doUpdateWithPatchBugTask(authKey,app_id,bugTask_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch Bug Task Using Id response", response.body)

    //     })
    // })

    // *** Test cases is not available on swagger
    // it('Delete Bug Task Flow', () => {
    //     doDeleteBugTask(authKey,app_id,bugTask_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Delete Bug Task response", response.body)

    //     })
    // })

    it('Get Component List Flow @general @super @sales', () => {
        doGetComponentList(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Component List response", response.body)

        })
    })

    it('Create Component Flow @general @super @sales', () => {
        doCreateComponent(authKey, app_id).then((response) => {
            component_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Component response", response.body)

        })
    })

    it('Get Component Using Id Flow @general @super @sales', () => {
        doGetComponentById(authKey, app_id, component_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Component Using Id response", response.body)

        })
    })

    it('Put Component Using Id Flow @general @super @sales', () => {
        doUpdateWithPutComponent(authKey, app_id, component_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Component Using Id response", response.body)

        })
    })
    it('Patch Component Using Id Flow @general @super @sales', () => {
        doUpdateWithPatchComponent(authKey, app_id, component_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Component Using Id response", response.body)

        })
    })
    it('Delete Component Flow @general @super @sales', () => {
        doDeleteComponent(authKey, app_id, component_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Component response", response.body)

        })
    })


    it('Get Certificate List Flow @general @super @sales', () => {
        getCertificateList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get AppSupport Type Flow @general @super @sales', () => {
        getAppSupportType(authKey).then((response) => {
            cy.log("login response", response.body)
            // appsupport_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Check App Generation Flow @general @super @sales', () => {
        doCheckAppGeneration(authKey, app_id).then((response) => {
            cy.log("Check App Generationresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Get Invoice Flow @general @super @sales', () => {
        getInvoice(authKey).then((response) => {
            cy.log("Get Invoice response", response.body)
            expect(response.status).to.eq(200)
        })
    })


    it('Get User List Flow @general @super @sales', () => {
        getUserList(authKey, app_id).then((response) => {
            cy.log("Get User Listresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Get File List Flow @general @super @sales', () => {
        dogGetFilesList(authKey, app_id).then((response) => {
            cy.log("Get File List response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Create File Flow @general @super @sales', () => {
        doCreateFile(authKey, app_id).then((response) => {
            file_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create File response", response.body)

        })
    })

    it('Get File Using Id Flow @general @super @sales', () => {
        doGetFileById(authKey, app_id, file_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get File Using Id response", response.body)

        })
    })

    it('Put File Using Id Flow @general @super @sales', () => {
        doUpdateWithPutFile(authKey, app_id, file_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put File Using Id response", response.body)

        })
    })
    it('Patch File Using Id Flow @general @super @sales', () => {
        doUpdateWithPatchFile(authKey, app_id, file_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch File Using Id response", response.body)

        })
    })
    it('Delete File Flow @general @super @sales', () => {
        doDeleteFile(authKey, app_id, file_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete File response", response.body)

        })
    })

    it('Get Edge List Flow @general @super @sales', () => {
        getEdges(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Edge List response", response.body)
        })
    })
    it('Search Invoice Flow @general @super @sales', () => {
        searchInvoice(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get App Logs Flow @general @super @sales', () => {
        getAppLogs(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            log_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get App Logs Using Id Flow @general @super @sales', () => {
        getAppLogsUsingLogID(authKey, log_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    //In swagger Getting an 500 Internal server error
    // it('Create Attributes Flow', () => {
    //     doCreateAttributes(authKey, app_id).then((response) => {
    //         attribute_id=response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Create Attributes response", response.body)
    //     })
    // })

    it('Get Attributes Flow @general @super @sales', () => {
        getAttributes(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Attributes response", response.body)
            attributes_id = response.body[0].id;
        })
    })

    it('Get Attributes Using Id Flow @general @super @sales', () => {
        doGetAttributesById(authKey, app_id, attributes_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Attributes Using Id response", response.body)

        })
    })

    it('Get Audit Log List Flow', () => {
        getAuditLogList(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Attributes response", response.body)
        })
    })

    it('Get Certifications @general @super @sales', () => {
        dogetCertifications(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Certifications", response.body)
        })
    })

    it('Post Certifications @general @super @sales', () => {
        doPostCertifications(authKey, app_id).then((response) => {
            Certifications_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Post Certifications id ", response.body)

        })
    })

    it('Get Certifications for id @general @super @sales', () => {
        dogetCertificationsid(authKey, app_id, Certifications_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Certifications id", response.body)
        })
    })

    it('Put Certifications for id @general @super @sales', () => {
        doputCertificationsid(authKey, app_id, Certifications_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Certifications id", response.body)
        })
    })

    it('Patch Certifications for id @general @super @sales', () => {
        doPatchCertificationsid(authKey, app_id, Certifications_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Certifications for id", response.body)

        })
    })

    it('Delete Certifiations for id @general @super @sales', () => {
        doDeleteCertificationsid(authKey, app_id, Certifications_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Certifications", response.body)

        })
    })

    it('Get Statistics Flow', () => {
        getStatistics(authKey).then((response) => {
            cy.log("Get Statistics response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Build-Stages Flow @general @super @sales', () => {
        getBuildstages(authKey).then((response) => {
            cy.log("Get Build-Stages response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Candidates Flow', () => {
        getCandidates(authKey).then((response) => {
            cy.log("Get Candidates response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Feedbacks Flow', () => {
        getFeedbacks(authKey).then((response) => {
            cy.log("Get Feedbacks response", response.body)
            feedbacks_id = response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get FeedbacksCategories Flow @general @super @sales', () => {
        getFeedbacksCategories(authKey).then((response) => {
            cy.log("Get FeedbacksCategories response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    // ** ID is not avialble in this test case ** //
    // it('GetFeedbacks Categories  Flow By ID', () => {
    //     doGetFeedbacksCategoriesByID(authKey, feedbacks_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Feedbacks categories Id response", response.body)
    //     })
    // })



    it('Get Cb Users @sales', () => {
        dogetcbusers(authKey).then((response) => {
            cy.log("Get Cb users response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Post Cb Users @sales', () => {
        doPostcbusers(authKey).then((response) => {
            cb_usersid = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Cb users", response.body)

        })
    })

    it('Get Cb Users by Id @sales', () => {
        dogetcbusersbyId(authKey, cb_usersid).then((response) => {
            cy.log("Get Cb users response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Reports Flow', () => {
        getReports(authKey).then((response) => {
            cy.log("Get Reports response", response.body)
            reports_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('GetReports Flow By ID', () => {
        doGetReportsByID(authKey, reports_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Reports Id response", response.body)
        })
    })



    it('do Put Users @sales', () => {
        doputcbusersbyId(authKey, cb_usersid).then((response) => {
            cy.log("Put Cb users response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('do Patch Users @sales', () => {
        dopatchcbusersbyId(authKey, cb_usersid).then((response) => {
            cy.log("Patch Cb users response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Developer request Flow @general @super', () => {
        doGetDevloperrequest(authKey).then((response) => {
            cy.log("Get developer request response", response.body)
            developerrequest_id = response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('GetDeveloper Request Flow By ID @general @super', () => {
        doGetDevloperrequestByID(authKey, developerrequest_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Devloper Request Id response", response.body)
        })
    })

    it('Get responses Flow', () => {
        doGetResponses(authKey).then((response) => {
            cy.log("Get developer request response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Appetizedevices Flow @general @super @sales', () => {
        doGetAppetizedevices(authKey).then((response) => {
            cy.log("Get Appetizedevices response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Create API Spec Flow @general @super @sales', () => {
        dogGetAPIspec(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create API spec response", response.body)

        })
    })

    it('Get Logs Flow @general @super @sales', () => {
        doGetLogs(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Logs response", response.body)
            logs_id = response.body.results[0].id;

        })
    })

    it('Get logs  Flow By ID @general @super @sales', () => {
        doGetLogsById(authKey, app_id, logs_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Bug Task response", response.body)

        })
    })

    it('Post Dashboard feedback @general @super @sales', () => {
        doPostDashboardfeedbacks(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Post Dashboard feedback ", response.body)

        })
    })

    it('Get member feedback Flow', () => {
        doGetMemberfeedback(authKey).then((response) => {
            cy.log("Get Appetizedevices response", response.body)
            memberfeedback_id = response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Member feedback Flow By ID', () => {
        doGetfeedbackmemberByID(authKey, memberfeedback_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Devloper Request Id response", response.body)
        })
    })

    it('Get Addons Flow @general @super @sales', () => {
        doGetAddons(authKey).then((response) => {
            cy.log("Get Addons response", response.body)
            addons_id = response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Addons Flow By ID @general @super @sales', () => {
        doGetAddonsByID(authKey, addons_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Addons Id response", response.body)
        })
    })

    it('Get Scaffolds Flow @general @super @sales', () => {
        doGetScaffolds(authKey).then((response) => {
            cy.log("Get Scaffolds response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get TOTP Device Flow @general @super @sales', () => {
        doTOTPdevice(authKey).then((response) => {
            cy.log("Get ToTP Device response", response.body)
            expect(response.status).to.eq(201)
        })
    })

    it('Get Socialaccounts Flow @general @super @sales', () => {
        doGetSocialaccounts(authKey).then((response) => {
            cy.log("Get Socialaccounts response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Settingsfe Flow @general @super @sales', () => {
        doGetSettingsfe(authKey).then((response) => {
            cy.log("Get Settingsfe response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Poroject Clones Flow @general @super @sales', () => {
        doGetPeojectClones(authKey).then((response) => {
            cy.log("Get Poroject Clones response", response.body)
            projectclones_id = response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Peoject Clones By ID @general @super @sales', () => {
        doGetProjectClonesByID(authKey, projectclones_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Peoject Clones By response", response.body)
        })
    })

    it('Create Mobile Builds Flow @general @super @sales', () => {
        doGetMobilebuilds(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Mobile Builds response", response.body)

        })
    })

    it('Get Resend Verification Flow @general @super @sales', () => {
        doPostresendverification(authKey).then((response) => {
            cy.log("Get Resend Verification response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get slides @general @super @sales', () => {
        doGetSlides(authKey, app_id).then((response) => {
            cy.log("Get slides of project", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Post Slides @general @super @sales', () => {
        doPostslides(authKey, app_id).then((response) => {
            cy.log("Post slides of project", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('post Dashboard Feedback @general @super @sales', () => {
        doPostDashboardFeedack(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Post Dashboard Feedback", response.body)
        })
    })

    it('post Magic Link @general @super @sales', () => {
        doPostMagicLink(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Magic link sent successfully", response.body)
        })
    })

    it('post Out Grow @general @super @sales', () => {
        doPostOutGrow(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Resend Verification response", response.body)
        })
    })

    it('get Social APP @general @super @sales', () => {
        doGetSocialApp(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Social APP", response.body)
        })
    })


    it('get Social APP By ID @general @super @sales', () => {
        doGetSocialAppByID(authKey, social_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Social APP Id response", response.body)
        })
    })


    it('get check User @general @super @sales', () => {
        doGetUser(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get User", response.body)
        })
    })

    it('do put check User ', () => {
        doPutUser(authKey).then((response) => {
            cy.log("Put user response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('get all Users', () => {
        doGetUsers(authKey, users_id).then((response) => {
            users_id = response.body.id;
            expect(response.status).to.eq(200)
            cy.log("Get User", response.body)
        })
    })

    it('get all Users By ID', () => {
        doGetUsersByID(authKey, users_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Social APP Id response", response.body)
        })
    })

    it('get verify the project logs @general @super @sales', () => {
        doGetProjectlogs(authKey).then((response) => {
            projectlogs_id = response.body[0].id;
            expect(response.status).to.eq(200)
            cy.log("Get User", response.body)
        })
    })


    it('get verify the project logs By ID @general @super @sales', () => {
        doGetProjectlogsByID(authKey, projectlogs_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Social APP Id response", response.body)
        })
    })
    it('Create Connectors Flow @general @super @sales', () => {
        doGetDataModel(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get DataModel Flow response", response.body)
        })
    })

    it('Get DataModel Flow @general @super @sales', () => {
        doGetDataModel(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get DataModel response", response.body)
        })
    })

    it('Get Models Flow @general @super @sales', () => {
        doGetModels(authKey).then((response) => {
            cy.log("Get Appetizedevices response", response.body)
            models_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Models Flow By ID @general @super @sales', () => {
        doGetModelsByID(authKey, models_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Devloper Request Id response", response.body)
        })
    })
    it('Create document Flow @general @super @sales', () => {
        doCreateDocument(authKey, app_id).then((response) => {
            document_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create document flow response", response.body)
        })
    })
    it('Get document by id flow @general @super @sales', () => {
        doGetDocumentById(authKey, app_id, document_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get document by id flow response", response.body)
        })
    })
    it('Put document by id flow @general @super @sales', () => {
        doPutDocumentById(authKey, app_id, document_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put document by id flow response", response.body)
        })
    })
    it('Patch document by id flow @general @super @sales', () => {
        doPatchDocumentById(authKey, app_id, document_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch document by id flow response", response.body)
        })
    })
    it('Delete document by id flow @general @super @sales', () => {
        doDeleteDocumentById(authKey, app_id, document_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete document by id flow response", response.body)
        })
    })
    it('Get all code packages flow @general @super @sales', () => {
        doGetListCodePackages(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get all code packages flow response", response.body)
        })
    })
    it('Create new code packages flow', () => {
        const codePackage_name = 'My New Code Packages' + (Math.random() + 1).toString(36).substring(7);
        doCreateCodePackages(authKey, codePackage_name).then((response) => {
            codepackage_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create new code packages flow response", response.body)
        })
    })
    it('Get code packages by Id flow', () => {
        doGetCodePackagestById(authKey, codepackage_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get code packages by Id flow response", response.body)
        })
    })
    it('Put code packages flow', () => {
        const codePackage_name = 'My New Code Packages' + (Math.random() + 1).toString(36).substring(7);
        const codePackage_Description = 'Create new code packages for login functionality and also there is some different login functioality like login with google and so on' + (Math.random() + 1).toString(36).substring(7);
        const codePackage_Link = 'http://www.demo.com' + (Math.random() + 1).toString(36).substring(7);
        doPutCodePackageById(authKey, codepackage_id, codePackage_name, codePackage_Description, codePackage_Link).then((response) => {
            codepackage_id = response.body.id;
            expect(response.status).to.eq(200)
            cy.log("Create new code packages flow response", response.body)
        })
    })
    it('Patch code packages flow', () => {
        const codePackage_name = 'My New Code Packages' + (Math.random() + 1).toString(36).substring(7);
        const codePackage_Description = 'Create new code packages for login functionality and also there is some different login functioality like login with google and so on' + (Math.random() + 1).toString(36).substring(7);
        const codePackage_Link = 'http://www.demo.com' + (Math.random() + 1).toString(36).substring(7);
        doPatchCodePackageById(authKey, codepackage_id, codePackage_name, codePackage_Description, codePackage_Link).then((response) => {
            codepackage_id = response.body.id;
            expect(response.status).to.eq(200)
            cy.log("Create new code packages flow response", response.body)
        })
    })

    it('Create Job Request Flow @general @super @sales', () => {
        doAddJobRequest(authKey, app_id).then((response) => {
            job_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add Job Request response", response.body)
        })
    })

    it('Get Job Request Flow @general @super @sales', () => {

        doGetJobRequest(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Job Request response", response.body)
        })
    })

    it('Get Job Request Using ID Flow @general @super @sales', () => {

        doGetJobRequestUsingId(authKey, app_id, job_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Job Request Using ID response", response.body)
        })
    })
    it('Edit Job Request Flow @general @super @sales', () => {
        project_description = "TestDescription" + app_id;
        doEditJobRequest(authKey, app_id, job_id, project_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Edit Job Request response", response.body)
        })
    })
    it('Delete job Request Flow @general @super @sales', () => {

        doDeleteJobRequest(authKey, app_id, job_id, job_cost).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Delete job Request response", response.body)
        })
    })

    it('Get Job Type  List Flow', () => {
        doGetjobtype(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Skill List response", response.body)
        })
    })

    it('Add Job Type Flow', () => {
        doAddjobtype(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            jobtype_id = response.body.id;
            cy.log("Add Job Type Status response", response.body)
        })
    })

    it('Get Job Type Using Id Flow', () => {
        doGetjobtypeById(authKey, jobtype_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Job Type Using Id response", response.body)
        })
    })

    it('Patch Job Type  Using Id Flow', () => {
        doPatchjobtype(authKey, job_name, job_cost, app_id, jobtype_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Job Type response", response.body)
        })
    })

    it('Put Job type', () => {
        doPutJobtype(authKey, jobtype_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Code Components", response.body)
        })
    })

    it('Delete Job type Id Flow', () => {
        doDeleteJobtypeByid(authKey, jobtype_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog feature response", response.body)
        })
    })

    it('Get Candidates Flow', () => {
        doGetCandidates(authKey).then((response) => {
            expect(response.status).to.eq(200)
            candidates_id = response.body[0].id;
            cy.log("Get Candidate response", response.body)
        })
    })

    it('Get Candidates Byid', () => {
        doGetCandidatesbyID(authKey, candidates_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Candidate response", response.body)
        })
    })

    it('Get Job titles Flow @general @super @sales', () => {
        dogetJobtitles(authKey).then((response) => {
            cy.log("Get Connectors response", response.body)
            jobtitles_id = response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Job titles Flow By ID @general @super @sales', () => {
        doGetJobtitlesByID(authKey, jobtitles_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Job titles Id response", response.body)
        })
    })
    it('Api_pre_install_module @general @super @sales', () => {
        doGetapiPreinstallmodule(authKey, app_id, module_id).then((response) => {
            expect(response.status).to.eq(200)

        })
    })

    // it('Add DataModel Flow', () => {
    //     cy.resloveSyncIssue();
    //     moduleInstall(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(202)
    //         cy.log("Module installation triggered", response.body)
    //     })
    // })

    it('Get Modules List @general @super @sales', () => {
        doGetmodulelist(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Modules List", response.body)
        })
    })

    it('Create module @general @super @sales', () => {
        doCreateModules(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            module_id = response.body.id;
            cy.log("Create Modules Status response", response.body)
        })
    })

    it('Get modules Id Flow @general @super @sales', () => {
        doGetModulesById(authKey, app_id, module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get module Using Id response", response.body)
        })
    })

    it('Patch modules Id Flow @general @super @sales', () => {
        doPatchModules(authKey, app_id, module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch modules response", response.body)
        })
    })

    it('Put modules Id Flow @general @super @sales', () => {
        doPutModules(authKey, app_id, module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put modules", response.body)
        })
    })
    it('Get Reports @general @super @sales', () => {
        doGetapireports(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Reports get result", response.body)
        })
    })
    it('Get all PRD List by organization User @general @super @sales', () => {
        doGetOrganizationPRDList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get all PRD List by organization User response", response.body)
        })
    })

    it('Generate PRD by organization User without app @sales', () => {
        doGenerateOrganizationPRD(authKey).then((response) => {
            let ids = response.body.data.id;
            generatePrd_id = ids - 1;
            expect(response.status).to.eq(202)
            cy.log(ids);
            cy.log(generatePrd_id);
            cy.log("Generate PRD by organization User Response", response.body)
        })
    })
    it('Get generated PRD Using Id by organization User @sales', () => {
        doGetOrganizationPRDById(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get generated PRD Using Id by organization User", response.body)

        })
    })
    it('Put generated PRD by organization User @sales', () => {
        doPutOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put generated PRD by organization User response", response.body)
        })
    })
    it('Patch generated PRD by organization User @sales', () => {
        doPatchOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch generated PRD by organization User response", response.body)
        })
    })


    it('Get PRD Estimate by organization User @sales', () => {
        dogetOrganizationPRDEstimate(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PRD Estimate by organization User Response", response.body)
        })

    })
    it('Get PRD Category List by organization User @general @super @sales', () => {
        doGetOrganizationPRDCategoryList(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Response Body:", JSON.stringify(response.body))
            cy.log("Get PRD Category List by organization User Response", response.body)
        })

    })


    it('Get All Phase from PRD for organization User @general @super', () => {
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
    it('Get All User Roles from PRD for organization User @general @super', () => {
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
            categoryId = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create PRD Category by organization User Response", response.body)
        })
    })
    it('Get category using Id for organization User', () => {
        doGetOrganizationPRDCategoryUsingId(authKey, generatePrd_id, categoryId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get category using Id for organization User Response", response.body)
        })
    })
    it('Put category using Id for organization User', () => {
        const tiltleput = 'CatPut' + (Math.random() + 1).toString(36).substring(7);
        doPutOrganizationPRDCategory(authKey, generatePrd_id, categoryId, tiltleput, myPhaseId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put category using Id for organization User Response", response.body)
        })

    })
    it('Patch category using Id for organization User', () => {
        const tiltlepatch = 'CatPatch' + (Math.random() + 1).toString(36).substring(7);
        doPatchOrganizationPRDCategory(authKey, generatePrd_id, categoryId, tiltlepatch, myPhaseId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch category using Id for organization User Response", response.body)
        })
    })

    // })
    // it('Move feature one category to another for organization User', () => {
    //     doMoveFetaureIntoCategoryOrganizationPRD(authKey, generatePrd_id,categoryId).then((response) => {
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
    it('Create Feature into category for organization User @general @super @sales', () => {
        doCreatefeatureOrganizationPRD(authKey, generatePrd_id).then((response) => {
            featureId = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Feature into category for organization User Response", response.body)
        })

    })

    // it('Get Feature using Id from category for organization User', () => {
    //     doGetfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,featureId).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Put Feature using Id from category for organization User', () => {
    //     doPutfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,featureId).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Put Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Patch Feature using Id from category for organization User', () => {
    //     doPatchfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,featureId).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch Feature using Id from category for organization User Response", response.body)
    //     })

    // })

    // it('Add Module into the feature for organization User', () => {
    //     doAddModuleIntofeatureOrganizationPRD(authKey, generatePrd_id,featureId).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Module into the feature for organization User response", response.body)
    //     })

    // })
    // it('Remove Module into the feature for organization User', () => {
    //     doRemoveModuleIntoFeatureOrganizationPRD(authKey, generatePrd_id,featureId).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Remove Module into the feature for organization User response", response.body)
    //     })

    // })
    // it('Delete Feature using Id from category for organization User', () => {
    //     doDeletefeatureUsingIdOrganizationPRD(authKey, generatePrd_id,featureId).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Patch Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Delete category using Id for organization User', () => {
    //     doDeleteOrganizationPRDCategoryUsingId(authKey, generatePrd_id,categoryId).then((response) => {
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
    it('download PRD @sales', () => {
        downloadPrd(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("download PRD Response", response.body)
        })
    })

    it('Get All comment from feature @general @super @sales', () => {
        getAllFeatureComments(authKey, generatePrd_id, featureId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All comment from feature", response.body)
        })
    })
    it('Add comment into the feature @general @super @sales', () => {
        addCommentsIntoFeature(authKey, generatePrd_id, featureId).then((response) => {
            comment_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add comment into the feature Response", response.body)
        })
    })
    it('Get comment from feature using ID @general @super @sales', () => {
        getFeatureCommentById(authKey, generatePrd_id, featureId, comment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get comment from feature using ID Response", response.body)
        })

    })

    it('Update comment into the feature using put @general @super @sales', () => {
        putFeatureComments(authKey, generatePrd_id, featureId, comment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update comment into the feature using put Response", response.body)
        })

    })
    it('Update comment into the feature using patch @general @super @sales', () => {
        patchFeatureComments(authKey, generatePrd_id, featureId, comment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update comment into the feature using patch Response", response.body)
        })

    })

    it('Feature decompose flow @sales', () => {
        newFaetiureId = featureId - 1;
        cy.log("Feature ID:", featureId);
        cy.log("New Feature ID:", newFaetiureId);
        featureDecompose(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Feature decompose flow Response", response.body)
        })
    })

    it('Feature Auto Estimation flow @sales', () => {
        featureAutoEstimation(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Feature Auto Estimation flow Response", response.body)
        })
    })

    it('Get All Technical Recomandation flow @sales', () => {
        getTecnicalReconmondationList(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All Technical Recomandation flow Response", response.body)
        })
    })

    it('Generate Starter Code flow @sales', () => {
        generateStarterCode(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Generate Starter Code flow Response", response.body)
        })

    })

    it('Request Tecnical Recomandation flow @sales', () => {
        requestTechnicalRecomandation(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Request Tecnical Recomandation flow Response", response.body)
        })
    })

    it('Get Starter Code flow @sales', () => {
        getStarterCode(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Starter Code flow Response", response.body)
        })
    })

    it('Unlink Jira Url flow @sales', () => {
        unlinkJiraUrl(authKey, generatePrd_id, newFaetiureId).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Unlink Jira Url flow Response", response.body)
        })
    })

    it('Generate Azure Cost Estimation  flow @sales', () => {
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
    it('Delete generated PRD by organization User @sales', () => {
        doDeleteOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete generated PRD by organization User Response", response.body)
        })
    })

    it('delete comment from feature @general @super @sales', () => {
        deleteFeatureCommet(authKey, generatePrd_id, comment_id, featureId).then((response) => {
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
    it('Create Tags Flow', () => {
        getPrdAiCategories(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create tags response", response.body)
        })
    })
    it('Get Currently Approved Prd Version Flow @general @super @sales', () => {
        getCurrentlyApprovedPrdVersion(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Currently Approved Prd Version response", response.body)
        })
    })

    it('Get CBCarePlan UsingId Flow @sales', () => {
        getCBCarePlanUsingId(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get CBCarePlan UsingId", response.body)
        })
    })

    it('Get Milestone Index Flow @general @super @sales', () => {
        getMilestoneIndex(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Milestone Index response", response.body)
        })
    })

    it('Get Milestone Status Summy Flow @general @super @sales', () => {
        getMilestoneStatusSummy(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Milestone Status Summy response", response.body)
        })
    })

    // it('Add Prd Version Status Flow', () => {
    //     addPrdVersionStatus(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Prd Version Status response", response.body)
    //     })
    // })


    it('Get Roles FLow @general @super @sales', () => {
        getRoles(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Roles response", response.body)
            roles_id = response.body[0].id;
        })
    })

    it('GetRoles Flow By ID @general @super @sales', () => {
        doGetRolesByID(authKey, roles_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Devloper Request Id response", response.body)
        })
    })

    // it('Add Prd Tags Flow', () => {
    //     doAddPrdTag(authKey, app_id, 'testaddtag' + app_id).then((response) => {
    //         tag_id = response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Add Prd Tags response", response.body)
    //     })
    // })

    // it('Get Prd Tags Flow', () => {
    //     doGetPrdTag(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Prd Tags response", response.body)
    //     })
    // })

    // it('Get Prd Tags Using Id Flow', () => {
    //     doGetPrdTagUsingId(authKey, tag_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Prd Tags Using Id response", response.body)
    //     })
    // })


    it('Create UserRoles Flow @general @super @sales', () => {
        prd_overview_userRoles(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Create UserRoles response", response.body)
        })
    })

    it('Add Prd Roles Flow @general @super @sales', () => {
        doAddPrdRoles(authKey, app_id, 'testaddrole' + app_id).then((response) => {
            role_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add Prd Roles response", response.body)
        })
    })

    //Not Avaialble on UI
    // it('Create PrdItem Flow', () => {
    //     prd_create_item(authKey, app_id, group_Id, 'PRD ITEM TEST' + app_id).then((response) => {
    //         item_id = response.body.id;
    //         const addedItemId = cy.wrap(response).its('body.id').then((id) => id);
    //         addedItemId.then((id) => added_items.push(id));
    //         added_items = added_items.sort(() => Math.random() - 0.5);
    //         expect(response.status).to.eq(201)
    //         cy.log("Create PrdItem response", response.body)
    //     })
    // })

    // it('Add Suggested Features Flow', () => {
    //     doAddSuggestedFeatures(authKey, app_id, app_name).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Suggested Features response", response.body)
    //     })
    // })

    it('Get Payment Receipt Flow @general @super @sales', () => {
        doGetPaymentReceipt(authKey, app_id, app_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Payment Receipt response", response.body)
        })
    })
    it('Get UsefullLinks Flow @general @super @sales', () => {
        doGetUsefullLinks(authKey, app_id, app_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get UsefullLinks response", response.body)
        })
    })

    it('Post UsefullLinks Flow @sales', () => {
        doPostUsefullLinks(authKey, app_id,).then((response) => {
            usefullLinkId = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("add Usefull Links", response.body)
        })

    })

    it('Get id UsefullLinks Flow @general @super @sales', () => {
        doGetidUsefullLinks(authKey, app_id, usefullLinkId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get UsefullLinks id in  response", response.body)
        })
    })

    it('Put id UsefullLinks Flow @sales', () => {
        doPutUsefullLinks(authKey, app_id, usefullLinkId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put UsefullLinks id in  response", response.body)
        })
    })

    it('Patch id UsefullLinks Flow @sales', () => {
        doPatchUsefullLinks(authKey, app_id, useful_title, useful_url, usefullLinkId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch UsefullLinks id in  response", response.body)
        })
    })

    it('Delete id UsefullLinks Flow @sales', () => {
        doDeleteUsefullLinks(authKey, app_id, usefullLinkId).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete UsefullLinks id in  response", response.body)
        })
    })

    it('Get Statement of Work Flow @general @super @sales', () => {
        doGetStatementOfWork(authKey, app_id, app_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Statement of Work response", response.body)
        })
    })
    //doGetStatementOfWork
    // it('Add InstallerInstall Flow', () => {
    //     doAddInstallerInstall(authKey,app_id, app_name).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add InstallerInstall response", response.body)
    //     })
    // })
    //doAddInstallerInstall

    // it('Get Analyze Risk Flow', () => {
    //     doGetaAnalyzeRisks(authKey,app_id).then((response) => {
    //         expect(response.status).to.eq(202)
    //         cy.log("Get Analyze Risk response", response.body)
    //     })
    // })

    // it('Get Start OverPrdAi Flow', () => {
    //     doGetStartOverPrdAi(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Start OverPrdAi response", response.body)
    //     })
    // })

    // Not Available on UI
    // it('Get Prd Item Flow', () => {
    //     prd_get_Item(authKey, group_Id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Prd Item response", response.body)

    //     })
    // })

    // it('Patch Item Update Order Flow', () => {
    //     doPatchItemUpdateOrder(authKey, group_Id, added_items).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch Item Update Order response", response.body)

    //     })
    // })


    // it('Get Prd Item Using Id Flow', () => {
    //     doGetItemsUsingId(authKey, item_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Prd Item Using Id response", response.body)

    //     })
    // })

    //Not Avaialble on swagger
    // it('Patch Prd Item Flow', () => {
    //     doPatchItem(authKey, app_id, item_id, item_name).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch Prd Item response", response.body)

    //     })
    // })

    //Not Avialble on UI
    // it('Update Prd Version Staus Flow', () => {
    //     doUpdatePrdVersionStatus(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Update Prd Version Staus response", response.body)

    //     })
    // })

    it('Get Prd Version  Flow @general @super @sales', () => {
        doGetPrdVersions(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Prd Version response", response.body)

        })
    })

    // Not Available on UI
    // it('Import Catalog Flow', () => {
    //     doImportCatalog(authKey, app_id, group_Id, task_Id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Import Catalog response", response.body)

    //     })
    // })

    // *************Not Available on Swagger*************

    // it('Add Comment Flow', () => {
    //     doAddComment(authKey, app_id, 'Testcomment' + app_id, item_id).then((response) => {
    //         comment_Id = response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Add Comment response", response.body)

    //     })
    // })

    // *************Not Available on Swagger*************

    // it('Get Comment Flow', () => {
    //     doGetComment(authKey, comment_Id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get comment response", response.body)

    //     })
    // })

    // *************Not Available on Swagger*************

    // it('Edit Comment Flow', () => {
    //     doEditComment(authKey, comment_Id, app_id, 'NewTestComment' + app_id, item_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Edit comment response", response.body)

    //     })
    // })

    // *************Not Available on Swagger*************


    // it('Get Chnage Comment Status Flow', () => {
    //     doGetChangeCommentStatus(authKey, comment_Id, app_id, 'resolved').then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Change comment Status response", response.body)

    //     })
    // })

    // *************Not Available on Swagger*************


    // it('Delete Comment Flow', () => {
    //     doDeleteComment(authKey, comment_Id, app_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Delete Comment Response", response.body)
    //     })

    // })


    it('Get View Instudio Prd Flow @general @super @sales', () => {
        doGetViewInStudioPrd(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get View Instudio Prd response", response.body)

        })
    })


    // it('Add Feature Into Prd Flow', () => {
    //     doAddFeatureIntoPrd(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Feature Into Prd response", response.body)

    //     })
    // })

    // it('Add Module Into Prd Flow', () => {
    //     doAddModuleIntoPrd(authKey, app_id, group_Id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("AAdd Module Into Prd response", response.body)

    //     })
    // })

    // it('Add Archetype Into Prd Flow', () => {
    //     doAddArchetypeIntoPrd(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Archetype Into Prd response", response.body)

    //     })
    // })

    // it('Get Prd Activity Log Flow', () => {
    //     doGetPrdActivityLog(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Prd Activity Log Flow response", response.body)

    //     })
    // })
    // Not Avaialble on UI
    // it('Get Prd AI Usertype Flow', () => {
    //     doGetPrdAiUserType(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Archetype Into Prd response", response.body)

    //     })
    // })

    it('Get User types Flow @general @super @sales', () => {
        doGetSUserTypes(authKey).then((response) => {
            cy.log("Get Connectors response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Add User types Prd Flow @general @super @sales', () => {
        doCreateUserTypes(authKey).then((response) => {
            expect(response.status).to.eq(201)
            usertypes_id = response.body.id;
            cy.log("Add Archetype Into Prd response", response.body)

        })
    })

    it('Get User types Prd Flow By ID @general @super @sales', () => {
        doGetSUserTypesByID(authKey, usertypes_id).then((response) => {
            cy.log("Get  User types response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Patch user Types Id Flow @general @super @sales', () => {
        doPatchUserTypes(authKey, usertypes_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch user Types response", response.body)
        })
    })

    it('Put User Types @general @super @sales', () => {
        doPutUserTypes(authKey, usertypes_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put  User Types", response.body)
        })
    })

    it('Delete user Types Id Flow @general @super @sales', () => {
        dodeleteuserTypesByid(authKey, usertypes_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete user Typesresponse", response.body)
        })
    })

    // Not Avaiable on UI
    // it('Get Code Status Prd Flow', () => {
    //     doGetCodeStatusPrd(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Code Status Prd response", response.body)

    //     })
    // })
    // it('Remove Prd Roles Flow', () => {
    //     doRemovePrdRoles(authKey, item_id, role_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Remove Prd Roles Response", response.body)
    //     })

    // })

    // Not Avaiable on UI
    // it('Delete PrdItem Flow', () => {
    //     prd_delete_item(authKey, app_id, group_Id, item_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Delete PrdItem Response", response.body)
    //     })

    // })

    ////**************Not avaialble on swagger**************/

    // it('Delete Prd Tags Flow', () => {
    //     doDeletePrdTag(authKey, tag_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Delete Prd Tags Response", response.body)
    //     })

    // })

    it('Get Current Prd Pdf Flow @sales', () => {
        doGetCurrentPrdPdf(authKey, app_id).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Delete PrdGroup response", response.body)
        })
    })

    it('Get User Repos List Flow', () => {
        doGetUserReposList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PrdGroup response", response.body)
        })
    })
    it('Add Create PRD with AI @general @super @sales', () => {
        docreatePRDWithAI(authKey, app_id, app_name).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Add Feature with AI", response.body)

        })
    })
    // it('Add Feature with AI', () => {
    //     doAddfeaturewithAI(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Feature with AI", response.body)

    //     })
    // })
    // it('Add Feature Manually', () => {
    //     doAddfeaturemanually(authKey, app_id, categories_id, feature_Id).then((response) => {
    //         categories_id = response.body.id;
    //         feature_Id = response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Add Feature Manually", response.body)

    //     })
    // })
    // it('Put Feature', () => {
    //     title_name = 'MyTitleNamechange' + (Math.random() + 1).toString(36).substring(7);
    //     doPutFeature(authKey, app_id, categories_id, title_name, feature_Id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Put feature response", response.body)
    //     })
    // })
    // it('Patch Feature', () => {
    //     title_name = 'MyTitleNamechange' + (Math.random() + 1).toString(36).substring(7);
    //     doPatchFeature(authKey, app_id, categories_id, title_name, feature_Id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch feature response", response.body)
    //     })
    // })
    // it('Delete Feature', () => {
    //     doDeletefeature(authKey, app_id, feature_Id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Delete feature", response.body)
    //     })

    // })
    // Not Avaiable on UI
    // it('Get PRD AI Features', () => {
    //     doGetPRDAIfeatures(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get PRD AI Features response", response.body)
    //     })
    // })

    //     it('Approve All features', () => {
    //         doApproveAllFeatures(authKey, app_id).then((response) => {
    //             expect(response.status).to.eq(200)
    //             cy.log("Approve All features", response.body)

    //         })
    //     })
    //     it('Create Categories', () => {
    //         doCreateCategories(authKey, app_id).then((response) => {
    //             categories_id = response.body.id;
    //             expect(response.status).to.eq(201)
    //             cy.log("Create Categories", response.body)

    //         })
    //     })
    //     it('Put Categories', () => {
    //         title_name = 'MyTitleName' + (Math.random() + 1).toString(36).substring(7);
    //         doPutCategories(authKey, app_id, categories_id, title_name).then((response) => {
    //             expect(response.status).to.eq(200)
    //             cy.log("Put categories response", response.body)
    //         })
    //     })
    //     it('Get PRD List', () => {
    //         doGetPRDList(authKey, app_id).then((response) => {
    //             expect(response.status).to.eq(200)
    //             cy.log("apps prd list", response.body)

    //         })
    //     })
    //     it('Get PRD Partial Update Status', () => {
    //         doGetprdPartialUpdate(authKey, app_id).then((response) => {
    //             expect(response.status).to.eq(200)
    //             cy.log("PRD Partial Update Status", response.body)

    //         })
    //     })
    //     it('Delete Categories', () => {
    //         doDeleteCategories(authKey, app_id, categories_id).then((response) => {
    //             expect(response.status).to.eq(204)
    //             cy.log("Delete categories", response.body)
    //         })

    //     })

    //*******************Not available on Swagger********************/

    // it('Get Attachments List', () => {
    //     doGetattachmentslist(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get PRD Attachments List", response.body)
    //     })
    // })

    it('Get Open AI Flow @general @super @sales', () => {
        doGetOpenAI(authKey).then((response) => {
            cy.log("Get Open AI response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('get Demo phase Flow @general @super @sales', () => {
        doGetDemoPhase(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Demo phase response", response.body)
        })
    })

    it('get Demo Roles Flow @general @super @sales', () => {
        doGetDemoRoles(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Demo Roles response", response.body)
        })
    })

    it('get Demo Ticket Flow', () => {
        doGetDemoticket(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Demo ticket response", response.body)
        })
    })

    it('Create Code to Spec @general @super @sales', () => {
        doCreateStartcodespec(authKey, app_id).then((response) => {
            codetospec = response.body.id;
            expect(response.status).to.eq(200)
            cy.log("Create code to spec Message Response", response.body)
        })
    })

    it('Get Code to spec using Id @general @super @sales', () => {
        doGetCodetospecById(authKey, app_id, codetospec).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get code to spec using Id Response", response.body)
        })
    })

    it('Put Code to spec using Id @general @super @sales', () => {
        doPutCodetospec(authKey, app_id, codetospec).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put code to spec using Id Response", response.body)
        })
    })

    it('Patch Code to spec using Id @general @super @sales', () => {
        doPatchCodetospec(authKey, app_id, codetospec).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch code to spec using Id Response", response.body)
        })
    })

    it('Delete Code to spec using Id @general @super @sales', () => {
        doDeleteCodetospecById(authKey, app_id, codetospec).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete code to spec using Id Response", response.body)
        })
    })

    it('Create Code to Spec generate dependencies @general @super @sales', () => {
        doCreatecodespecgeneratedependencies(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Code to Spec generate dependencies Message Response", response.body)
        })
    })

    it('get Code Packages Flow @general @super @sales', () => {
        doGetCodepackages(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Demo ticket response", response.body)
        })
    })

    it('Create Code Package intsall @general @super @sales', () => {
        doCreateCodespacpackagesinstall(authKey, app_id, user_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create code to spec Message Response", response.body)
        })
    })

    it('get Code to spec error log', () => {
        doGetCodetospecerrorlog(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code to spec error log response", response.body)
        })
    })

    it('Create Code to spec reset status', () => {
        doCreateCodetospecresetstatus(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Code to spec reset status Message Response", response.body)
        })
    })
    it('Update app name Flow @general @super @sales', () => {
        app_name_update(authKey, app_name, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("update app name response", response.body)
        })
    })
    it('Add Library Flow @general @super @sales', () => {
        doAddLibrary(authKey, app_id, libraryToBeAdded).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Add Library response", response.body)
        })
    })

    it('Get Library Flow @general @super @sales', () => {
        doGetLibrary(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Library response", response.body)
        })
    })

    it('Get CodePackage Flow @general @super @sales', () => {
        doGetLibrary(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Library response", response.body)
        })
    })

    it('Add Code Packages Flow', () => {
        doCreateCodePackage(authKey, packageName).then((response) => {
            expect(response.status).to.eq(201)
            codepackageId = response.body.id;
            cy.log("Added Code Packages Flow", response.body)
        })
    })

    it('Get Code Packages Id Flow', () => {
        doGetCodePackageById(authKey, codepackageId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code Packages Using Id response", response.body)
        })
    })

    it('Patch Code Packages Id Flow', () => {
        doPatchCodePackage(authKey, packageName, codepackageId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Code Packages response", response.body)
        })
    })

    it('Put Code Packages Id Flow', () => {
        doPutCodePackage(authKey, packageName, codepackageId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Code Packages", response.body)
        })
    })


    it('Get CodePackage Flow @general @super @sales', () => {
        doGetCodePackage(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get CodePackage response", response.body)
        })
    })
    it('Remove Library Flow @general @super @sales', () => {
        doRemoveLibrary(authKey, app_id, libraryToBeAdded).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Remove Library response", response.body)
        })
    })

    it('Get Rep branch Flow @general @super @sales', () => {
        doGetRepoBranch(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Rep branch response", response.body)
        })
    })

    it('Change code privacy private to public Flow @general @super @sales', () => {
        change_code_privacy_private_to_public(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Change code privacy private to public response", response.body)
        })
    })

    it('Change code privacy public to private Flow @general @super @sales', () => {
        change_code_privacy_public_to_private(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Change code privacy public to private response", response.body)
        })
    })

    it('post deployment', () => {
        dopostdeployment(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Deployment started", response.body)
        })
    })

    it('post cancel deployment', () => {
        dopostcanceldeployment(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Deployment cancelled", response.body)
        })
    })


    it('delete App Flow @general @super @sales', () => {
        delete_app(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("delete app response", response.body)
        })
    })
    it('Studio Page flow', () => {
        getStudioScreen(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("studio landing page", response.body)
        })
    })

    it('Get Studio screen edge', () => {
        doGetStudioScreenEdge(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Studio screen edge", response.body)
        })
    })

    // it('Post create screen on canvas', () => {

    //     cy.fixture('api_createStudio_Screen.json').then((data) => {
    //         const fixture_Screen_Id = data.screens[0].screen_id;
    //         const incrementedId = fixture_Screen_Id.slice(0, -1) + (parseInt(fixture_Screen_Id.slice(-1)) + 1);
    //         screen_id = incrementedId;
    //         doPostCreateStudioScreen(authKey, app_id, screen_id).then((response) => {
    //             expect(response.status).to.eq(201);
    //             cy.log("Create screen on canvas", response.body);
    //         });

    //     })
    // })


    it('Navigate into the studio landing page Flow', () => {

        doGetStudiopage(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Navigate into the studio landing page  response", response.body)
        })
    })

    it('Post CLI Feedback @general @super @sales', () => {
        doPostCLIFeedback(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Post CLI Feedback ", response.body)

        })
    })
    it('Add Milestone', () => {
        doAddMilestone(authKey, app_id, milestone_name).then((response) => {
            milestone_id = response.body.id;
            milestone_name = response.body.title;
            expect(response.status).to.eq(201)
            cy.log("create milestone response", response.body)
        })
    })
    //********************Not Available on Swagger********************** */

    // it('Get Existing Task from template', () => {

    //     doGetExistingTaskTemplate(authKey).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Existing Task from template", response.body)
    //     })
    // })

    it('Get Task SharableStatus Flow', () => {

        doGetTaskSharableStatus(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Task SharableStatus response", response.body)
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
            taskId = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("create milestone response", response.body)
        })
    })

    it('Add Task into Milestone', () => {

        doAddTaskIntoMilestone(authKey, app_id, milestone_id, taskId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Public Task', () => {

        doPublicTask(authKey, app_id, taskId, task_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    // it('Search Task', () => {
    //     cy.reload();
    //     doSearchTask(authKey, app_id, taskId).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("create milestone response", response.body)
    //     })
    // })

    it('View Task', () => {

        doViewTask(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    //     it('Add Task Into Wish List', () => {
    //         doGetAllMilestone(authKey, app_id).then((response) => {
    //             milestone_wishlist_id = response.body[0].id;
    //             expect(response.status).to.eq(200)
    //             cy.log("create milestone response" + response.body)
    //         })
    it('Create Tasks', () => {
        doCreateTask(authKey, app_id, wishlist_task_name, task_hours, task_cost).then((response) => {
            task_wishlist_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("create milestone response", response.body)
        })
    })
    // it('Add wishlist tasks', () => {
    //     doTaskIntoWishlist(authKey, app_id,milestone_wishlist_id,task_wishlist_id).then((response) => {
    //         task_wishlist_id = response.body.id;
    //         expect(response.status).to.eq(200)
    //         cy.log("create milestone response", response.body)
    //     })
    // })


    it('View Wish List Task Info', () => {
        doGetTaskById(authKey, app_id, task_wishlist_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Create Subtask Flow', () => {
        doCreateSubTask(authKey, taskId).then((response) => {
            fe_subtask_id = response.body.subtasks[0].id;
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Create Other Subtask Flow', () => {
        doCreateOtherSubTask(authKey, app_id, taskId, "New Subtask").then((response) => {
            expect(response.status).to.eq(201)
            cy.log("create milestone response", response.body)
        })
    })

    it('Get Subtask Details Flow', () => {
        doGetAllSubTask(authKey, app_id, taskId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })


    // it('Update Task Into Milestone Flow', () => {
    //     doUpdateTaskIntoMilestone(authKey,taskId,"testingworld").then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("create milestone response", response.body)
    //     })
    // })

    it('Update Subtask Flow', () => {
        doUpdateSubTask(authKey, fe_subtask_id, "Front-End Dev tool").then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Add Payment Milestone FLow @sales', () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const due_date = `${year}-${month}-${day}`;
        const title = 'Payment mile' + app_id;
        const amount = 1000.00
        doAddPaymentMilestone(authKey, app_id, due_date, title, amount).then((response) => {
            payment_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add Payment Milestone response", response.body)
        })
    })

    it('Add Payment Milestone FLow @sales', () => {
        const amount = 1000.00
        doEditAmountInPaymentMilestone(authKey, app_id, payment_id, amount).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Add Payment Milestone response", response.body)
        })
    })


    it('Get PaymentMilestone Flow @sales', () => {

        doGetPaymentMilestone(authKey, app_id, payment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PaymentMilestone response", response.body)
        })
    })

    it('Approve Payment Flow', () => {

        doApprovePayment(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Approve Payment response", response.body)
        })
    })

    it('Create Billing Schedule Flow', () => {

        doCreateBillingSchedule(authKey, app_id, "100_percent_upfront").then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Create Billing Schedule response", response.body)
        })
    })

    it('Get Billing Schedule Flow @sales', () => {

        doGetBillingSchedule(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Billing Schedule response", response.body)
        })
    })

    it('Get All Payment Milestone Flow @sales', () => {

        doGetAllPaymentMilestone(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All Payment Milestone response", response.body)
        })
    })

    it('Update Billing Schedule Flow', () => {

        doUpdateBillingSchedule(authKey, app_id, "50_50").then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Billing Schedule response", response.body)
        })
    })

    it('Get Billing Schedule After Update Billing @sales', () => {

        doGetBillingSchedule(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Billing Schedule response", response.body)
        })
    })

    it('Approve Payment After Billing Schedule ', () => {

        doApprovePayment(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Approve Payment response", response.body)
        })
    })


    it('Get All Milestone', () => {

        doGetAllMilestone(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response" + response.body)
        })
    })
    it('Get Job Type Flow', () => {

        doGetJobType(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response" + response.body)
        })
    })

    it('Update Job Type Rate Flow', () => {

        doUpdateJobTypeRate(authKey, app_id, true).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response" + response.body)
        })
    })

    // it('Delete Milestone Flow', () => {

    //     doDeleteMilestone(authKey, app_id, milestone_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("create milestone response" + response.body)
    //     })
    // })

    it('Get All Milestone Flow', () => {
        doGetAllMilestone(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response" + response.body)
        })
    })
    it('Invite Member Flow', () => {
        doInviteMember(authKey, app_id, 'shubham12@crowdbotics.com', selectRole).then((response) => {
            expect(response.status).to.eq(200)
            request_id = response.body.invitation.id;
            member_id = response.body.invitation.member.id;
            cy.log("create tags response", response.body)
        })
    })

    it('Cancel Invite Flow', () => {
        doCancelInvitation(authKey, app_id, request_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create userroles response", response.body)
        })
    })
    it('Get Team Member Flow', () => {
        doGetTeamMember(authKey, app_id).then((response) => {
            member_id = response.body[0].id;
            expect(response.status).to.eq(200)
            cy.log("create userroles response", response.body)
        })
    })

    it('Get Team Member Using Id Flow', () => {
        doGetTeamMemberUsingId(authKey, app_id, member_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create userroles response", response.body)
        })
    })

    // Right now we are facing timeout issue on swagger
    // it('Change Team Member Job Title', () => {
    //     doUpdateMemberjobTitle(authKey, app_id, member_id,app_name).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("change team member job title", response.body)
    //     })
    // })

    it('get all member list', () => {
        doGetAllMemberList(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("get all member list", response.body)
        })
    })
})

