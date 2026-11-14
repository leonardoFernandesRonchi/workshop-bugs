# 🐛 Caça aos Bugs: React + Express

Projeto de treinamento para praticar **identificação, investigação e correção de bugs** em aplicações web.

O projeto consiste em um CRUD simples de usuários, desenvolvido com React no frontend e Node.js + Express no backend.

O código contém **bugs propositais**, distribuídos entre o frontend e o backend. O objetivo da atividade é encontrar os problemas, entender suas causas e implementar as correções.

## 📁 Estrutura do projeto

```text
projeto-bugs/
├── backend/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── style.css
    ├── index.html
    └── package.json
```

## ⚙️ Requisitos

- Node.js 18 ou superior.
- npm.
- Navegador com DevTools (Chrome, Edge ou Firefox).
- Editor de código (VS Code recomendado).

## 🚀 Como executar o projeto

A aplicação possui dois serviços independentes. Abra dois terminais para executá-los simultaneamente.

### 1. Backend — Express

No primeiro terminal:

```bash
cd backend
npm install
node server.js
```

Se tudo estiver correto, deverá aparecer:

```text
API em http://localhost:3001
```

### 2. Frontend — React

No segundo terminal:

```bash
cd frontend
npm install
npm run dev
```

O Vite disponibilizará um endereço local, normalmente:

```text
http://localhost:5173
```

Acesse esse endereço no navegador para utilizar a aplicação.

> **Importante:** sempre que modificar o `server.js`, interrompa o backend utilizando `Ctrl + C` e inicie-o novamente com `node server.js`.

## 🎯 Objetivo da atividade

O sistema deve permitir realizar três operações principais:

- **Listar usuários:** visualizar os usuários cadastrados.
- **Adicionar usuário:** cadastrar um novo usuário informando nome e e-mail.
- **Remover usuário:** excluir um usuário existente.

Se alguma dessas operações não funcionar como esperado, investigue o fluxo da aplicação para identificar a origem do problema.

## 🔎 Como investigar os bugs

Durante a atividade, procure utilizar as ferramentas disponíveis no navegador e no terminal.

### 1. Console do navegador

Abra o DevTools (`F12`) e acesse a aba **Console**.

Observe:
- Mensagens de erro em vermelho.
- Erros de JavaScript.
- Problemas relacionados ao React.
- Valores inesperados durante a execução.

### 2. Network

No DevTools, acesse a aba **Network** e observe as requisições realizadas pelo frontend.

Verifique:
- Qual URL está sendo chamada.
- Qual método HTTP está sendo utilizado (GET, POST, DELETE).
- Qual é o status da resposta (200, 201, 400, 404, 500 etc.).
- Quais dados estão sendo enviados no corpo da requisição.
- Qual conteúdo está sendo retornado pelo backend.

### 3. Terminal do backend

Observe o terminal onde o Express está sendo executado.

Verifique:
- Mensagens de erro.
- Problemas durante o processamento das requisições.
- Dados recebidos pela API.
- Possíveis erros na lógica do servidor.

### 4. Testando a API independentemente do frontend

Também é possível testar os endpoints diretamente pelo terminal, utilizando `curl`.

**Listar usuários:**

```bash
curl http://localhost:3001/usuarios
```

**Cadastrar usuário:**

```bash
curl -X POST http://localhost:3001/usuarios \
-H "Content-Type: application/json" \
-d '{"user":{"nome":"Teste","email":"t@t.com"}}'
```

**Remover usuário:**

```bash
curl -X DELETE http://localhost:3001/usuarios/1
```

Esses testes ajudam a identificar se o problema está na comunicação entre frontend e backend ou na própria implementação da API.

## 📋 Regras da atividade

1. Corrija **um bug por vez** e teste a aplicação novamente antes de passar para o próximo.
2. Antes de modificar o código, descreva o comportamento incorreto observado.
3. Utilize o Console, Network e terminal para investigar os problemas.
4. Registre cada bug encontrado na tabela de acompanhamento.
5. Não se limite a eliminar mensagens de erro: procure entender a causa do problema.
6. Sempre teste se a correção resolveu o problema sem prejudicar outras funcionalidades.

## 📝 Registro dos bugs encontrados

Utilize a tabela abaixo para documentar os problemas identificados durante a atividade.

| # | Sintoma observado | Onde investigou | Causa identificada | Correção aplicada | Camada |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |
| 7 | | | | | |
| 8 | | | | | |

## 💬 Discussão final

Após encontrar e corrigir os problemas, discuta as seguintes questões:

1. Qual bug foi mais difícil de identificar? Por quê?
2. Algum bug acabou escondendo ou dificultando a identificação de outro?
3. Como seria possível evitar cada um desses problemas durante o desenvolvimento?
4. Qual ferramenta foi mais útil durante a investigação: Console, Network, terminal ou `curl`?
5. Por que é importante entender o fluxo completo de uma requisição antes de modificar o código?
6. Como testes automatizados, validações e revisão de código poderiam ajudar a prevenir esses problemas?

## 💡 Dica

Uma aplicação web não funciona apenas com o código do frontend ou do backend isoladamente.

Uma operação simples, como cadastrar um usuário, percorre várias etapas:

          ↓
