describe('Browser Launch', () => {
  it('Setup basic', () => {
    cy.visit('https://vimla.se/');
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

  })
})