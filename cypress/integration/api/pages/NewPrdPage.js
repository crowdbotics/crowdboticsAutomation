/// <reference types = "cypress"/>

//-------PRD category-----
export const doGetPRDPKCategory = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPRDPKCategory1') + app_id + Cypress.env('getPRDPKCategory2'),
        headers: {

            'Authorization': 'Token ' + auth_key, app_id
        }

    }).then((response) => {
        return response;
    })
};
    export const doPostPRDPKCategory = (auth_key, app_id, phase_id) => {

        cy.readFile('cypress/fixtures/api_newprdpk_category.json').then((data) => {
            data.phase_id = phase_id
            cy.writeFile('cypress/fixtures/api_newprdpk_category.json', JSON.stringify(data))
        })
        return cy.fixture('api_createPRDTags.json').then((myFixture) => {
            cy.request({
                method: 'POST',
                url: Cypress.env('baseUrl') + Cypress.env('postPRDPKCategory1') + app_id + ('postPRDPKCategory2'),
                body: myFixture,
                headers: {
                    'Authorization': 'Token ' + auth_key, app_id
                }
    
            }).then((response) => {
                return response;
            })

        })
};
