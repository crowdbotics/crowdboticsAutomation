import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

export const app_name_update = (auth_key, app_name,app_id) => {

    cy.readFile('cypress/fixtures/api_appNameUpdate.json').then((data) => {
        data.custom_name = app_name+"1"
        cy.writeFile('cypress/fixtures/api_appNameUpdate.json', JSON.stringify(data))
    })
    return cy.fixture('api_appNameUpdate.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateAppName')+app_id+"/",
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

export const change_code_privacy_private_to_public = (auth_key,app_id) => {
    return cy.fixture('api_change_code_pvt_to_pub.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('codePrivacyPrivateToPublic1')+app_id + Cypress.env('codePrivacyPrivateToPublic2'),
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
export const change_code_privacy_public_to_private = (auth_key,app_id) => {
    return cy.fixture('api_change_code_pub_to_pvt.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('codePrivacyPublicToPrivate1')+app_id + Cypress.env('codePrivacyPublicToPrivate2'),
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

export const delete_app = (auth_key,app_id) => {
    
        return cy.request({
            method: 'DELETE',
            url: Cypress.env('baseUrl') + Cypress.env('deleteApp')+app_id +'/',
          
          headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    

}