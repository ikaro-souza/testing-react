describe('Signin test', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/')
  })

  it('should go to signin page after clicking on signin button', () => {
    cy.get('#signin_button').click()

    cy.url().should('include', 'login')
    cy.get('#login_form').should('be.visible')
  })

  it('should show error when submitting the signin form empty', () => {
    cy.get('input[type=submit]').click()

    cy.get('.alert-error')
      .should('be.visible')
      .and('contain.text', 'Login and/or password are wrong.')
  })

  it('should show error when submitting the signin form with wrong data', () => {
    cy.get('#user_login').type('invalid_logn')
    cy.get('#user_password').type('invalid_password')
    cy.get('input[type=submit]').click()

    cy.get('.alert-error')
      .should('be.visible')
      .and('contain.text', 'Login and/or password are wrong.')
  })

  it('should login when submitting form with correct data', () => {
    cy.fixture('user.json').then(user => {
      cy.get('#user_login').type(user.name)
      cy.get('#user_password').type(user.password)
      cy.get('input[type=submit]').click()

      cy.get('a.dropdown-toggle').should('contain.text', user.name)
    })
  })

  it('should show accounts of legged in user', () => {
    cy.get('ul.nav.nav-tabs li')
      .should('have.length', 6)
      .and('contain', 'Account Summary')
      .and('contain', 'Account Activity')
      .and('contain', 'Transfer Funds')
      .and('contain', 'Pay Bills')
      .and('contain', 'My Money Map')
      .and('contain', 'Online Statements')

    cy.contains('username').should('be.visible')
    cy.contains('Cash Accounts').should('be.visible')
    cy.contains('Investment Accounts').should('be.visible')
    cy.contains('Credit Accounts').should('be.visible')
    cy.contains('Loan Accounts').should('be.visible')
    cy.get('.board').should('be.visible').and('have.length', 4)
  })

  it('should open dropdown menu when clicking user navbar item', () => {
    cy.contains('username').click()
    cy.contains('Logout').should('be.visible')
  })

  it('should logout when clicking logout menu item', () => {
    cy.contains('Logout').click()
    cy.url().should('eq', 'http://zero.webappsecurity.com/index.html')
    cy.get('#signin_button').should('be.visible')
  })
})
