declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Command to change the viewport.
       * @example cy.login('user', 'password')
       */
      setResolution(
        size: Cypress.ViewportPreset | [number, number]
      ): Chainable<Element>

      /**
       * Command to fill and submit a login form.
       * @example cy.login('user', 'password')
       */
      login(username: string, password: string): Chainable<Element>
    }
  }
}

import './commands'
