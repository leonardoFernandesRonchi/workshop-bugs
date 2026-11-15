const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

let usuarios = [
  { id: 1, nome: "Ana", email: "ana@email.com" },
  { id: 2, nome: "Bruno", email: "bruno@email.com" },
];
let proximoId = 3;

// Listar
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// Criar (espera o corpo no formato { user: { nome, email } })
app.post("/usuarios", (req, res) => {
  const { nome, email } = req.body.user;
  const novo = { id: proximoId++, nome, email };
  usuarios.push(novo);
  res.status(201).json(novo);
});

// Remover
app.delete("/usuarios/:id", (req, res) => {
  const indice = usuarios.findIndex((u) => u.id === req.params.id);
  if (indice === -1) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }
  usuarios.splice(indice, 1);
  res.status(204).end();
});

app.listen(3001, () => console.log("API em http://localhost:3001"));
