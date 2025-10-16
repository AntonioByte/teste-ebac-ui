/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
});
describe('Funcionalidade: Cadastro', () => {
    it('Realizar cadastro', () => {

        cy.get('#username').type('caio10@email.com');
        cy.get('#password').type('H5YcXGhnhSYWU2w');
        cy.get('.woocommerce-form > .button').click();

        cy.contains('Detalhes da conta').click

    });
});