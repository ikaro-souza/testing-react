describe('Forgot password tests', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/login.html')
  })

  it("should go to forgotten password page after click 'Forgot your password?'", () => {
    cy.contains('Forgot your password ?').click()

    cy.get('#send_password_form').should('be.visible')
  })

  it('should submit the form', () => {
    const email = 'user@email.com'

    cy.get('#user_email').type(`${email}`).should('have.value', email)
    cy.get('input[type=submit]').click()

    cy.url().should('include', 'forgotten-password')
    cy.get('h3').should('have.text', 'Forgotten Password')
    cy.contains(email).should('be.visible')
  })
})
