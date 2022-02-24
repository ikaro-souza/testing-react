import React from 'react'
import { mount } from '@cypress/react'
import App from '../../../../src/App'

describe('App component', () => {
  beforeEach(() => {
    mount(<App />)
  })

  it('loads page successfully', () => {
    cy.get('.App-logo').should('be.visible')
    cy.get('.App-link').should('be.visible')
  })

  it('goes to react docs page when link is clicked', () => {
    return cy.get('.App-link').then(element => {
      expect(element.attr('href')).contain('reactjs')
      expect(element.attr('target')).equal('_blank')
    })
  })
})
