const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  // Complete aqui
  const { username } = request.headers;
  const user = users.find(user => user.username === username);
  if (!user) {
    return response.status(404).json({ error: "User not found!" });
  }
  request.user = user;
  return next();
}

app.post('/users', (request, response) => {
  // Complete aqui
  const { name, username } = request.body;
  const userAlreadyExists = users.some(
    (user) => user.username === username
  );
  if (userAlreadyExists) {
    return response.status(400).json({ error: "User already exists!" });
  }
  const newUser = {
    id: uuidv4(),
    name,
    username,
    todos: []
  };
  users.push(newUser);
  return response.status(201).json(newUser);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { username } = request.headers;
  const user = users.find(user => user.username === username);
  if (!user) {
    return response.status(404).json({ error: "User not found!" });
  }
  return response.json(user.todos);

});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { username } = request.headers;
  const { title, deadline } = request.body;
  const user = users.find(user => user.username === username);
  if (!user) {
    return response.status(404).json({ error: "User not found!" });
  }
  const todo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  };
  user.todos.push(todo);
  return response.status(201).json(todo);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { username } = request.headers;
  const { id } = request.params;
  const { title, deadline } = request.body;
  const user = users.find(user => user.username === username);
  if (!user) {
    return response.status(404).json({ error: "User not found!" });
  }
  const todoIndex = user.todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    return response.status(404).json({ error: "Todo not found!" });
  }
  const todo = {
    ...user.todos[todoIndex],
    title,
    deadline: new Date(deadline)
  };
  user.todos[todoIndex] = todo;
  return response.status(201).json(todo);
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { username } = request.headers;
  const { id } = request.params;
  const user = users.find(user => user.username === username);
  if (!user) {
    return response.status(404).json({ error: "User not found!" });
  }
  const todoIndex = user.todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    return response.status(404).json({ error: "Todo not found!" });
  }
  const todo = {
    ...user.todos[todoIndex],
    done: true
  };
  user.todos[todoIndex] = todo;
  return response.status(201).json(todo);

});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { username } = request.headers;
  const { id } = request.params;

  const idExists = users.findIndex(user => user.todos.some(todo => todo.id === id));
  if (idExists === -1) {
    return response.status(404).json({ error: "Todo not found!" });
  }
  const user = users.find(user => user.username === username);
  user.todos.splice(id, 1);

  return response.status(204).send();
});

module.exports = app;