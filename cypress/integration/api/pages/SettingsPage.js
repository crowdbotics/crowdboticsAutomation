import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

export const app_name_update = (auth_key, app_name, app_id) => {

    cy.readFile('cypress/fixtures/api_appNameUpdate.json').then((data) => {
        data.custom_name = app_name + "1"
        cy.writeFile('cypress/fixtures/api_appNameUpdate.json', JSON.stringify(data))
    })
    return cy.fixture('api_appNameUpdate.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateAppName') + app_id + "/",
            body: myFixture,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })

}

export const change_code_privacy_private_to_public = (auth_key, app_id) => {
    return cy.fixture('api_change_code_pvt_to_pub.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('codePrivacyPrivateToPublic1') + app_id + Cypress.env('codePrivacyPrivateToPublic2'),
            body: myFixture,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })

}
export const doGetCodePackage = (auth_key, app_id) => {
   
      return  cy.request({
            method: 'GET',
            url: Cypress.env('baseUrl') + Cypress.env('getCodePackage1') + app_id + Cypress.env('getCodePackage2'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    

}
export const change_code_privacy_public_to_private = (auth_key, app_id) => {
    return cy.fixture('api_change_code_pub_to_pvt.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('codePrivacyPublicToPrivate1') + app_id + Cypress.env('codePrivacyPublicToPrivate2'),
            body: myFixture,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })

}

export const delete_app = (auth_key, app_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteApp') + app_id + '/',

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })


}

export const doAddLibrary = (auth_key, app_id, library_id) => {

    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('addLibrary1') + app_id + Cypress.env('addLibrary2') + library_id + Cypress.env('addLibrary3'),

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })


}

export const doGetLibrary = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getLibrary1') + app_id + Cypress.env('getLibrary2'),

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
}

export const doRemoveLibrary = (auth_key, app_id, library_id) => {

    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('removeLibrary1') + app_id + Cypress.env('removeLibrary2') + library_id + Cypress.env('removeLibrary3'),

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
}

// export const doAddGcpPlatform = (auth_key, app_id) => {
//     return cy.fixture('api_addGcpPlatform.json').then((myFixture) => {
//         cy.request({
//             method: 'POST',
//             url: Cypress.env('baseUrl') + Cypress.env('addGcpPlatform1') + app_id + Cypress.env('addGcpPlatform2'),
//             body: myFixture,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//                 'Authorization': 'Token ' + auth_key,
//             }
//         }).then((response) => {
//             return response;
//         })
//     })

// }
export const doGetRepoBranch = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getRepoBranch1') + app_id + Cypress.env('getRepoBranch2'),

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
}