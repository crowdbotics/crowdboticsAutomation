/// <reference types = "cypress"/>

export const prd_overview_tags = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_createPRDTags.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createPRDTags.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDTags.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createTags') + app_id,
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
            url: Cypress.env('baseUrl') + Cypress.env('createUserRoles') + app_id,
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
export const prd_create_group = (auth_key, app_id, group_name) => {

    cy.readFile('cypress/fixtures/api_createPRDGroup.json').then((data) => {
        data.app = app_id
        data.name = group_name
        cy.writeFile('cypress/fixtures/api_createPRDGroup.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDGroup.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createprdGroup') + app_id,
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
export const prd_get_group = (auth_key, app_id) => {


    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getprdGroup') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const prd_delete_group = (auth_key, app_id) => {


    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('deleteprdGroup') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const prd_create_item = (auth_key, app_id, group_id, item_name) => {

    cy.readFile('cypress/fixtures/api_createPRDItem.json').then((data) => {
        data.name = item_name
        data.group = group_id
        cy.writeFile('cypress/fixtures/api_createPRDItem.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDItem.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createprdItem') + app_id,
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

export const prd_get_Item = (auth_key, group_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getprdItem') + group_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const prd_delete_item = (auth_key, app_id,group_id,item_id) => {

    cy.readFile('cypress/fixtures/api_deleteprdItem.json').then((data) => {
        data.group_ids = [group_id];
        data.item_ids = [item_id];
        cy.writeFile('cypress/fixtures/api_deleteprdItem.json', JSON.stringify(data))
    })
    return cy.fixture('api_deleteprdItem.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('deleteprdItem') + app_id,
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

