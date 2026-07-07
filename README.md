# Sistema de Login

Projeto desenvolvido por **Matheus Fernandes dos Santos** para o desafio técnico de Sistema de Login.

## Descrição

Este projeto é uma aplicação web simples para gerenciamento de usuários, contendo frontend e backend. O sistema permite cadastrar usuários, realizar login, visualizar a área do usuário, listar usuários cadastrados e fazer logout.

Os dados são armazenados apenas em memória, utilizando um array no backend. Portanto, ao reiniciar o servidor, os usuários cadastrados são apagados.

## Funcionalidades

* Cadastro de usuário
* Login de usuário
* Área do usuário após login
* Logout
* Listagem de usuários cadastrados
* Validação de campos obrigatórios
* Bloqueio de e-mails duplicados
* Tratamento básico de erros

## Tecnologias utilizadas

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* CORS

## Estrutura do projeto

Sistema Login/
├─ backend/
│  ├─ server.js
│  ├─ users.js
│  ├─ package.json
│  └─ package-lock.json
│
├─ frontend/
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
│
├─ README.md
└─ .gitignore

## Como executar o projeto

### 1. Abrir a pasta do projeto

Abra o terminal na pasta principal do projeto:

```bash
cd "C:\Users\theuu\Documents\Projeto\Sistema Login"
```

### 2. Acessar a pasta do backend

```bash
cd backend
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o servidor

```bash
node server.js
```

Se tudo estiver certo, aparecerá no terminal:

```txt
Servidor rodando em http://localhost:3000
```

O backend estará disponível em:

```txt
http://localhost:3000
```

### 5. Abrir o frontend

Com o servidor rodando, abra o arquivo abaixo no navegador:

```txt
frontend/index.html
```

Também é possível abrir o arquivo diretamente pelo VS Code usando a opção de abrir no navegador.

## Rotas da API

### Testar API

**Método:** `GET`

**Rota:**

```txt
/
```

**URL completa:**

```txt
http://localhost:3000/
```

**Resposta esperada:**

```txt
API do sistema de login funcionando
```

---

### Cadastrar usuário

**Método:** `POST`

**Rota:**

```txt
/users
```

**URL completa:**

```txt
http://localhost:3000/users
```

**Exemplo de corpo da requisição:**

```json
{
  "name": "Matheus",
  "email": "matheus@email.com",
  "password": "123456"
}
```

**Resposta esperada em caso de sucesso:**

```json
{
  "message": "Usuário cadastrado com sucesso",
  "user": {
    "id": 1,
    "name": "Matheus",
    "email": "matheus@email.com"
  }
}
```

**Possíveis erros:**

```json
{
  "error": "Nome, e-mail e senha são obrigatórios"
}
```

```json
{
  "error": "E-mail já cadastrado"
}
```

---

### Realizar login

**Método:** `POST`

**Rota:**

```txt
/login
```

**URL completa:**

```txt
http://localhost:3000/login
```

**Exemplo de corpo da requisição:**

```json
{
  "email": "matheus@email.com",
  "password": "123456"
}
```

**Resposta esperada em caso de sucesso:**

```json
{
  "message": "Login realizado com sucesso",
  "user": {
    "id": 1,
    "name": "Matheus",
    "email": "matheus@email.com"
  }
}
```

**Possíveis erros:**

{
  "error": "E-mail e senha são obrigatórios"
}

{
  "error": "E-mail ou senha inválidos"
}

### Listar usuários cadastrados

**Método:** `GET`

**Rota:**

```txt
/users
```

**URL completa:**

http://localhost:3000/users

**Resposta esperada:**

[
  {
    "id": 1,
    "name": "Matheus",
    "email": "matheus@email.com"
  }
]

A senha não é exibida na listagem de usuários.

# Como testar

É possível testar o sistema de duas formas:

# Teste pelo navegador

1. Inicie o backend com:

node server.js

2. Abra o arquivo:

frontend/index.html

3. Teste as funcionalidades:

   * Cadastre um usuário
   * Faça login com o usuário cadastrado
   * Veja a área do usuário
   * Acesse a lista de usuários
   * Faça logout

# Teste pelo Insomnia

Com o servidor rodando em `http://localhost:3000`, teste as rotas:

GET http://localhost:3000/
POST http://localhost:3000/users
POST http://localhost:3000/login
GET http://localhost:3000/users

# Observações importantes

* O projeto não utiliza banco de dados.
* Os usuários são armazenados em memória.
* Ao reiniciar o servidor, todos os usuários cadastrados são apagados.
* O frontend se comunica com o backend usando `fetch`.
* O backend utiliza `express.json()` para receber dados em JSON.
* O CORS foi utilizado para permitir a comunicação entre frontend e backend.

# Autor

**Matheus Fernandes dos Santos**