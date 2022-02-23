import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
  failureThreshold: 0.0,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.0 },
  capture: 'viewport',
})

Cypress.Commands.add('setResolution', size => {
  if (size instanceof Array) return cy.viewport(size[0], size[1])
  else return cy.viewport(size)
})

Cypress.Commands.add('login', (username, password) => {
  cy.clearCookies()
  cy.clearLocalStorage()

  cy.get('#user_login').clear().type(username)
  cy.get('#user_password').clear().type(password)
  cy.get('input[type=submit]').click()

  cy.url().contains('account-summary')
})
