describe("Click interactions", () => {
  it("Should load the website", () => {
    cy.visit("https://books.toscrape.com/")
    cy.url().should("include", "books.toscrape")
  })

  it("Should go to Travel category on click", () => {
    cy.get("a").contains("Travel").click()
    cy.get("h1").contains("Travel")
  })

  it("Should display correct number of numbers", () => {
    cy.get(".product_pod").its("length").should("equal", 11)
  })

  it("Should go to Poetry category on click", () => {
    cy.get("a").contains("Poetry").click()
    cy.get("h1").contains("Poetry")
  })

  it("Should go to book details page on book cover click", () => {
    cy.get("a").contains("Olio").click()
    cy.get("p.price_color").should("exist")
  })
})

describe("Input interactions", () => {
  before(() => {
    cy.visit("https://devexpress.github.io/testcafe/example/")
  })

  it("Should fill username", () => {
    const textToType = "Anemolous"

    // Always clear to make sure the written value is what you want it to be
    const input = cy.get("#developer-name")
    input.clear().type(textToType)

    input.should("contain.value", textToType)
  })

  it("Should mark 'features' checkbox", () => {
    const checkbox = cy.get("label[for=remote-testing]")
    checkbox.click()

    const radioButton = cy.get("label[for=windows]")
    radioButton.click()

    checkbox.get("input").should("be.checked")
  })

  it("Should select an option from select input", () => {
    const options = ["Command Line", "JavaScript API", "Both"]

    options.forEach(option => {
      const select = cy.get("#preferred-interface").select(option)

      select.should("have.value", option)
    })
  })

  it("Should submit form", () => {
    cy.get("#submit-button").click()

    cy.get("h1").should("contain", "Thank you")
  })
})

describe("Scrolling", () => {
  it("Should scroll to elements on page", () => {
    cy.visit("https://devexpress.github.io/testcafe/example/")
    cy.get("#submit-button").scrollIntoView()
    cy.get("h1").scrollIntoView()
  })
})
