
Cypress.Commands.add('login', (email, senha) => {
    cy.get('#username').type(email);
    cy.get('#password').type(senha), { log: false };
    cy.get('.woocommerce-form > .button').click();
});