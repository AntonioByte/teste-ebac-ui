
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


Cypress.Commands.add('Cadastro', (nome, sobreNome, email) => {
    cy.contains('Detalhes da conta').click();
    cy.get('#account_first_name').type(nome);
    cy.get('#account_last_name').type(sobreNome);
    cy.get('#account_email').clear().type(email);
    cy.get('.woocommerce-Button').click();
});
