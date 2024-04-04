/// <reference types = "cypress"/>
export const moduleInstall = (auth_key, app_id) => {
    return cy.fixture('api_add_module.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addmodules1') + app_id + Cypress.env('addmodules2'),
            body: myFixture,
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })}
    
    export const doGetapiPreinstallmodule = (auth_key,app_id,module_id) => {

       return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getpreinstallmodule2') + app_id + Cypress.env('getpreinstallmodule1')+module_id,
        headers: {
            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
    }

export const doGetmodulelist = (auth_key,app_id,module_id) => {

    return cy.request({
     method: 'GET',
     url: Cypress.env('baseUrl') + Cypress.env('getmoduleslist1') + app_id + Cypress.env('getmoduleslist2')+module_id,
     headers: {
         // 'Content-Type': 'application/json',
         // 'Accept': 'application/json',
         'Authorization': 'Token ' + auth_key,
     }
 }).then((response) => {
     return response;
 })
}
export const doCreateModules = (auth_key, app_id) => {
    return cy.fixture('api_post_Modules_Create.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postCreatemodules1') + app_id + Cypress.env('postCreatemodules2'),
            body: myFixture,
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })}