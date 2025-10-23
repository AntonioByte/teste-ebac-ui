/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';


describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta');
    });

    it('Realizar cadastro', () => {
        let nome = faker.person.firstName();
        let sobreNome = faker.person.lastName();
        let email = faker.internet.email({firstName: nome, lastName: sobreNome});
        let senha = faker.internet.password();
        
        cy.preCadastro(email, senha);
        cy.cadastro()

    });
});