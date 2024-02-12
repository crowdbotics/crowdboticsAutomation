/// <reference types = "cypress"/>


export const doInviteMember = (auth_key, app_id, invite_member_email, role) => {
    cy.readFile('cypress/fixtures/api_inviteMember.json').then((data) => {
        data.email = invite_member_email
        data.role = role
        cy.writeFile('cypress/fixtures/api_inviteMember.json', JSON.stringify(data));
    });
    return cy.fixture('api_inviteMember.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('inviteTeamMember1') + app_id + Cypress.env('inviteTeamMember2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetTeamMember = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMember1') + app_id + Cypress.env('getMember2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doGetTeamMemberUsingId = (auth_key, app_id, member_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMemberUsingId1') + app_id + Cypress.env('getMemberUsingId2') + member_id + "/",
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doCancelInvitation = (auth_key, app_id, request_id) => {

    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('cancelPendingInvitation1') + app_id + Cypress.env('cancelPendingInvitation2') + request_id + Cypress.env('cancelPendingInvitation3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },

    }).then((response) => {
        return response;
    })

};
