# Autenticação

A autenticação é um aspeto crucial do desenvolvimento web que envolve a verificação da identidade dos utilizadores que acedem a uma aplicação web ou, falando concretamente do que temos desenvolvido, uma API REST. Garante que apenas indivíduos autorizados podem aceder a determinados recursos ou realizar ações específicas num site.

Dentro dos métodos de autenticação existentes, o mais comum é mesmo a típica combinação username+password. Neste, o utilizador tem que se autenticar com as suas credenciais antes de poder aceder a áreas ou ações reservadas. Porque uma API REST é o que muitas vezes serve os dados e ações de apps, também estas possuem partes protegidas por autenticação (neste caso, as rotas/endpoints).

Independentemente do método de autenticação, o conceito essencial é: a autenticação do user requer a validação das suas credenciais e, se válidas, este terá na sua posse um comprovativo temporário de que é quem diz ser. A analogia referida na aula foi a do check-in num hotel, em que após verificação da identidade/reserva, temos direito a um cartão que nos dá acesso a recursos (quarto, salas de conferências, restaurante, etc).

Analisaremos dois tipos diferentes de autenticação habituais no contexto de aplicações web: com base em sessões e com base em tokens.

## Sessões

Na autenticação baseada em sessões, quando um utilizador faz login com sucesso, o servidor cria uma sessão única para esse utilizador. Uma identificação de sessão é gerada e armazenada no servidor, enquanto um cookie contendo essa identificação é enviado para o cliente.

As informações de autenticação são então armazenadas no servidor, agregadas ao iedentificador da sessão, o que significa que o servidor mantém o estado da sessão do utilizador.

![alt text](sessions.png)

## Tokens JWT

Na autenticação baseada em tokens JWT, quando um utilizador faz login com sucesso, um token JWT é gerado e enviado de volta para o cliente. Esse token contém informações sobre o utilizador e é criptográficamente assinado para garantir a sua integridade.

As informações de autenticação são armazenadas no próprio token JWT, que é enviado para o cliente (frontend) e geralmente armazenado em cookies ou localStorage (menos seguro). Isso significa que o servidor não precisa armazenar o estado da sessão do utilizador (stateless)

![alt text](tokens.png)

## Comparação:

- Desempenho: A autenticação baseada em tokens JWT pode ser mais eficiente em termos de desempenho, uma vez que não requer armazenamento de estado no servidor (requer menos acessos à base de dados)
- Escalabilidade: Os tokens JWT são mais escaláveis em ambientes distribuídos, facilitando a escalabilidade horizontal
- Segurança: Ambas as abordagens são seguras quando implementadas corretamente

# Passwords

As passwords em plain-text (como as escrevemos) NUNCA são guardadas nas bases de dados.
Para guardar uma password, é necessário transformá-la num texto ilegivel mas que pode ser comprado com o texto original. Isto é possível através de uma função hash. No Node.js, podemos usar o package [bcrypt](https://www.npmjs.com/package/bcrypt) que nos dá as funcionalidades que necessitamos: a função "hash" para criar uma hash a partir de um texto, e uma função "compare" para comparar um texto normal com uma hash e verificar se são equivalentes.
