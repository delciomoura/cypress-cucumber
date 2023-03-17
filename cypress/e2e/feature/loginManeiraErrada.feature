Feature: Login

    Scenario: Realizar login com credenciais validas
        Given que estou na página de login
        And no campo email digito um "email valido"
        And no campo senha digito uma "senha valida"
        And clico no botão entrar
        Then a mensagem "Seu gerenciador digital de contatos" deve ser exibida

    Scenario: Realizar login com credenciais com email inválido
        Given que estou na página de login
        And no campo email digito um "email inválido"
        And no campo senha digito uma "senha valida"
        And clico no botão entrar
        Then a mensagem "Email e/ou senha incorreto" deve ser exibida

    Scenario: Realizar login com credenciais com senha inválida
        Given que estou na página de login
        And no campo email digito um "email valido"
        And no campo senha digito uma "senha inválida"
        And clico no botão entrar
        Then a mensagem "Email e/ou senha incorreto" deve ser exibida