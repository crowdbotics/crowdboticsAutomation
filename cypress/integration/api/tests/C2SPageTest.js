
import { doCreateAppWithRepoC2S } from '../pages/C2SPage.js';
import { doC2SLogin } from '../pages/loginPage.js';

let app_id;
let authKey;
let app_name;
describe("C2S Flow ", () => {


    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Create App Flow', () => {
        doC2SLogin().then((response) => {
            authKey = response.body.key;
            doCreateAppWithRepoC2S(authKey, app_name).then((response) => {
                app_id = response.body.id;
                cy.log("App creation response", response.body)
                expect(response.status).to.eq(200)
            })
        })
    })
})
