/// <reference types = "cypress"/>

export const doCreateAppWithRepoC2S = (auth_key, app_name) => {
    // ******************* CREATE AN APP WITH REPO (C2S) ******************** //
    cy.readFile('cypress/fixtures/api_create_app_with_repo_c2s.json').then((data) => {
        data.custom_name = app_name;
        cy.writeFile('cypress/fixtures/api_create_app_with_repo_c2s.json', JSON.stringify(data))
    })
    return cy.fixture('api_create_app_with_repo_c2s.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createAppWithRepoC2S'),
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