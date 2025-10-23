
Cypress.Commands.add('login', (email, senha) => {
    cy.get('#username').type(email);
    cy.get('#password').type(senha), { log: false };
    cy.get('.woocommerce-form > .button').click();
});


Cypress.Commands.add('preCadastro', (email, senha) => {
    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(senha);
    cy.get(':nth-child(4) > .button').click();
});
