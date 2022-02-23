class BasePage {
  static loadHomePage() {
    cy.visit("https://devexpress.github.io/testcafe/example")
  }

  static wait(timeInMilliseconds: number) {
    cy.wait(timeInMilliseconds)
  }
}

class HomePage extends BasePage {
  static scrollToBottom() {
    cy.get("#submit-button").scrollIntoView()
  }

  static scrollToTop() {
    cy.get("header").scrollIntoView()
  }
}

describe("Abstraction with classes", () => {
  it("Should scroll down and up the page", () => {
    HomePage.loadHomePage()
    HomePage.scrollToBottom()
    HomePage.wait(1000)
    HomePage.scrollToTop()
  })
})
