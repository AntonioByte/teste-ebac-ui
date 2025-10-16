/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/');
    });
    it('Selecionar o primeiro produto', () => {
        cy.contains('#primary-menu', 'COMPRAR').click();
    });
});