/// <reference types = "cypress"/>

export const prd_overview_tags = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_createTags.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createTags.json', JSON.stringify(data))
    })
    return cy.fixture('api_createTags.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createTags')+app_id,
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


export const prd_overview_userRoles = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_createUserRoles.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createUserRoles.json', JSON.stringify(data))
    })
    return cy.fixture('api_createUserRoles.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createUserRoles')+app_id,
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

export const prd_AI = (auth_key, app_id,app_name1) => {

    cy.readFile('cypress/fixtures/api_createprdAi.json').then((data) => {
        data.app_name = app_name1
        cy.writeFile('cypress/fixtures/api_createprdAi.json', JSON.stringify(data))
    })
    return cy.fixture('api_createprdAi.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createprdai1')+app_id+Cypress.env('createprdai2'),
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
};

export const prd_catalog_templates = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_catalogTemplates.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_catalogTemplates.json', JSON.stringify(data))
    })
    return cy.fixture('api_catalogTemplates.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createcatalogtemplates')+app_id,
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

export const prd_add_features = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_createprdFeature.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createprdFeature.json', JSON.stringify(data))
    })
    return cy.fixture('api_createprdFeature.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createprdfeature')+app_id,
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