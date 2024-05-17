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
     url: Cypress.env('baseUrl') + Cypress.env('getmoduleslist1') + app_id + Cypress.env('getmoduleslist2'),
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
    })
}

export const doGetReadModules = (auth_key,app_id, module_id) => {

    return cy.request({
     method: 'GET',
     url: Cypress.env('baseUrl') + Cypress.env('getreadmodules1') + app_id + Cypress.env('getreadmodules2')+module_id + Cypress.env('getreadmodules3'),
     headers: {
         // 'Content-Type': 'application/json',
         // 'Accept': 'application/json',
         'Authorization': 'Token ' + auth_key,
     }
 }).then((response) => {
     return response;
 })
}

export const doUpdateModules = (auth_key, app_id, module_id) => {

    return cy.fixture('api_updatemodules.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('Putmodules1') + app_id + Cypress.env('Putmodules2') + module_id + Cypress.env('Putmodules3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doPatchModules = (auth_key, app_id, module_id) => {

    return cy.fixture('api_patchmodules.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchmodules1') + app_id + Cypress.env('patchmodules2') + module_id + Cypress.env('patchmodules3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
 
}
export const doInstalleModules = (auth_key, app_id, module_id) => {
    return cy.fixture('api_post_Installmodules.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postInstallmodules1') + app_id + Cypress.env('postInstallmodules2') + module_id + Cypress.env('postInstallmodules3'),
            body: myFixture,
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};