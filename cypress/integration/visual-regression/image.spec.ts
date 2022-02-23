describe('Visual regression tests', () => {
  const pages = ['http://example.com']
  const viewports: Array<Cypress.ViewportPreset | [number, number]> = [
    'iphone-6',
    'ipad-2',
    [1200, 800],
  ]

  viewports.forEach(size => {
    pages.forEach(page => {
      it(`Should match ${page} in resolution ${size}`, () => {
        let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
        cy.clock(currentTime)

        cy.setResolution(size)
        cy.visit(page)
        cy.matchImageSnapshot()
      })
    })
  })
})

describe('Single element snapshot', () => {
  it('Should match a single element on the page', () => {
    cy.visit('https://www.example.com')
    cy.get('h1').matchImageSnapshot({
      failureThreshold: 10,
      failureThresholdType: 'pixel',
    })
  })
})
