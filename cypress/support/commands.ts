import { hasOperationName } from '../utils/graphql-test-utils'

Cypress.Commands.add(
  'mockGraphqlResp',
  (queryName: string, property: string, fixtureName: string) => {
    cy.fixture(fixtureName).then((fixture) => {
      cy.intercept('POST', '/graphql', (req) => {
        if (hasOperationName(req, queryName)) {
          req.alias = `gql${queryName}Query`

          req.reply((res) => {
            res.body.data[property] = fixture
          })
        }
      })
    })
  }
)

Cypress.Commands.add('visitHomePage', () => {
  cy.visit('localhost:3000')
})

Cypress.Commands.add('visitDetailsPage', (idNumber: number) => {
  cy.visit(`localhost:3000/launch/${idNumber}`)
})

Cypress.Commands.add('getStatusBadge', () => {
  cy.get("[data-cy='status-badge']")
})

Cypress.Commands.add('getArticleLink', () => {
  cy.get("[data-cy='article-link']")
})

Cypress.Commands.add('getTestLaunchItem', () => {
  cy.get("[data-cy='item-223344']")
})
