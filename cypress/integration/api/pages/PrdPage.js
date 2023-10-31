/// <reference types = "cypress"/>

export const prd_overview_tags = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_createPRDTags.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createPRDTags.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDTags.json').then((myFixture) => {
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

    cy.readFile('cypress/fixtures/api_createPRDUserRoles.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createPRDUserRoles.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDUserRoles.json').then((myFixture) => {
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

    cy.readFile('cypress/fixtures/api_createPRDAi.json').then((data) => {
        data.app_name = app_name1
        cy.writeFile('cypress/fixtures/api_createPRDAi.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDAi.json').then((myFixture) => {
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

    cy.readFile('cypress/fixtures/api_createPRDCatalogTemplates.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createPRDCatalogTemplates.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDCatalogTemplates.json').then((myFixture) => {
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

    cy.readFile('cypress/fixtures/api_createPRDFeature.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createPRDFeature.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDFeature.json').then((myFixture) => {
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