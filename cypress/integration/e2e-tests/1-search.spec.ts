describe('Searchbox test', () => {
  const search = 'money laudring'

  before(() => {
    cy.visit('http://zero.webappsecurity.com/')
  })

  it('should type into searchbox and submit when pressing enter', () => {
    cy.get('#searchTerm')
      .type(search)
      .should('have.value', search)
      .type('{enter}')

    cy.url().should('include', `searchTerm=${search.replace(/\s/g, '+')}`)
  })

  it('should show search results page', () => {
    cy.get('h2').should('have.text', 'Search Results:')
  })
})
