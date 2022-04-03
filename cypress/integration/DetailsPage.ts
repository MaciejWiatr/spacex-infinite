// @ts-nocheck

context('Details page', () => {
  it('Should display correct details', () => {
    cy.visit('localhost:3000/launch/108')
    cy.get("[data-cy='page-title']").should(
      'contain',
      'Sentinel-6 Michael Freilich'
    )
    cy.get("[data-cy='status-badge']").should('contain', 'Successful')
    cy.get("[data-cy='article-link']").should('be.visible')
  })
  it('Should display correct status badge', () => {
    cy.visit('localhost:3000/launch/1')
    cy.get("[data-cy='status-badge']").should('contain', 'Failed')
  })
  it("Shouldn't display article link if not available", () => {
    cy.visit('http://localhost:3000/launch/102')
    cy.get("[data-cy='article-link']").should('not.exist')
  })
})

export {}
