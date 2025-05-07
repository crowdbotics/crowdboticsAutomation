
import { doCreateAppWithRepoC2S,doCreateCodetospegenerate,doGetC2SErrorLog,doGetC2SSummaryDetails,dogetDownloadErrorLogFile,dogetDownloadPRDMetaData,dogetErroLogDetails } from '../pages/C2SPage.js';
import { doC2SLogin } from '../pages/loginPage.js';

let  appId;
let authKey;
let app_name;
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
     
})
