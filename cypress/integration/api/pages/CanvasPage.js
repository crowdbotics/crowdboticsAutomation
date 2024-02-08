export const doCreateStudioAIScreen = (auth_key, app_id) => {
    cy.readFile('cypress/fixtures/api_createStudioAIScreen.json').then((data) => {
        data.project=app_id;
        cy.writeFile('cypress/fixtures/api_createStudioAIScreen.json', JSON.stringify(data));
    });
    return cy.fixture('api_createStudioAIScreen.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createStudioAIScreen1')+app_id+Cypress.env('createStudioAIScreen2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};