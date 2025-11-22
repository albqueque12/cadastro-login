# 🔐 Projeto Cadastro/Login em React

Este projeto é uma aplicação simples em **React** que permite ao usuário **cadastrar** e **realizar login**.  
Os dados são armazenados no **localStorage** (persistem após recarregar a página).  
A interface foi estilizada para ter um visual moderno, com fundo em gradiente e painel central escuro.

---

## 🚀 Tecnologias utilizadas
- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) - Build tool
- ReactDOM
- CSS3

---

## 💻 Funcionalidades

- ✅ Cadastro de usuário: cria uma conta armazenada no localStorage
- ✅ Login de usuário: valida email e senha cadastrados
- ✅ Mensagens de feedback: informa se o login/cadastro foi bem-sucedido ou se houve erro
- ✅ Alternância de modo: botão para trocar entre tela de login e tela de cadastro
- ✅ Interface moderna: painel escuro centralizado com fundo em gradiente
- ✅ Validação de email e senha

---

## 📂 Estrutura do projeto

```
cadastro-login/
├── src/
│   ├── app.jsx       # Componente principal com lógica de cadastro/login
│   ├── index.jsx     # Ponto de entrada da aplicação React
│   └── style.css     # Estilos da interface
├── index.html        # HTML base
├── package.json      # Configuração do projeto
├── vite.config.js    # Configuração do Vite
├── vercel.json       # Configuração do deploy Vercel
└── .gitignore        # Arquivos ignorados pelo Git
```

---

## 🛠️ Como rodar o projeto localmente

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/albqueque12/cadastro-login.git
cd cadastro-login
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

---

## 📦 Build para produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

Para testar o build localmente:
```bash
npm run preview
```

---

## 🚀 Deploy na Vercel

### Opção 1: Deploy via CLI

1. Instale a CLI da Vercel:
```bash
npm install -g vercel
```

2. Faça o deploy:
```bash
vercel
```

### Opção 2: Deploy via GitHub (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Importe seu repositório do GitHub
5. A Vercel detectará automaticamente as configurações do Vite
6. Clique em "Deploy"

✅ **Pronto! Seu projeto estará online em poucos segundos.**

---

## 📝 Notas importantes

- Os dados são armazenados apenas no navegador (localStorage)
- Não há backend - é apenas frontend
- As senhas não são criptografadas (apenas demonstração)
- Para um projeto real, use autenticação adequada com backend

---

## 📄 Licença

MIT