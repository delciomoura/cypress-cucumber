Given('que estou na página de login', () => {
    cy.visit('http://localhost:8080/');
});

When('quando digito credenciais {string}', (credenciais) => {
    switch (credenciais) {
        case "validas":
            cy.inserirEmail('junior@delcio.com.br');
            cy.inserirSenha('delcio123');
            break;
        case "com senha inválida":
            cy.inserirEmail('junior@delcio.com.br');
            cy.inserirSenha('delcio1231');
            break;
        case "com email inválido":
            cy.inserirEmail('junior1@delcio.com.br');
            cy.inserirSenha('delcio123');
            break;
        default:
            cy.log("NENHUMA OPÇÃO SELECIONADA")
            break;
    }
});

And('clico no botão entrar', () => {
    cy.clicarEmEntrar();
});

Given('devo acessar o dashboard do sistema', () => {
    cy.validarDashboard();
});

Then('a mensagem {string} deve ser exibida', (mensagem) => {
    cy.validarMensagem(mensagem);
});

And('no campo email digito um {string}', (situacao) => {
    switch (situacao) {
        case "email valido":
            cy.inserirEmail('junior@delcio.com.br');
            break;
        case "email inválido":
            cy.inserirEmail('junior1@delcio.com.br');
            break;
        default:
            cy.log("NENHUMA OPÇÃO SELECIONADA")
            break;
    }
});

And('no campo senha digito uma {string}', (situacao) => {
    switch (situacao) {
        case "senha valida":
            cy.inserirSenha('delcio123');
            break;
        case "senha inválida":
            cy.inserirSenha('delcio1234');
            break;
        default:
            cy.log("NENHUMA OPÇÃO SELECIONADA")
            break;
    }
});

When('clicar no botão adicionar contato', () => {
    cy.clicarEmAdicionarContato();
});

And('preencho os dados obrigatórios', () => {
    cy.inserirNome('Delcio');
    cy.inserirWhatsapp('84999999999');
    cy.inserirAssunto('Contato salvo para teste');
});

And('clico no botão Cadastrar', () => {
    cy.clicarEmCadastrar();
});

Then('o contato deve ser cadastrado com sucesso', () => {
    cy.validarContatoCriado('Delcio', '84999999999', 'Contato salvo para teste');
});

When('inserir um valor no campo de busca', () => {
    cy.inserirNumeroNoCampoDeBusca('84999999999');
});

And('clico no botão buscar', () => {
    cy.clicarBotaoBuscar();
});

Then('será exibido apenas o contato inserido na busca', () => {
    cy.validarContatoCriado('Delcio', '84999999999', 'Contato salvo para teste');
});

When('clicar no botão apagar do contato escolhido', () => {
    cy.excluirUmContato('84999999999');
});

Then('o contato deve ser excluído', () => {
    cy.validarContatoCriado('Delcio', '84999999999', 'Contato salvo para teste');
});