/// <reference types = "cypress"/>

export const doCreateDocument = (auth_key,app_id) => {
    return cy.fixture('api_create_document.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createDocument1')+app_id+Cypress.env('createDocument2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doGetDocumentById = (auth_key,app_id,document_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getDocumentById1')+app_id+Cypress.env('getDocumentById2')+document_id+Cypress.env('getDocumentById3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}
export const doPutDocumentById = (auth_key,app_id,document_id) => {
    return cy.fixture('api_putDocument.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putDocumentById1')+app_id+Cypress.env('putDocumentById2')+document_id+Cypress.env('putDocumentById3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doPatchDocumentById = (auth_key,app_id,document_id) => {
    return cy.fixture('api_patchDocument.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchDocumentById1')+app_id+Cypress.env('patchDocumentById2')+document_id+Cypress.env('patchDocumentById3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doDeleteDocumentById = (auth_key,app_id,document_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteDocumentById1')+app_id+Cypress.env('deleteDocumentById2')+document_id+Cypress.env('deleteDocumentById3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}