/// <reference types="cypress"/>
import { dados } from '@faker-js/faker';

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
});
describe('Funcionalidade: Cadastro', () => {
    it('Realizar cadastro', () => {
        let nome = dados.person.firstName();
        let sobreNome = dados.person.lastName();
        let email = dados.internet.email({nome, sobreNome});

        cy.get('#reg_email').type('caio10@email.com');
        cy.get('#reg_password').type('H5YcXGhnhSYWU2w');
        cy.get(':nth-child(4) > .button').click();

        cy.contains('Detalhes da conta').click();
        cy.get('#account_first_name').type(nome);
        cy.get('#account_last_name').type(sobreNome);
        cy.get('#account_email').type(email);
        cy.get('.woocommerce-Button').click()

    });
});