/// <reference types="cypress" />

describe('Stubbing Network Request', () => {
    it('should stub network request with a custom response', () => {
        cy.intercept('GET', 'https://fakestoreapi.com/products', {
        statusCode: 200,
        body: [
            {
            id: 1,
            title: 'Stubbed Product',
            price: 20.0,
            description: 'This is a stubbed product.',
            category: 'electronics',
            image: 'https://example.com/product1.jpg',
            rating: { rate: 5, count: 100 }
            }
        ],
        }).as('getProducts');

      cy.visit('/products');
      cy.wait('@getProducts');
  
      // Check if stubbed data is rendered
      cy.contains('Stubbed Product').should('exist');
      cy.contains('This is a stubbed product.').should('exist');
      cy.get('[data-testid=fakedata]').should('have.length', 1) // Only 1 stubbed product
    });
  });
  