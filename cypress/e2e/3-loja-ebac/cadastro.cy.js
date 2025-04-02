
/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

   it('1 - Realizar o cadastro de um novo user - usando faker-js', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('Teste@123')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

    cy.get('#account_first_name').type(faker.person.firstName())
    cy.get('#account_first_name').type(faker.person.lastName())
    cy.wait(5000)
    
    cy.get('#account_first_name').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

   }); 

   it.only('2 - Realizar o cadastro de um novo user - usando variavel', () => {
        var email = faker.internet.email()
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()

    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type('Teste@123')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)

    cy.wait(5000)

    cy.get('.woocommerce-Button').click()
    
    
    
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    
   });

    
});