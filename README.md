# Sistema de Login e Cadastro com Painel de Usuário e Administrador

Este projeto é uma aplicação React com funcionalidades de cadastro, login e gerenciamento de usuários, utilizando `React Hook Form`, `localStorage` e navegação com `react-router-dom`. O sistema possui dois perfis principais: **Usuário Comum** e **Administrador**.

---
## 🧑 Autores

- Repositório: [https://github.com/MatCastanha]

- **Gabriel Cerqueira** — RA: 213118  
  └── Responsável pela criação da tela de **Cadastro**

- **Giovani Barbosa** — RA: 213458  
  └── Responsável pela criação da tela de **Login**

- **Gustavo Araujo** — RA: 214031  
  └── Responsável pelo **Design/Aparência do site** (protótipo no Figma)

- **João Pedro** — RA: 213429  
  └── Responsável pela criação da tela de **HomeUser**

- **Matheus Castanha** — RA: 207588  
  └── Responsável pela criação da tela de **HomeAdm**

---

## 🚀 Funcionalidades

- Cadastro de novos usuários com validação de formulário.
- Login com autenticação baseada em `localStorage`.
- Painel do Usuário com informações pessoais.
- Painel do Administrador com lista de todos os usuários cadastrados e possibilidade de editar dados.
- Máscara de telefone com `react-input-mask`.

---

## 🧱 Estrutura de Páginas

### 🔐 Login (`/login`)
- Campos: email e senha
- Validação com `React Hook Form`
- Redirecionamento:
  - Se for administrador, vai para `/homeAdm`
  - Se for usuário comum, vai para `/homeUser`

### 📝 Cadastro (`/register`)
- Campos: nome, email, senha e telefone
- Todos os campos são obrigatórios
- Email validado e convertido para letras minúsculas
- Senha deve ter no mínimo 7 caracteres
- Telefone com máscara de entrada
- Armazenamento no `localStorage`

### 🏠 HomeUser (`/homeUser`)
- Tela de boas-vindas ao usuário comum
- Exibe nome, email e telefone
- Botão de sair (limpa sessão)

### 🧑‍💼 HomeAdm (`/homeAdm`)
- Lista todos os usuários cadastrados
- Permite editar nome, email, senha e telefone dos usuários
- Validação de todos os campos ao editar
- Atualização salva diretamente no `localStorage`
- Botão de sair

---

## 🗂️ Tecnologias Utilizadas

- React
- React Router DOM
- React Hook Form
- React Input Mask
- Styled-components
- LocalStorage para persistência de dados

---

## 🛠️ Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/MatCastanha/Login-Register.git
   ```

2. Acesse o diretório:
   ```bash
   cd Login-Register
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Rode o projeto:
   ```bash
   npm start
   ```

---

## 📁 Organização de Pastas

```
├── public
│ ├── Assets/
│ ├── favicon.ico
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
├── src
│ ├── Pages/
│ │ ├── Home/
│ │ ├── Login/
│ │ └── Register/
│ │
│ ├── Routes/
│ │ └── index.js
│ │
│ ├── Styles/
│ │ └── global.js
│ │
│ ├── App.js
│ ├── App.test.js
│ ├── index.js
│ └── reportWebVitals.js
│
└── README.md
```

---

## 📌 Observações

- O sistema não possui backend: toda persistência é feita via `localStorage`.
- A conta do administrador deve estar previamente salva no `localStorage` com a chave `"Adm"` (exemplo: `{ nome: "Administrador", email: "admin@admin.com", senha: "1234567" }`).
- Em um sistema real, a autenticação deveria ser feita com API e criptografia de senhas.

---
