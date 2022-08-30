# Node.js

- Até 2009, o **JavaScript** (JS) era utilizado, principalmente, do lado do cliente a partir do navegador.

- Utilizando o motor JavaScript do Google, o [V8](https://v8.dev/), além de outros componentes (como o C++), **Ryan Dahl** criou o **[Node.js](https://nodejs.org)**, um ambiente de execução JS externo ao navegador.

- Com isso, é possível executar códigos JS no *back-end* por meio de diversos módulos desenvolvidos por diferentes comunidades.

- Você verá diversas aplicações e *frameworks* que utilizam Node.js, como o *React*, *ExpressJS*, *AdonisJS*, dentre outros.

## Conceitos e definições

- Como o Node.js funciona: <https://www.youtube.com/watch?v=DiXbJL3iWVs&t=500s>

- *Node built-in objects*: OS, HTTP, Path, File system, dentre outros.

- *Node.js ECMAScript compatibility tables*: <https://node.green/>

### Event Loop

> The event loop is what allows Node.js to perform non-blocking I/O operations - despite the fact that JavaScript is **single-threaded** - by offloading operations to the system kernel whenever possible.
>
> From: [What is the Event Loop?](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop)

### Quanto de JavaScript é preciso saber para usar o Node.js?

- Fundamentos: objetos, vetores, condicionais e funções.

- HTTP, JSON, Callback, Promises, Arrow functions, ES6 and beyond.

A lista completa está disponível [aqui](https://nodejs.dev/learn/how-much-javascript-do-you-need-to-know-to-use-nodejs).

### Modules

[Modules in JavaScript – CommonJS and ESmodules Explained](https://www.freecodecamp.org/news/modules-in-javascript/):

1. CommonJS: *require/module.exports*
1. ESmodules: *import/export*

### Package manager

 1. NPM: gerenciador padrão do Node.js.
 1. Yarn e pNPM: gerenciadores alternativos.
 1. Repositório: [npmjs](https://www.npmjs.com/)

Referência e outras informações [aqui](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager).

## API RESTful com ExpressJs

- REST: *REpresentational State Transfer.* (Roy Fielding).

- RESTful: web service que obedece a arquitetura e as restrições REST.

- Operações: *POST, GET, PUT* e *DELETE*.

- Etapas:

    1. Estrutura do projeto
    1. Configuração do [Express](https://expressjs.com/)
    1. Criação de rotas
    1. [Modelo proposto do banco de dados](https://dbdiagram.io/d/630d077e0911f91ba5ecf743)
    1. ORM -- [Prisma.io](https://www.prisma.io)
    1. Construção das tabelas e relacionamentos
    1. *Migrations*

### Estrutura do projeto (em construção)

```text
prisma
src
  |_ database
        |_ client.js  
  |_ modules/*
        |_[C,R,U,D]_*_Controller.js
        |_[C,R,U,D]_*_Repository.js
  |_ routes/*
  |_ server.js
```

## Outras Referências

[Código Fonte TV: Node.js // Dicionário do Programador](https://youtu.be/vYekSMBCCiM)

[Felipe Rocha - dicasparadevs: Curso de Node.js Para Completos Iniciantes](https://youtu.be/IOfDoyP1Aq0)

[Rocketseat: COMEÇANDO COM NODE.JS EM 2022](<https://youtu.be/fm4_EuCsQwg>)

[Rocketseat: Node.js: Iniciando da teoria à prática | Masterclass #11](https://youtu.be/DiXbJL3iWVs)
