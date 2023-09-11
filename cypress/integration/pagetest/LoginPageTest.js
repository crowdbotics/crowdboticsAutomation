//import { functions } from "cypress/types/lodash";
import { describe } from "mocha";
import LoginPage from "../pageobject/LoginPage";
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
it("Varify the login username validation message",function()
{
const login=new LoginPage()
login.getAllowButton().click()
//cy.enterText(login.getuserName(),Cypress.env('username'))
//login.getuserName().type(Cypress.env('username'))
login.getPassword().type(Cypress.env('password'))
login.getSimpleLogin().click()
//cy.wait(login.getValidationMessage().text) 
//login.getValidationMessage().should('have.value', 'The email field is required')
//expect(login.getValidationMessage().text).to.match('required')
cy.get('.beforelogin-row.mt-3 > .validation-error').contains('The email field is required')
})

it("Varify the login password validation message",function()
{
const login=new LoginPage()
login.getAllowButton().click()
login.getuserName().type("anish")
//login.getPassword().type("")
login.getSimpleLogin().click()
//cy.wait(login.getValidationMessage().text) 
//login.getValidationMessage().should('have.value', 'The email field is required')
//expect(login.getValidationMessage().text).to.match('required')
cy.get('.beforelogin-row.mt-0 > .validation-error').contains('The password field is required')
})

it("Varify the google login is working or not",function()
{
const login=new LoginPage()
login.getAllowButton().click()
cy.clickOnElement(login.getGoogleLogin())
cy.title().should('eq', cy.title())
// cy.title().contains('Sign in - Google Accounts')
})

})