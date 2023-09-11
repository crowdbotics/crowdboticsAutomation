class LoginPage
{
  getAllowButton()
  {
    return cy.get('#hs-eu-confirmation-button');
  }  
  getuserName()
  {
    return cy.get('#__BVID__24');
  }
  getPassword()
  {
    return cy.get('.form-control#__BVID__25');
  }
  getSimpleLogin()
  {
    return cy.get('.btn.big-round-button-common.login-button');
  }
  getValidationMessage()
  {
    return cy.get('div.beforelogin-row.mt-3.text-left.container-fluid.px-0>div');
  }
  getGoogleLogin()
  {
    return cy.get('.btn.big-round-button-common.mt-3.github-button.btn-secondary.btn-outline');
  }
  getGitLogin()
  {
    return cy.get('.btn.big-round-button-common.mt-2.github-button.btn-secondary.btn-outline')
  }
}

export default LoginPage;