/// <reference types="cypress"/>
const perfil = require("../../fixtures/perfil.json");
describe('Funcionalidade: Detalhes da Contas', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta');
    });

    it('Alterar detalhes da conta', () => {
        let numero = Math.random() * 10 + 1; 
        console.log(numero);
        cy.login(perfil.valido.email, perfil.valido.senha);
        cy.cadastro(`Caio${numero}`, `Filho${numero}`, perfil.valido.email)
    });
});