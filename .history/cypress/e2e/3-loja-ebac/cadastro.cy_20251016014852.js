/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
});
describe('Funcionalidade: Cadastro', () => {
    it('Realizar cadastro', () => {
        let nome = faker.person.firstName();
        let sobreNome = faker.person.lastName();
        let email = faker.internet.email({firstName: nome, lastName: sobreNome});
        let senha = faker.internet.password();

        cy.get('#reg_email').type(email);
        cy.get('#reg_password').type(senha);
        cy.get(':nth-child(4) > .button').click();

        cy.contains('Detalhes da conta').click();
        cy.get('#account_first_name').type(nome);
        cy.get('#account_last_name').type(sobreNome);
        cy.get('#account_email').clear().type(email);
        cy.get('.woocommerce-Button').click();

    });
});