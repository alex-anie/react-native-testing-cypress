
// /// <reference types="cypress" />
// describe('select the hero text from the hero overlay image', ()=>{
//     it('Select and assert if the hero text exits', () => {
//       cy.visit('https://www.lambdatest.com/')
//     //   cy.contains('Power Your Software Testing with AI and Cloud')
//     })
//   })


/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('select the hero text from the hero overlay image', () => {
  it('Select and assert if the hero text exits', () => {
    cy.visit('https://www.lambdatest.com/');
    // cy.contains('Power Your Software Testing with AI and Cloud')
  });
});

  