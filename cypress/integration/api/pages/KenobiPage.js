/// <reference types = "cypress"/>

export const doCreateKenobiC2SUsingPrivateRepo = (auth_key) => {
    return cy.fixture('api_Create_Kenobi_C2S_Private_Repo.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S'),
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

export const doGetKenobiC2SUsingPrivateRepoById = (auth_key, kenobi_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doPutKenobiC2SUsingPrivateRepo = (auth_key, kenobi_id) => {
    return cy.fixture('api_Put_Kenobi_C2S_Private_Repo.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
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

export const doPatchKenobiC2SUsingPrivateRepo = (auth_key, kenobi_id) => {
    return cy.fixture('api_Patch_Kenobi_C2S_Private_Repo.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
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

export const doDeleteKenobiC2SUsingPrivateRepoById = (auth_key, kenobi_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('CreateKenobiC2S') + kenobi_id + Cypress.env('CreateKenobiC2S1'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};



