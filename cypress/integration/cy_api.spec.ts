describe("Simple tests", () => {
  before(() => {
    cy.log("Before all")
  })

  beforeEach(() => {
    cy.log("Before each")
  })

  after(() => {
    cy.log("After all")
  })

  afterEach(() => {
    cy.log("After each")
  })

  it("Should load the page", () => {
    cy.visit("http://example.com/", { timeout: 3000 })
    cy.url().should("include", "example")
    cy.log("website loaded")

    cy.reload()
    cy.log("website reloaded")
  })

  it("Show the correct title", () => {
    cy.visit("http://example.com/", { timeout: 3000 })
    cy.title().should("include", "Domain")
  })

  it("Should wait 2 seconds", () => {
    cy.wait(2000)
  })

  it("Should clear localStorage and cookies", () => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it("Should override the current time", () => {
    const date = new Date(2020, 3, 10).getTime()
    cy.clock(date)
    cy.log(date.toString())
  })

  // it("Should pause the execution", () => {
  //   cy.pause()
  // })

  it("Screenshot the page", () => {
    cy.visit("http://example.com/")
    cy.screenshot({ capture: "fullPage" })

    cy.get("body>div").screenshot()
  })

  it("Should write/read JSON/text file", () => {
    cy.writeFile("log.json", {
      name: "Anemolous",
      age: -18,
    })
    cy.readFile("log.json").its("age").should("eq", -18)

    cy.writeFile("log.txt", "pipipi popopo")
    cy.readFile("log.txt").should("eq", "pipipi popopo")
  })

  it("Should read and verifiy browser document content type", () => {
    cy.visit("https://www.example.com")
    cy.document().its("contentType").should("eq", "text/html")
    cy.document().should("have.property", "charset").and("eq", "UTF-8")
  })

  it.skip("Should skip test", () => {
    cy.log("Skipped test")
  })

  // Change to it.only
  it("Should run only this test", () => {
    cy.log("Ran only test")
  })

  // You should avoid it, use cy.get instead
  it("Clicks button using jQuery", () => {
    cy.visit("http://zero.webappsecurity.com/index.html")

    const signInButton = Cypress.$("#signin_button")
    signInButton.trigger("click")
  })
})
