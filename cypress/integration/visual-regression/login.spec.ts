describe('Visual regression of login page', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/')
    cy.get('#signin_button').click()

    cy.get('#user_login').type('test')
    cy.get('#user_password').type('test')
    cy.get('#user_remember_me').click()
  })

  it('Matches desktop layout', () => {
    cy.setResolution([1280, 720])
    cy.matchImageSnapshot()
  })

  it('Matches tablet layout', () => {
    cy.setResolution('ipad-2')
    cy.matchImageSnapshot()
  })

  it('Matches mobile layout', () => {
    cy.setResolution('iphone-6')
    cy.matchImageSnapshot()
  })
})
