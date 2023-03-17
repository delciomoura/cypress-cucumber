Cypress.Commands.add("visitDashboard", () => {
    cy.visit('http://localhost:8080/dashboard');
});

Cypress.Commands.add("contactItem", () => {
    cy.get('.card');
});

Cypress.Commands.add("contactList", () => {
    cy.get('[data-cy=contactList]');
});

Cypress.Commands.add("alertName", () => {
    cy.get('.input-name small');
});

Cypress.Commands.add("alertNumber", () => {
    cy.get('.input-number small');
});

Cypress.Commands.add("alertDesc", () => {
    cy.get('.text-description small');
});

Cypress.Commands.add("email", () => {
    cy.get('input[name=email]');
});

Cypress.Commands.add("password", () => {
    cy.get('input[name=password]');
});

Cypress.Commands.add("sigIn", () => {
    cy.get('#sigIn');
});

Cypress.Commands.add("addNewContact", () => {
    cy.get('[data-cy="addNewContact"]');
});

Cypress.Commands.add("name", () => {
    cy.get('[data-cy="name"]');
});

Cypress.Commands.add("number", () => {
    cy.get('[data-cy="number"]');
});

Cypress.Commands.add("description", () => {
    cy.get('[data-cy="description"]');
});

Cypress.Commands.add("saveButton", () => {
    cy.get('[data-cy="saveButton"]');
});

Cypress.Commands.add("placeholder", () => {
    cy.get('[placeholder="Número do Whats"]');
});

Cypress.Commands.add("botaoBuscar", () => {
    cy.get('[class="button is-primary"]');
});

Cypress.Commands.add("btnRemove", () => {
    cy.get('[data-cy="btn-remove"]');
});
