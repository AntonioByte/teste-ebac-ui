/// <reference types="cypress"/>


describe('Funcionalidade: Login', () => {
    it('Realizar login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('caio10@email.com');
        cy.get('#password').type('H5YcXGhnhSYWU2w');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('have','Olá, caio10 (não é caio10? Sair)');
    });
});