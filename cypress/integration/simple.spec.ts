describe("Simple tests", () => {
  it("Should load the page", () => {
    cy.visit("http://example.com/", { timeout: 3000 });
    cy.get("body > div").should("exist");
  });
});
