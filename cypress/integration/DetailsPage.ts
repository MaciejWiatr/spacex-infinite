// @ts-nocheck

context('Details page', () => {
  it('Should display correct data', () => {
    cy.visit('localhost:3000/launch/108')
    cy.get("[data-cy='page-title']").should(
      'contain',
      'Sentinel-6 Michael Freilich'
    )
    cy.get("[data-cy='status-badge']").should('contain', 'Successful')
    cy.get("[data-cy='article-link']").should('be.visible')
  })
})

export {}
