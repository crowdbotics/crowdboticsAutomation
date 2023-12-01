/// <reference types = "cypress"/>

export const doCteareApp = (auth_key, app_name) => {
    // ******************* CREATE AN APP ******************** //
    cy.readFile('cypress/fixtures/api_createApp.json').then((data) => {
        data.custom_name = app_name
        cy.writeFile('cypress/fixtures/api_createApp.json', JSON.stringify(data))
    })
    return cy.fixture('api_createApp.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createApp'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const searchApp = (auth_key, app_name) => {
    // ******************* SEARCH AN APP ******************** //
       return cy.request({
            method: 'GET',
            url: Cypress.env('baseUrl') + Cypress.env('searchApp1')+app_name+ Cypress.env('searchApp2'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
        }).then((response) => {
            return response;
        })
};


