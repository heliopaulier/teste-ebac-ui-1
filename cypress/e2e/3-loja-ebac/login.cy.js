/// <reference types="cypress"/>

describe('Funionlidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('1 - deve fazer login com sucesso', () => {        
        cy.get('#username').type('paulier.helio@gmail.com')
        cy.get('#password').type('Heli0@19')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, paulier.helio (não é paulier.helio? Sair)')       
    })

    it('2 - Deve exibir uma mensagem de erro ao inserir um user invalido', () => {
        cy.get('#username').type('teste@gmail.com')
        cy.get('#password').type('Heli0@19')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')       
    });


    it('3 - Deve exibir uma mensagem de erro ao exibir uma senha ivalida', () => {
        cy.get('#username').type('paulier.helio@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist') 
        
    });
})




