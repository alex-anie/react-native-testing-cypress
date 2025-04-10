/// <reference types="cypress" />

describe('Loader Component Test', () => {
  it('should show the loader while fetching data', () => {
    // Intercept the API call and add delay to ensure loader is visible
    cy.intercept('GET', 'https://fakestoreapi.com/products', (req) => {
      req.on('response', (res) => {
        // Increase delay to make sure we can catch the loader
        res.setDelay(3000);
      });
    }).as('getProducts');
    
    // Visit the products page
    cy.visit('/products');
    
    // Use cy.contains to find the ActivityIndicator
    // This is more reliable for React Native Web than data-testid in some cases
    cy.get('[data-testid=loader]', { timeout: 1000 }).should('exist');
    
    // Wait for the API response to complete
    cy.wait('@getProducts');
    
    // After the API call, check that the loader is removed
    // and replaced with actual product data
    cy.get('[data-testid=fakedata]', { timeout: 1000 }).should('exist');
    cy.get('[data-testid=loader]').should('not.exist');
  });
});