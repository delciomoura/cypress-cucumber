Feature: Contato

    Scenario: Cadastrar um contato
        Given que estou na página de login
        When quando digito credenciais "validas"
        And clico no botão entrar
        Then a mensagem "Seu gerenciador digital de contatos" deve ser exibida
        When clicar no botão adicionar contato
        And preencho os dados obrigatórios
        And clico no botão Cadastrar
        Then o contato deve ser cadastrado com sucesso

    Scenario: Buscar por um contato cadastrado
        Given que estou na página de login
        When quando digito credenciais "validas"
        And clico no botão entrar
        Then a mensagem "Seu gerenciador digital de contatos" deve ser exibida
        When inserir um valor no campo de busca
        And clico no botão buscar
        Then será exibido apenas o contato inserido na busca

    Scenario: Excluir um contato cadastrado
        Given que estou na página de login
        When quando digito credenciais "validas"
        And clico no botão entrar
        Then a mensagem "Seu gerenciador digital de contatos" deve ser exibida
        When clicar no botão apagar do contato escolhido
        Then o contato deve ser excluído