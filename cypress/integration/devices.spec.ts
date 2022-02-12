describe("Device tests", () => {
  before(() => {
    cy.visit("http://www.example.com")
  })

  it("720p", () => {
    cy.viewport(1280, 720)
  })

  it("1080p", () => {
    cy.viewport(1920, 1080)
  })

  it("iPhone X", () => {
    cy.viewport("iphone-x")
  })

  it("iPad Mini", () => {
    cy.viewport("ipad-mini")
  })

  it("Macbook 15", () => {
    cy.viewport("macbook-15")
  })
})
