Cypress.Commands.add("requestCreateUser", (user) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/user',
        headers: {'Content-Type': 'application/json'},
        body: user,
        failOnStatusCode: false
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
    });
});