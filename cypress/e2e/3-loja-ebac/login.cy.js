/// <reference types="cypress"/>

describe('Funionlidade: Login', () => {

    it('deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('paulier.helio@gmail.com')
        cy.get('#password').type('Heli0@19')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, paulier.helio (não é paulier.helio? Sair)')
    })
})




