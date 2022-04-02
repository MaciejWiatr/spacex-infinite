// @ts-nocheck
import { hasOperationName } from './../utils/graphql-test-utils'

context('Home page', () => {
  beforeEach(() => {
    cy.fixture('launchesPast').then((launchesPast) => {
      cy.intercept('POST', '/graphql', (req) => {
        if (hasOperationName(req, 'GetLaunches')) {
          req.alias = 'gqlGetLaunchesQuery'

          req.reply((res) => {
            res.body.data.launchesPast = launchesPast
          })
        }
      })
    })
  })

  it('Should load launch list', () => {
    cy.visit('localhost:3000')
    cy.get("[data-cy='item-223344']")
      .should('be.visible')
      .should('contain.text', 'Test-Mission')
      .should('contain.text', 'Test description')
  })

  it('Should redirect', () => {
    cy.visit('localhost:3000')
    cy.get("[data-cy='item-108']").find('button').click()
    cy.url().should('include', 'http://localhost:3000/launch/108')
  })
})
