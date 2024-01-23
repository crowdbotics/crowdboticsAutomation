/// <reference types = "cypress"/>

export const doAddDataModel = (auth_key, app_id) => {
    return cy.fixture('api_datamodel.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addDataModel1') + app_id + Cypress.env('addDataModel2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetDataModel = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getDataModel1') + app_id + Cypress.env('getDataModel2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};