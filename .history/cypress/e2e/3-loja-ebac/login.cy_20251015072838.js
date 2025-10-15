/// <reference types="cypress"/>


describe('Funcionalidade: Login', () => {
    it('Realizar login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
    });
});