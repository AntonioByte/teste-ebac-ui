/// <reference types="cypress"/>
const perfil = require("../../fixtures/perfil.json");
describe('Funcionalidade: Detalhes da Contas', () => {
    
    beforeEach(() => {
        cy.visit();
    });

    it('Alterar detalhes da conta', () => {
        let numero = Math.random() * 10 + 1; 
        cy.login(perfil.valido.email, perfil.valido.senha);
        cy.cadastro('Caio', 'Filho', perfil.valido.email)
    });
});