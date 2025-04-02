/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('1 - deve selecionar um produto da lista', () => {
        //cy.get('.product-block ').eq(2).click()
        cy.get('.product-block ').contains('Aero Daily Fitness Tee').click()
        cy.get('.woocommerce-product-details__short-description > p').should('exist')
    });
    
    
});