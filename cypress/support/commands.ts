Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies()
  cy.clearLocalStorage()

  cy.get("#user_login").clear().type(username)
  cy.get("#user_password").clear().type(password)
  cy.get("input[type=submit]").click()

  cy.url().contains("account-summary")
})
