describe("Keyboard press simulation", () => {
  it("Should submit form when pressing enter", () => {
    cy.visit("http://zero.webappsecurity.com/index.html")
    cy.get("#searchTerm").type("pipipi popopo{enter}")
  })
})
