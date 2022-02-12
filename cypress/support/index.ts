declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to fill and submit a login form.
       * @example cy.login('user', 'password')
       */
      login(username: string, password: string): Chainable<Element>
    }
  }
}

import "./commands"
