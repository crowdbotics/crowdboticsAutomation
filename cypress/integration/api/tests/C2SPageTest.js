
import { dogetC2SRequirementscategories,dogetC2SRequirementscategoriesById,dogetC2SRequirementscategoriesByIdFeature,dogetC2SRequirementFeature,dogetC2SRequirementFeatureById,getC2SRequirementFeatureByIdCode,dogetC2SRequirementRoles,doGetC2SCodeList,doGetC2SCodeEntryPoint,doGetC2SCodeFilePathStatus,doGetC2SCodeFile,doGetC2SBusinessLogic,doGetC2SArchitectureDomainModel,doGetC2SArchitectureExternalDependencies,dogetC2SArchitectureFrameworks,dogetC2SArchitectureInfrastructures,dogetC2SArchitectureLanguages,doGetC2SArchitectureDatabases,doGetC2SArchitectureCodeGraph,doGetC2SArchitectureC4,dogetC2SArchitectureActor,doCreateC2S,doCreateAppWithRepoC2S,doCreateCodetospegenerate,doGetC2SErrorLog,doGetC2SSummaryDetails,dogetDownloadErrorLogFile,dogetDownloadPRDMetaData,dogetErroLogDetails } from '../pages/C2SPage.js';
import { doC2SLogin } from '../pages/loginPage.js';

let appId;
let catId;
let authKey;
let app_name;
let c2sId;
let featureId;
let newAuthKey = "cb-e344367ce8b7b3e9802d943f302b4d8714d3d748fba26a1275dac1d1da406a54";
let newAppId;
describe("C2S Flow ", () => {


    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Create App Flow', () => {
        doC2SLogin().then((response) => {
            authKey = response.body.key;
            doCreateAppWithRepoC2S(authKey, app_name).then((response) => {
                appId = response.body.app_id;
                cy.log("App creation response", response.body)
                expect(response.status).to.eq(200)
            })
        })
    })
    it('Create PRD using repo (C2S)', () => {
        doCreateCodetospegenerate(authKey,  appId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create PRD using repo (C2S) Response", response.body)
        })
     })
     it('Get C2S Error Log ', () => {
        doGetC2SErrorLog(authKey,  appId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get C2S Error Log Response", response.body)
        })
     })

     it('Get C2S Summary Deatils ', () => {
        doGetC2SSummaryDetails(authKey,  appId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get C2S Summary Deatils Response", response.body)
        })
     })

     it('Get Download C2S Error Log File', () => {
        dogetDownloadErrorLogFile(authKey,  appId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Download C2S Error Log File Response", response.body)
        })
     })

    //  it('Get Download C2S PRD Metadata File', () => {
    //     dogetDownloadPRDMetaData(authKey,  appId).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Download C2S PRD Metadata File Response", response.body)
    //     })
    //  })
     it('Get Erro Log Details', () => {
        dogetErroLogDetails(authKey,  appId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Erro Log Details Response", response.body)
        })
     })
  
     it('Create C2S', () => {
        newAppId=158973;
        doCreateC2S(newAuthKey,  newAppId).then((response) => {
            expect(response.status).to.eq(201);
            c2sId = response.body.id;
            //c2sId = 3657; // Assuming the ID is 1 for testing purposes
            cy.log("Create C2S  Response", response.body)
        })
     })

     it('Get C2S Architecture Actor', () => {
        dogetC2SArchitectureActor(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Architecture Actor Response", response.body)
        })
     })
     
      it('Get C2S Architecture C4', () => {
        doGetC2SArchitectureC4 (newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Architecture C4 Response", response.body)
        })
     })
     
     it('Get C2S Architecture Code Graph', () => {
        doGetC2SArchitectureCodeGraph(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Architecture Code Graph Response", response.body)
        })
     })
     
     it('Get C2S Architecture Databases', () => {
        doGetC2SArchitectureDatabases(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Architecture Databases Response", response.body)
        })
     })
      it('Get C2S Architecture Domain Model', () => {
        doGetC2SArchitectureDomainModel(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Architecture Domain Model Response", response.body)
        })
     })

      it('Get C2S Architecture External Dependencies', () => {
        doGetC2SArchitectureExternalDependencies(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Architecture External Dependencies Response", response.body)
        })
     })
      it('Get C2S Architecture Frameworks', () => {
        dogetC2SArchitectureFrameworks(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Architecture Frameworks Response", response.body)
        })
     })
     it('Get C2S Architecture Infrastructures', () => {
        dogetC2SArchitectureInfrastructures(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Architecture Infrastructures Response", response.body)
        })
     })

      it('Get C2S Architecture Language', () => {
        dogetC2SArchitectureLanguages(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Architecture Language Response", response.body)
        })
     })
    
     it('Get C2S Code List', () => {
        doGetC2SCodeList(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Code List Response", response.body)
        })
     })
     it('Get C2S Code Entry Point', () => {
        doGetC2SCodeEntryPoint(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Code Entry Point Response", response.body)
        })
     })
     it('Get C2S Code File Path Status', () => {
        doGetC2SCodeFilePathStatus(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Code File Path Status Response", response.body)
        })
     })
     it('Get C2S Code File', () => {
        doGetC2SCodeFile(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Code File Response", response.body)
        })
     })
     it('Get C2S Business Logic', () => {
        doGetC2SBusinessLogic(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Business Logic Response", response.body)
        })
     })
     //-----------------------
     it('Get C2S Requirements Categories', () => {
        dogetC2SRequirementscategories(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            catId = response.body.id;
            cy.log("Get C2S Requirements Categories Response", response.body)
        })
     })
     it('Get C2S Requirements Categories By Id', () => {
        dogetC2SRequirementscategoriesById(newAuthKey,c2sId,catId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Requirements Categories By Id Response", response.body)
        })
     })
     it('Get C2S Requirements Categories By Id Feature', () => {
        dogetC2SRequirementscategoriesByIdFeature(newAuthKey,c2sId,catId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Requirements Categories By Id Feature Response", response.body)
        })
     })

      it('Get C2S Requirement Feature', () => {
        dogetC2SRequirementFeature(newAuthKey,  c2sId).then((response) => {
             featureId = response.body.id;
            expect(response.status).to.eq(200);
            cy.log("Get C2S Requirement Feature Response", response.body)
        })
     })

     it('Get C2S Requirement Feature By Id', () => {
        dogetC2SRequirementFeatureById(newAuthKey,c2sId,featureId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Requirement Feature Response", response.body)
        })
     })

     it('Get C2S Requirement Feature By Id Code', () => {
        getC2SRequirementFeatureByIdCode(newAuthKey,c2sId,featureId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Requirement Feature By Id Code Response", response.body)
        })
     })

      it('Get C2S Requirement Roles', () => {
        dogetC2SRequirementRoles(newAuthKey,  c2sId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Get C2S Requirement Roles Response", response.body)
        })
     })
})
