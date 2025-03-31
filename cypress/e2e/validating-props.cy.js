/// <reference types="cypress" />

  describe('Rate Component Test', () => {
    it('increments the count when the Rate button is clicked', () => {
      cy.visit('/'); 

      cy.wait(2000)
      
      cy.get('[data-testid="buttonRate"]').first().click();

      cy.wait(2000)
      cy.get('[data-testid="rateText"]').first().should('have.text', '1');
    });
  });
  