/// <reference types="cypress" />
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  require('@cypress/react/plugins/react-scripts')(on, config)

  return config
}
