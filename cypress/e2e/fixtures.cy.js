/// <reference types="cypress" />

describe('Subbing with Fixtures', () => {
    it('should load data from fixture instead of making an API call', () => {
      cy.fixture('products').then((products) => {
        cy.intercept('GET', 'https://fakestoreapi.com/products', { body: products }).as('getProducts');
        
        cy.visit('/products');
        cy.wait('@getProducts');
  
        // Ensure data from the fixture is rendered
        cy.get('[data-testid=fakedata]').should('exist');
        cy.get('[data-testid=fakedata]').should('have.length', products.length);
      });
    });
  });
