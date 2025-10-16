/// <reference types="cypress"/>
import { dados } from "@faker-js/faker";

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
});
describe('Funcionalidade: Cadastro', () => {
    it('Realizar cadastro', () => {
        let nome = dados.person
        cy.get('#username').type('caio10@email.com');
        cy.get('#password').type('H5YcXGhnhSYWU2w');
        cy.get('.woocommerce-form > .button').click();

        cy.contains('Detalhes da conta').click();
        cy.get('#account_first_name').type();
        cy.get('#account_last_name').type();
        cy.get('#account_email').type();
        cy.get('.woocommerce-Button').click()

    });
});