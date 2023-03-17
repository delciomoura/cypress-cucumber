Cypress.Commands.add("validarDashboard", () => {
    cy.contains('h4', 'Seu gerenciador digital de contatos').should('be.visible')
});

Cypress.Commands.add("validarMensagem", (mensagem) => {
    cy.contains('div', mensagem).should('be.visible')
});

Cypress.Commands.add("validarContatoCriado", (nome, numero, texto) => {
    cy.contains('div', nome).should('be.visible')
    cy.contains('div', numero).should('be.visible')
    cy.contains('div', texto).should('be.visible')
});

Cypress.Commands.add("validarContatoExcluido", (nome, numero, texto) => {
    cy.contains('div', nome).should('not.be.visible')
    cy.contains('div', numero).should('not.be.visible')
    cy.contains('div', texto).should('not.be.visible')
});