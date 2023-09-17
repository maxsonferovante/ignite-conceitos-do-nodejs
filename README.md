
<h1 align="center">Desafio 01 - Conceitos do Node.js</h1>


<p align="center">
  <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Rocketseat&message=Education&color=8257e5&labelColor=202024" alt="Rocketseat Project" />
  <a href="LICENSE"><img  src="https://img.shields.io/static/v1?label=License&message=MIT&color=8257e5&labelColor=202024" alt="License"></a>
</p>

## 🚀 O que é e o propósito do projeto

Este projeto é parte do Desafio 01 do Bootcamp Ignite da Rocketseat. O objetivo é aplicar e consolidar os conceitos básicos do Node.js, criando uma aplicação para gerenciar tarefas (*todos*) de usuários.

A aplicação permite a criação de usuários com `name` e `username` e a realização de operações CRUD em suas tarefas.

## 💻 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [UUID](https://github.com/uuidjs/uuid)
- ...

## 🔌 Endpoints disponíveis

- **POST /users**: Cria um novo usuário. Corpo da requisição deve conter `name` e `username`.
- **GET /todos**: Lista todas as tarefas (*todos*) de um usuário. Username deve ser enviado no header.
- **POST /todos**: Cria uma nova tarefa para um usuário. Corpo da requisição deve conter `title` e `deadline`.
- **PUT /todos/:id**: Atualiza uma tarefa existente. Corpo da requisição deve conter `title` e `deadline`.
- **PATCH /todos/:id/done**: Marca uma tarefa como feita.
- **DELETE /todos/:id**: Exclui uma tarefa.

## 🧪 Testes unitários

Os testes foram escritos utilizando o Jest. Para executar os testes, utilize o comando: `yarn test`.

## 🛠️ Como usar

1. Clone este repositório.
2. Instale as dependências com o comando: `yarn`.
3. Rode a aplicação com o comando: `yarn dev`.
4. A aplicação estará disponível em: `http://localhost:3333`.


## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


Feito com 💜 por Maxson Almeida 👋

[GitHub](https://github.com/maxsonferovante)
[LinkedIn](https://www.linkedin.com/in/maxson-almeida-501065260/)

