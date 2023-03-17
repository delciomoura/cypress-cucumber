Feature: Login

    Scenario Outline: Realizar login com credenciais <situação>
        Given que estou na página de login
        When quando digito credenciais '<situação>'
        And clico no botão entrar
        Then a mensagem '<mensagem>' deve ser exibida

        Examples:
            | situação           | mensagem                            |
            | validas            | Seu gerenciador digital de contatos |
            | com email inválido | Email e/ou senha incorreto          |
            | com senha inválida | Email e/ou senha incorreto          |