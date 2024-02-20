///<reference types="cypress" />

export const getStudioScreen = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getStudioScreen1') + app_id + Cypress.env('getStudioScreen2'),
        headers: {

            'Authorization': 'Token ' + auth_key, app_id
        }

    }).then((response) => {
        return response;
    })
};
export const doGetStudioScreenEdge = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getStudioScreenEdge1') + app_id + Cypress.env('getStudioScreenEdge2'),
        headers: {
            'Authorization': 'Token ' + auth_key, app_id
        }
    }).then((response) => {
        return response;
    })
};