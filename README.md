# Desafio Tivic

Sistema simplificado de gerenciamento de operações de trânsito para Lei Seca.

## 🛠️ Tecnologias Utilizadas

- [Angular](versão >= 17)
- [TypeScript]
- [RxJS]
- [Angular Material]

## 🚀 Funcionalidades

- Login
- Cadastro de usuários
- Adicionar Operações
- Dashboard com informações quantitativas sobre as operações

## 📦 Pré-requisitos

-Node.js
-Angular CLI

## 🖥️  Como rodar o projeto

Clone este repositório

```bash
git clone https://github.com/seu-usuario/desafio-tivic.git

```

Entre no diretório do projeto

```bash
cd nome-do-projeto
```

Instale as dependências

```bash
npm install
```

Para instalar as dependências adicionais:

ngx-toast (para notificações):

```bash
npm install ngx-toastr --save
```

JSON Server (para simulação da API):

Globalmente (opção mais comum):

```bash
npm install -g json-server
```

Localmente (no projeto):

```bash
npm install json-server --save-dev
```

Execute o JSON Server apontando para o arquivo db.json:

```bash
json-server --watch db.json --port 3000
```

Instale a biblioteca Angular Material:

```bash
ng add @angular/material
```

Execute o projeto

```bash
npm start
```
