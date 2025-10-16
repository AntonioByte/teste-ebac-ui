/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/');
    });
    it('Selecionar o primeiro produto', () => {
        cy.get('#primary-menu').contains('Comprar').click();
        cy.get('.product-block').first().click();
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });

    it('Selecionar o quarto produto', () => {
        cy.get('#primary-menu').contains('Comprar').click();
        cy.get('.product-block').eq(3).click();
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });

    it('Selecionar o produto pelo nome', () => {
        cy.get('#primary-menu').contains('Comprar').click();
        cy.contains('.product-block', 'Arcadio Gym Short').click();
        cy.get('.product_title').should('contain', 'Arcadio Gym Short');
    });

    it.only('Selecionar o último produto', () => {
        cy.get('#primary-menu').contains('Comprar').click();
        cy.get('.product-block').last().click();
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });
});