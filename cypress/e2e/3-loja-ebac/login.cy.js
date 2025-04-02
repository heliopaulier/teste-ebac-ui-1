/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funionlidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.screenshot
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


it('Deve fazer login com sucesso - usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, paulier.helio (não é paulier.helio? Sair)')

        
});

it('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, paulier.helio (não é paulier.helio? Sair)')
        })
        
});