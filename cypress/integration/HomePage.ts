context('Home page', () => {
  beforeEach(() => {
    cy.mockGraphqlResp('GetLaunches', 'launchesPast', 'launchesPast')
    cy.visitHomePage()
  })

  it('Should load launch list', () => {
    cy.getTestLaunchItem()
      .should('be.visible')
      .should('contain.text', 'Test-Mission')
      .should('contain.text', 'Test description')
  })

  it('Should redirect', () => {
    cy.getTestLaunchItem().find('button').click()
    cy.url().should('include', 'http://localhost:3000/launch/223344')
  })

  it('Should load more launches on scroll to bottom', () => {
    cy.getTestLaunchItem().should('be.visible')
    cy.scrollTo('bottom')
    cy.wait('@gqlGetLaunchesQuery')
      .its('response.body.data.launchesPast')
      .should('have.length', 10)
  })
})

export {}
