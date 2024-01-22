/// <reference types = "cypress"/>

export const doAddJobRequest = (auth_key, app_id) => {
    return cy.fixture('api_addJobRequest.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            body: myFixture,
            url: Cypress.env('baseUrl') + Cypress.env('addJobRequest1') + app_id + Cypress.env('addJobRequest2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
        }).then((response) => {
            return response;
        })
    })
};

export const doGetJobRequest = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getJobRequest1') + app_id + Cypress.env('getJobRequest2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })

};

export const doGetJobRequestUsingId = (auth_key, app_id, job_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getJobRequestUsingId1') + app_id + Cypress.env('getJobRequestUsingId2') + job_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })

};

export const doEditJobRequest = (auth_key, app_id, job_id, project_description) => {

    cy.readFile('cypress/fixtures/api_addJobRequest.json').then((data) => {
        data.project_description = project_description;
        cy.writeFile('cypress/fixtures/api_addJobRequest.json', JSON.stringify(data));
    });
    return cy.fixture('api_addJobRequest.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('editJobRequest1') + app_id + Cypress.env('editJobRequest2') + job_id,
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const doDeleteJobRequest = (auth_key, app_id, job_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteJobRequest1') + app_id + Cypress.env('deleteJobRequest2') + job_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })

};