/// <reference types = "cypress"/>

export const doCteareApp = (auth_key, app_name) => {
    // ******************* CREATE AN APP ******************** //
    cy.readFile('cypress/fixtures/createApp.json').then((data) => {
        data.custom_name = app_name
        cy.writeFile('cypress/fixtures/createApp.json', JSON.stringify(data))
    })
    return cy.fixture('createApp.json').then((myFixture) => {
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



