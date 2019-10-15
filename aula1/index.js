const express = require("express");
const server = express();

server.use(express.json());

// Query Params = ?teste=1
// Route Params = /users/1
// Request body = { "name" :"Pedro"}

// CRUD - Create, Read, Update, Delete

const users = ["Pedro", "Gregorio", "Leonardo"];

// Middleware
server.use((req, res, next) => {
  console.time("request");
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  return next();
  console.timeEnd("request");
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required" });
  }
  return next();
}
function checkUserInArray(req, res, next) {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "User does not exists" });
  }

  req.user = user;
  return next();
}

server.get("/users/", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  return res.json({
    message: `buscando o usuário de index: ${req.user}`
  });
});

server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);

  return res.json(users);
});

server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  return res.json(users);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);
  return res.send();
});

// port 3000 - localhost:3000
server.listen(3000);
