/// <reference types="cypress" />

describe('click the hero button', ()=>{
    it('interact with the hero button and make a click', ()=>{
        cy.visit('/')
        cy.get('[data-testid=button]').click().should('be.visible')
    })
})