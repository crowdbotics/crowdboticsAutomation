/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doLogin } from '../pages/loginPage.js';
import { doCancelInvitation, doInviteMember, doGetTeamMember, doGetTeamMemberUsingId } from '../pages/TeamMemberPageAdmin.js';

let member_id;
let request_id;
let app_id;
let app_name;
let authKey;
describe("Team Member Admin Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Invite Member Flow', () => {
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                const roles = ["Member", "Sales", "Collaborator", "Admin", "Finance"];
                const selectRole = roles[Math.floor(Math.random() * roles.length)];
                doInviteMember(authKey, app_id, 'shubham12@crowdbotics.com', selectRole).then((response) => {
                    expect(response.status).to.eq(200)
                    request_id = response.body.invitation.id;
                    member_id = response.body.invitation.member.id;
                    cy.log("create tags response", response.body)
                })
            })
        })
    })

    it('Cancel Invite Flow', () => {
        doCancelInvitation(authKey, app_id, request_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create userroles response", response.body)
        })
    })
    it('Get Team Member Flow', () => {
        doGetTeamMember(authKey, app_id).then((response) => {
            member_id = response.body[0].id;
            expect(response.status).to.eq(200)
            cy.log("create userroles response", response.body)
        })
    })

    it('Get Team Member Using Id Flow', () => {
        doGetTeamMemberUsingId(authKey, app_id, member_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create userroles response", response.body)
        })
    })
})