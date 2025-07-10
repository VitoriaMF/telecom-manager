# TelecomManagerFront 🚀

Este projeto é uma aplicação web desenvolvida em Angular para gerenciar operadoras, contratos e faturas do setor de telecomunicações. Ele oferece um painel administrativo com dashboard, gráficos, cadastro e edição de entidades, além de integração com uma API RESTful.

## 🛠️ Tecnologias Utilizadas

- ![Angular](https://img.shields.io/badge/Angular-20-red?logo=angular) **Angular 20**: Framework principal para construção da interface web.
- ![Angular Material](https://img.shields.io/badge/Angular%20Material-UI-blue?logo=angular) **Angular Material**: Biblioteca de componentes UI para Angular, utilizada para criar uma interface moderna e responsiva.
- ![Chart.js](https://img.shields.io/badge/Chart.js-Graphs-green?logo=chartdotjs) **ng2-charts & Chart.js**: Utilizadas para exibição de gráficos no dashboard.
- ![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript) **TypeScript**: Linguagem principal do projeto, trazendo tipagem estática e recursos modernos de desenvolvimento.
- ![Karma](https://img.shields.io/badge/Karma-Testing-brightgreen?logo=karma) ![Jasmine](https://img.shields.io/badge/Jasmine-Testing-purple?logo=jasmine) **Karma & Jasmine**: Ferramentas para execução e escrita de testes unitários.
- ![SCSS](https://img.shields.io/badge/SCSS-CSS%20Preprocessor-pink?logo=sass) **SCSS/CSS**: Estilização customizada dos componentes.

## ✨ Funcionalidades

- 📊 **Dashboard**: Visualização de métricas e gráficos sobre faturas emitidas, pagas e evolução mensal.
- 🏢 **Gestão de Operadoras**: Cadastro, edição, listagem e remoção de operadoras.
- 📄 **Gestão de Contratos**: Cadastro, edição, listagem e remoção de contratos.
- 💸 **Gestão de Faturas**: Cadastro, edição, listagem e remoção de faturas.
- 📚 **Navegação Lateral**: Menu fixo para fácil acesso às principais áreas do sistema.
- ✅ **Validação de Formulários**: Todos os formulários possuem validação de campos obrigatórios.

## ▶️ Como Executar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   ng serve
   ```
3. Acesse [http://localhost:4200](http://localhost:4200) no navegador.

## 📁 Estrutura do Projeto

- `src/app/core`: Modelos, serviços e componentes reutilizáveis.
- `src/app/pages`: Páginas principais (dashboard, operadoras, contratos, faturas).
- `src/app/app.routes.ts`: Configuração das rotas da aplicação.
- `src/styles.css`: Estilos globais.

## 🧪 Testes

Para rodar os testes unitários:
```sh
ng test
```

## ℹ️ Observações

- O projeto espera que a API backend esteja rodando em `http://localhost:5045`.
- Os gráficos do dashboard utilizam dados fornecidos pela API.

---

## 🖥️ Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## ⚡ Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## 🏗️ Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## 🧪 Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## 🧭 Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

Feito com 💜 por Vitória Fernandez