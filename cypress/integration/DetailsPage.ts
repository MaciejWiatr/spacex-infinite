// @ts-nocheck

context('Details page', () => {
  const normalLaunchId = 108
  const failedLaunchId = 1
  const noArticleLaunchId = 102

  it('Should display correct details', () => {
    cy.visitDetailsPage(normalLaunchId)
    cy.get("[data-cy='page-title']").should(
      'contain',
      'Sentinel-6 Michael Freilich'
    )
    cy.getStatusBadge().should('contain', 'Successful')
    cy.getArticleLink().should('be.visible')
  })

  it('Should display correct status badge', () => {
    cy.visitDetailsPage(failedLaunchId)
    cy.getStatusBadge().should('contain', 'Failed')
  })

  it("Shouldn't display article link if not available", () => {
    cy.visitDetailsPage(noArticleLaunchId)
    cy.getArticleLink().should('not.exist')
  })
})

export {}
