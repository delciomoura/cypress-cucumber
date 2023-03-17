Cypress.Commands.add("inserirEmail", (email) => {
    cy.email().type(email);
});

Cypress.Commands.add("inserirSenha", (senha) => {
    cy.password().type(senha);
});

Cypress.Commands.add("clicarEmEntrar", () => {
    cy.sigIn().click();
});

Cypress.Commands.add("clicarEmAdicionarContato", () => {
    cy.addNewContact().click();
});

Cypress.Commands.add("clicarEmCadastrar", () => {
    cy.saveButton().click();
});

Cypress.Commands.add("clicarBotaoBuscar", () => {
    cy.botaoBuscar().click();
});

Cypress.Commands.add("inserirNome", (nome) => {
    cy.name().type(nome);
});

Cypress.Commands.add("inserirWhatsapp", (numero) => {
    cy.number().type(numero);
});

Cypress.Commands.add("inserirAssunto", (texto) => {
    cy.description().type(texto);
});

Cypress.Commands.add("inserirNumeroNoCampoDeBusca", (numero) => {
    cy.placeholder().type(numero);
});

Cypress.Commands.add("excluirUmContato", (numero) => {
    cy.get('div')
        .contains(numero)
        .parent()
        .parent()
        .parent()
        .parent()
        .find('[data-cy="btn-remove"]')
        .click();
});