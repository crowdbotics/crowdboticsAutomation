//import { functions } from "cypress/types/lodash";
import { describe } from "mocha";
import { authenticator } from 'otplib';
import LoginPage from "../pageobject/LoginPage";
import Authenticator from "../pageobject/AuthenticatorPage";
/// <reference types = "cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Hooks',function()
{
    beforeEach(function()
    {
        
        cy.visit(Cypress.env('url')+"/dashboard/")
        cy.reload
    

//       cy.fixture('logincredentials'.then(function(data)
//       {
// this.data=data       
//       }))
    })
it("Varify the login functionality with valid userid and valid password and valid authcode",function()
{
const login=new LoginPage();
const auth=new Authenticator();
cy.clickOnElement(login.getAllowButton());
cy.enterText(login.getuserName(),Cypress.env('username'));
cy.enterText(login.getPassword(),Cypress.env('password'));
cy.clickOnElement(login.getSimpleLogin());
const token = authenticator.generate(Cypress.env('authenticationToken'));
cy.clickOnElement(auth.getAuthenticationField());
cy.enterText(auth.getAuthenticatorCode(),token)
cy.wait(50000)
cy.get(cy.title).contains('Crowdbotics | Dashboard');
})
})