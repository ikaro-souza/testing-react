describe("Login with fixture data", () => {
  it("should fail to login", () => {
    cy.visit("http://zero.webappsecurity.com/login.html")

    cy.fixture("user").then(user => {
      const { username, password } = user

      cy.get("#user_login").clear().type(username)
      cy.get("#user_password").clear().type(password)
      cy.get("input[type=submit]").click()
    })
  })
})
