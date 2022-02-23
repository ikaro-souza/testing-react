describe('Visual regression of data tables', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/')
    cy.get('#signin_button').click()
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('#user_remember_me').click()
    cy.get('input[type=submit]').click()
  })

  it('should load data tables', () => {
    cy.get('#account_activity_tab').click()
  })

  it('snapshot data table', () => {
    cy.matchImageSnapshot()
  })
})
