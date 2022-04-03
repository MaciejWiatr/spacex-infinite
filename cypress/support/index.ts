/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      mockGraphqlResp(
        queryName: string,
        property: string,
        fixtureName: string
      ): Chainable<Element>
      visitHomePage(): Chainable<Element>
      visitDetailsPage(idNumber: number): Chainable<Element>
      getStatusBadge(): Chainable<Element>
      getArticleLink(): Chainable<Element>
      getTestLaunchItem(): Chainable<Element>
    }
  }
}

import './commands'
