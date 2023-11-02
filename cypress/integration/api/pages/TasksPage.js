/// <reference types = "cypress"/>


export const doCteareMilestone = (auth_key, app_id) => {

    return cy.fixture('api_createMilestone.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + '/api/v1/apps/' + app_id + '/payment-proposals/',
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};


