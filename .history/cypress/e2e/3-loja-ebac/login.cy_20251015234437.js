/// <reference types="cypress"/>


describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    afterEach(() => {
        cy.screenshot();
    });
    it('Realizar login', () => {
        
        cy.get('#username').type('caio10@email.com');
        cy.get('#password').type('H5YcXGhnhSYWU2w');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, caio10 (não é caio10? Sair)');
    });

    it('Inserir e-mail inválido', () => {
        
        cy.get('#username').type('caiio10@email.com');
        cy.get('#password').type('H5YcXGhnhSYWU2w');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    });

    it.only('Inserir senha inválida', () => {
        
        cy.get('#username').type('caio10@email.com');
        cy.get('#password').type('H5YcXGhnhSYWU2o');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail caio10@email.com está incorreta. Perdeu a senha?');
    
    });
});