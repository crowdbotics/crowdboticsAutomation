/// <reference types = "cypress"/>

export const prd_overview_tags = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/createTags.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/createTags.json', JSON.stringify(data))
    })
    return cy.fixture('createTags.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createTags')+app_id,
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

    cy.readFile('cypress/fixtures/createUserRoles.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/createUserRoles.json', JSON.stringify(data))
    })
    return cy.fixture('createUserRoles.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createUserRoles')+app_id,
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




