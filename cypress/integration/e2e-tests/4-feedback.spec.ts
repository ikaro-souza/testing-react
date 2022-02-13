describe('Feedback form tests', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/')
  })

  it('should go to feedback page after click feedback link', () => {
    cy.get('#feedback').click()

    cy.url().should('eq', 'http://zero.webappsecurity.com/feedback.html')
    cy.get('#feedback-title').should('be.visible')
    cy.get('form').should('be.visible')
  })

  it('should fill the feedback form', () => {
    cy.fixture('feedback_form.json').then(data => {
      cy.get('#name').type(data.name).should('have.value', data.name)
      cy.get('#email').type(data.email).should('have.value', data.email)
      cy.get('#subject').type(data.subject).should('have.value', data.subject)
      cy.get('#comment').type(data.comment).should('have.value', data.comment)
    })
  })

  it('should submit the feedback form', () => {
    cy.fixture('feedback_form.json').then(data => {
      cy.get('input[type=submit]').click()
      cy.get('#feedback-title').should('have.text', 'Feedback')
      cy.contains(`Thank you for your comments, ${data.name}`)
    })
  })
})
