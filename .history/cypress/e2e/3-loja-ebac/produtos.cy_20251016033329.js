/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    before(() => {
        cy.visit();
        cy.get('#primary-menu').contains('Comprar').click();
    });
    it('Selecionar o primeiro produto', () => {
        
        cy.get('.product-block').first().click();
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });

    it('Selecionar o quarto produto', () => {
        
        cy.get('.product-block').eq(3).click();
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });

    it('Selecionar o produto pelo nome', () => {
        
        cy.contains('.product-block', 'Arcadio Gym Short').click();
        cy.get('.product_title').should('contain', 'Arcadio Gym Short');
    });

    it.only('Selecionar o último produto', () => {
        
        cy.get('.product-block').last().click();
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });
});