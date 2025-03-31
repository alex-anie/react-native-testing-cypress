/// <reference types="cypress" />

describe('Product List Network Request', () => {
    it('should make a successful API request and render the data', () => {
      cy.intercept('GET', 'https://fakestoreapi.com/products').as('getProducts');
      
      cy.visit('/products'); // Assuming this loads the React Native app
      cy.wait('@getProducts').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body).to.have.length.above(0); // API returns data
  
        // Check if data is rendered in the FlatList
        cy.get('[data-testid=fakedata]').should('exist');
        cy.get('[data-testid=fakedata]').should('have.length', interception.response.body.length);
      });
    });
  });
  
