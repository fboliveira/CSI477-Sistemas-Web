# JavaScript - JS

## Introdução

- Originalmente desenvolvido pela Netscape sob o nome de **Mocha**.

- Nome mudado para **LiveScript** e depois para **JavaScript**.

- Autor: [**Brendan Eich**](https://en.wikipedia.org/wiki/Brendan_Eich).

- **LiveScript**: nome oficial da linguagem quando foi lançada na versão beta do navegador **Netscape 2.0**.

- Nome mudado em um anúncio conjunto com a **Sun Microsystems**: em dezembro de 1995 quando foi implementado no navegador Netscape versão 2.0B3.

- A mudança coincidiu com a época em que a Netscape adicionou suporte à tecnologia **Java** em seu navegador.

- A escolha final do nome causou **confusão** dando a impressão de que a linguagem foi baseada em **Java**.

- A ação foi caracterizada por muitos como uma **estratégia** de marketing da Netscape para aproveitar a **popularidade** do Java;

- **Sugestões de leitura**:

  - [*JavaScript: The World's Most Misunderstood Programming Language*](http://crockford.com/javascript/javascript.html)

  - [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript>)

  - [*The Modern JavaScript Tutorial*](https://javascript.info/)

## Especificação

- **ECMAScript / ECMA-262** - <https://tc39.github.io/ecma262/>

- Especificação da linguagem - *scripts*

- Base para JavaScript.

- [*JavaScript Versions*](https://www.w3schools.com/js/js_versions.asp)

- [Can I use ... ?](https://caniuse.com/)

## Características

- **Comandos e funções JavaScript**: inseridos dentro de um documento da Web, junto com tags HTML e texto;

- Para acessar uma página que possui *scripts*: o navegador deve ser capaz de interpretar a linguagem.

- JavaScript é uma linguagem **baseada em objetos**: orientada a objetos com um **conjunto de objetos** já embutidos.

- **Evento**: sempre que algo acontece em uma página Web.

- **Podem ser qualquer ação**: um botão recebe um clique o mouse é arrastado, uma página é carregada, um formulário é enviado, e assim por diante.

- **JavaScript**: dirigida por eventos - projetada para reagir quando um evento ocorre.

- Ela **não é capaz** de recuperar informações de outro arquivo ou salvar dados em um servidor da Web, ou no computador do usuário.

- **Não é possível** escrever um script JavaScript que, por exemplo, varra os diretórios de um computador, lendo ou apagando arquivos do usuário.

- É uma linguagem **independente de plataforma**: **depende apenas do navegador** que a interpreta.

- JavaScript é ***case sensitive***;

- Sintaxe bastante similar a C, C++, dentre outras;

- Utilizar **ponto e vírgula** nas expressões e declarações? [Automatic Semicolon Insertion](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion)

### JavaScript não é Java

- JavaScript é **baseada em objetos**: tem seus próprios objetos embutidos;

- Java é **orientada a objetos**: os objetos são construídos a partir de classes;

- JavaScript usa **tipagem fraca/dinâmica**: as  variáveis são declaradas com [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) e [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var), e uma variável ora pode guardar *strings*, ora *números* (com exceção daquelas declaradas com `const`).

- Java usa **tipagem forte**: as variáveis precisam ser declaradas e usadas para um tipo de dados específico;

- JavaScript usa **ligação dinâmica**: referências a objetos são verificadas e resolvidas em tempo de execução.

- Java usa **ligação estática**: referências a objetos devem ser resolvidas quando o programa é compilado.

## Inserção no HTML

- *Tag*: `<script>...</script>`

- Atributo `type="text/javascript"`: não requerido.

- JavaScript é a **linguagem de *script* padrão em HTML**.

- Pode-se inserir a *tag* dentro dos elementos `<head>`, `<body>` ou ambos;

- É possível incorporar múltiplos elementos `<script>` dentro de um documento.

- Scripts dentro da *tag* `<head>` são carregados antes que o resto da página seja carregado;

- Scripts dentro da *tag* `<body>` faz com que seja possível criar dinamicamente partes de seu documento.

```html
<script>
    codigo-fonte javascript
</script>

<script src="funcoes.js"></script>
```

- [*Blocking script: How do you add JavaScript to your page?*](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#how_do_you_add_javascript_to_your_page)

>*async and defer*
>
>*There are actually two modern features we can use to bypass the problem of the blocking script — async and defer.*
>

- [*addEventListener()*](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#using_addeventlistener_instead)

## Hierarquia dos Objetos: DOM - *Document Object Model*

- O navegador cria um [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) quando a página é carregada.

- Um exemplo pode ser observado a seguir. A imagem foi retirada [daqui](http://www.w3schools.com/js/js_htmldom.asp).

![DOM](https://www.w3schools.com/js/pic_htmltree.gif)

## Visão Geral da linguagem

Esta é uma definição geral sobre a estrutura da linguagem, sendo adaptado do *roadmap* definido pela [Attekita Dev: JAVASCRIPT do básico ao avançado ( Mapa de estudos / Roadmap )](https://youtu.be/6YwbZbHRQ8w).

- Operadores lógicos e matemáticos
- Definição de variáveis e constantes
- Tipos e estruturas de dados
- Estruturas e condicionais
- Estruturas de repetição
- Manipulação de elementos HTML e CSS a partir do DOM.
- Eventos
- Funções
- Manipulação de *arrays*: map, filter, reduce, sort, [dentre outros](https://www.w3schools.com/jsref/jsref_obj_array.asp).
- *Asynchronous* JavaScript: [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises), [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), [dentre outros](https://www.w3schools.com/js/js_asynchronous.asp).

## Frameworks, bibliotecas e tecnologias

- [JSON (*JavaScript Object Notation*)](http://www.json.org/)

- [jQuery (?)](http://jquery.com/)

- [React](https://reactjs.org/)

- [AngularJS](https://www.angularjs.org/)

- [Next.js](https://nextjs.org/)

- [Vue.js](https://vuejs.org/)

- [TypeScript](https://www.typescriptlang.org/)

- [Node.js](https://nodejs.org)

- [Deno](https://deno.land/)

- [Bun](https://bun.sh/)

## Additional resources

### Fundamentals

- [Attekita Dev: JAVASCRIPT do básico ao avançado (Mapa de estudos / Roadmap )](https://youtu.be/6YwbZbHRQ8w)

- [Código Fonte TV: Economize (DE VERDADE) Muitas Linhas de Código! 8 Formas de Usar Destructuring no Javascript](https://youtu.be/_17mgcmmHFU)

- [MSDN web docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)

- [Javascripting](https://github.com/workshopper/javascripting)

- [MDN: A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

- [MDN: Automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)

- [MDN: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

- [MDN: Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- [MDN: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

- [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)

- [MDN: String locale compare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

- [MDN: Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

- [Rocketseat](https://www.rocketseat.com.br/) (indicação de [Lorena Lopes](https://github.com/alorenalopes))

- [W3Schools: Window setInterval() Method](https://www.w3schools.com/jsref/met_win_setinterval.asp)

- [9 tricks to eliminate render blocking resources](https://blog.logrocket.com/9-tricks-eliminate-render-blocking-resources/)

### APIs

- [Axios](https://github.com/axios/axios)

- [Fetch](https://fetch.spec.whatwg.org/)

- [IBGE: API de localidades](https://servicodados.ibge.gov.br/api/docs/localidades)

- [IBGE: API de serviço de dados](https://servicodados.ibge.gov.br/api/docs)

- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)

- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

- [MDN: XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

- [Public APIs](https://github.com/public-apis/public-apis)

- [Random user generator](https://randomuser.me/)

### TypeScript

- [TypeScript](https://www.typescriptlang.org/)

- [O Hype do TypeScript – Hipsters #207](https://hipsters.tech/o-hype-do-typescript-hipsters-207/)

### JS Server side

- [Deno: A secure runtime for JavaScript and TypeScript](https://deno.land/)

- [Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine](https://nodejs.org/)

### Frameworks

- [Código Fonte TV: Angular (O Vídeo que Você Precisava para Começar no Framework) // Dicionário do Programador](https://youtu.be/Yf0rC7dERjg)

### Podcasts - Hipsters Ponto Tech

- [#16 - Single Page Applications](http://hipsters.tech/single-page-applications-hipsters-16/)

- [#38 - O Reino encantado do JavaScript](http://hipsters.tech/o-reino-encantado-do-javascript-hipsters-38/)

- [#58 - Evolução e Especificação do JavaScript Moderno](https://hipsters.tech/evolucao-e-especificacao-do-javascript-moderno/?submit=Ver)

- [#66 - React: o framework onipresente](https://hipsters.tech/react-o-framework-onipresente-hipsters-66/)

- [#78 - Javascript: Ember.js](https://hipsters.tech/javascript-ember-js-hipsters-78)

- [#142 - Angular vs React](https://hipsters.tech/angular-vs-react-hipsters-142/)

- [#169 - JavaScript: manual de sobrevivência 2020](https://hipsters.tech/javascript-manual-de-sobrevivencia-2020-hipsters-169/)

- [#236 - Evolução do JavaScript](https://hipsters.tech/evolucao-do-javascript-hipsters-ponto-tech-236/)

- [#383 - Evoluções no Angular e Outros Frameworks Front-End](https://www.hipsters.tech/evolucoes-no-angular-e-outros-frameworks-front-end-hipsters-ponto-tech-383/)

- [React e prevenção de fraudes na Escale - Hipsters On The Road #50](https://hipsters.tech/react-e-prevencao-de-fraudes-na-escale-hipsters-on-the-road-50/)

### Other resources

- [A Real-World Comparison of Front-End Frameworks with Benchmarks 2017](https://www.freecodecamp.org/news/a-real-world-comparison-of-front-end-frameworks-with-benchmarks-e1cb62fd526c/)

- [A Real-World Comparison of Front-End Frameworks with Benchmarks 2018](https://www.freecodecamp.org/news/a-real-world-comparison-of-front-end-frameworks-with-benchmarks-2018-update-e5760fb4a962)

- [A RealWorld Comparison of Front-End Frameworks 2020](https://medium.com/dailyjs/a-realworld-comparison-of-front-end-frameworks-2020-4e50655fe4c1)

- [10 Best Front-end Frameworks for Web Development in 2023](https://medium.com/@lunawolfe01/10-best-front-end-frameworks-for-web-development-in-2023-7a2bd3d82475)

- [Learning JavaScript Design Patterns](https://www.patterns.dev/posts/classic-design-patterns/)

- [Open Web Application Security Project (OWASP): Top 10 Web Application Security Risks](https://owasp.org/www-project-top-ten/)
