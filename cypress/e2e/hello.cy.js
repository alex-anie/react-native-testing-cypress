
/// <reference types="cypress" />
describe('select the hero text from the hero overlay image', ()=>{
  it('Select and assert if the hero text exits', () => {
    cy.visit('/')
    cy.contains('24/7 online shopping, delivered any where you are!')
      .should('be.visible')
  })
})
