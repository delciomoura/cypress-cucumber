Feature: Contato

    Background: login
        Given que estou na página de login
        When quando digito credenciais "validas"
        And clico no botão entrar
        Then a mensagem "Seu gerenciador digital de contatos" deve ser exibida

    Scenario: Cadastrar um contato
        Given clicar no botão adicionar contato
        When preencho os dados obrigatórios
        And clico no botão Cadastrar
        Then o contato deve ser cadastrado com sucesso

    Scenario: Buscar por um contato cadastrado
        Given inserir um valor no campo de busca
        When clico no botão buscar
        Then será exibido apenas o contato inserido na busca

    Scenario: Excluir um contato cadastrado
        Given clicar no botão apagar do contato escolhido
        Then o contato deve ser excluído