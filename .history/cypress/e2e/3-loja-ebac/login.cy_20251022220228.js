/// <reference types="cypress"/>
const perfil = require("../../fixtures/perfil.json");

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta');
    });

    afterEach(() => {
        //cy.screenshot();
    });
    it('Realizar login', () => {
        cy.login(perfil.valido.email, perfil.valido.senha);
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, caio10 (não é caio10? Sair)');
    });

    it('Inserir e-mail inválido', () => {
        
        cy.login(perfil.invalido.email, perfil.valido.senha);
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    });

    it('Inserir senha inválida', () => {
        
        cy.login(perfil.valido.email, perfil.invalido.senha);
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail caio10@email.com está incorreta. Perdeu a senha?');
    
    });
});