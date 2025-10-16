/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/');
    });
    it('Selecionar o primeiro produto', () => {
        cy.get('#primary-menu').contains('Comprar').click();
        cy.get('.product-block').first().click();
        cy.get('#tab-title-description > a').should('Descrição');
    });
});