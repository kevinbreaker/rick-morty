import { Viewports } from '../types'

describe('[Example] Hello world', () => {
  const viewports: Viewports = [
    ['samsung-s10', 'Mobile'],
    ['iphone-8', 'Mobile'],
    ['ipad-mini', 'Tablet'],
    ['macbook-11', 'Desktop'],
    ['macbook-15', 'Desktop'],
  ]

  viewports.forEach(([viewport, device]) => {
    context(`[${device}] - ${viewport}`, { scrollBehavior: 'nearest' }, () => {
      beforeEach(() => {
        cy.viewport(viewport)
        cy.visit('/')
      })

      it('hello world, cypress =D', () => {
        cy.get('div')
      })

      it('Hello tests', () => {
        cy.get('body')
      })
    })
  })
})
