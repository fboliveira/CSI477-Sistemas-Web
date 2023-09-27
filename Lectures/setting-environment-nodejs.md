# Preparação do ambiente de desenvolvimento

## Considerações iniciais

Este documento apresenta uma sugestão de ambiente de desenvolvimento para utilização na disciplina. Vocês têm total autonomia para escolher outros sistemas operacionais, editores, bem como suas extensões, servidores e demais itens.

Nós precisaremos das seguintes ferramentas para o desenvolvimento das atividades:

- Uma IDE/editor de código;
- O *runtime JavaScript* [Node.js](https://nodejs.org/en/);
- Um sistema de banco de dados.

Você pode utilizar o *runtime* e o servidor de banco de dados via [Docker](https://www.docker.com/) também.

Nós utilizaremos o ambiente JavaScript/[TypeScript](https://www.typescriptlang.org/) para a construção de aplicações. Contudo, o desenvolvimento Web não se limita à apenas isso. Existem diferentes linguagens, tecnologias, *frameworks*, e tudo mais, conforme o contexto e o problema abordados.

Para o **trabalho final**, outras linguagens e outros *frameworks* podem ser utilizados. A sugestão é que sejam empregadas tecnologias diferentes daquelas que você já conhece/domina. Assim, você ampliará o seu conhecimento e o seu portfólio.

É **importante** você observar que: linguagens são apenas meios e ferramentas para resolvermos os problemas. ***Não tenha apego por suas linguagens e seus frameworks***! Hoje, elas podem ser as mais utilizadas, mas logo elas podem se tornar apenas código legado.

## Sistema operacional

Se você observar alguma pesquisa de [*market share* dos servidores web](https://news.netcraft.com/archives/category/web-server-survey/), identificará que a maioria é baseada em software livre. Isso pode ser justificado pelo tipo de licença (custo) das aplicações tanto para quem precisa hospedar alguma aplicação quanto para quem provê o serviço.

Como o sistema baseado em UNIX **difere entre maiúsculas e minúsculas** para o nome de arquivos, o que não acontece no Windows, ao implantar a aplicação nesses servidores, diversos problemas podem ocorrer. Além disso, ambientes Linux possuem gerenciadores de pacotes nativos, o que facilita a instalação e a configuração. Eu descobri recentemente que existe uma aplicação externa para o ambiente Windows, o [Chocolatey](https://chocolatey.org/). Entretanto, eu nunca utilizei esse gerenciador e também não sei se ele consegue resolver conflitos e a falta de dependências nas instalações. Quem já utilizou esse gerenciador, por favor, compartilhe a experiência.

Essas considerações não são tentativas de doutrinação Linux (por mais que possa parecer :smile:). Sinta-se livre para utilizar o sistema operacional que for mais conveniente. De todo modo, eu sugiro que você também avalie a possibilidade de utilizar alguma distribuição Linux para desenvolvimento, principalmente Web. [Escolha uma distribuição qualquer](https://distrowatch.com/) e prepare o seu ambiente.  

Segue uma sugestão de vídeo para ajudar na configuração do Ubuntu: [Fabio Akita - O Guia DEFINITIVO de UBUNTU para Devs Iniciantes](https://youtu.be/epiyExCyb2s). Em outros canais do [YouTube](https://www.youtube.com/), você encontrará também diversos tutoriais para diferentes distribuições.

## Editor

O editor que eu utilizarei na disciplina neste período é o [VS Code](https://code.visualstudio.com). Ele tem instalação para Windows, Linux e MacOS, além de diversas extensões que auxiliam no desenvolvimento.

Faça o download conforme a sua plataforma e instale o editor. O processo é simples e você não terá problemas com isso (~~nunca se sabe~~).

### Extensões

Eu vou sugerir alguns complementos para serem instalados no editor. No decorrer da disciplina, outras extensões podem ser adicionados. Além disso, você também pode contribuir indicando outras instalações.

Verifique sobre o processo de instalação das extensões, bem como sobre o *marketplace* em [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery).

- [**Auto Complete Tag** (Jun Han)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag): esta extensão é um pacote que instala os seguintes complementos:  

    = [**Auto Close Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): insere automaticamente a *tag* de fechamento em HTML/XML. Se você digitar `<div>`, é inserido automaticamente `</div>`.

    = [**Auto Rename Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): permite renomear os pares de *tags* HTML ao mesmo tempo. Por exemplo, se você quiser mudar um par `<p></p>` para `<div></div>`, quando você alterar o início de `<p>` para `<div>`, o fechamento também é alterado para `</div>`.

- [**ESLint** (Microsoft)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): analisa o código JavaScript e ajuda na resolução de problemas.

- [**Live Server** (Ritwick Dey)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): um servidor web local é iniciado e permite a visualização de páginas HTML. Isso é útil para desenvolvimento *frontend* em  projetos menores.

- [**REST Client** (Huachao Mao)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client): cliente REST diretamente no VSCode.

Algumas extensões apresentam funcionalidades adicionais e visuais, como cores, ícones e demais itens. Seguem algumas delas:

- [**Color Highlight** (Sergii Naumov)](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight): esta extensão destaca as cores utilizadas em documentos CSS/HTML.

- [**Conventional Commits** (vivaxy)](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): esta extensão auxilia e padroniza a crição dos commits (Dica da [Yasmine Melo](https://github.com/MeloYasmine)).

- [**Dracula Official** (Dracula Theme)](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula): tema de cores mais agradáveis e menos cansativa para o editor.

- [**GitLens** (GitKraken)](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): funcionalidades adicionais para o Git.

- [**Material Icon Theme** (Philipp Kief)](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): muda os ícones dos arquivos conforme o seu tipo (css, js, php, html, dentre outros).

Existem diversas extensões para HTML, CSS, JavaScript e demais *frameworks*. Durante o andamento do curso, podemos instalar esses complementos, bem como, vocês podem indicar as suas preferidas.

## Servidores, linguagens e *frameworks*

As instalações descrita nesta seção se referem ao desenvolvimento *backend*. Nós precisaremos de um servidor HTTP e a linguagem utilizada, um servidor de banco de dados e o *framework* para desenvolvimento.

### Instalação do Node.js

A instalação do [Node.js](https://nodejs.org/en/) costuma ser realizada sem complicações, ~~quando realizadas em condições normais de temperatura e pressão, desprezando o atrito~~.

Você pode selecionar na página de [Downloads](https://nodejs.org/en/download/) a versão correspondente ao seu sistema operacional. Vamos utilizar a distribuição **LTS**. Siga as instruções de instalação conforme o seu contexto.

Para verificar a instalação e as versões, digite o seguinte comando no seu terminal:

```bash
node --version
```

Você terá uma resposta similar a:

```bash
v18.18.0
```

Após isso, verique a versão do NPM digitando seguinte comando no terminal:

```bash
npm --version
```

Você terá uma resposta similar a:

```bash
9.6.7
```

Se algum comando falhar, certifique-se que não ocorreu nenhum problema durante a instalação. Caso a instalação esteja correta, você precisará inserir o caminho da instalação no `PATH`. Veja sobre isso [aqui](https://www.computerhope.com/issues/ch000549.htm).

### Servidor de banco de dados

Nós precisaremos de um serviço de banco durante o curso. Você pode utilizar qualquer [SGBD](https://pt.wikipedia.org/wiki/Sistema_de_gerenciamento_de_banco_de_dados) relacional ou não. Seguem algumas sugestões:

- [PostgreSQL](https://www.postgresql.org/download/)

- [MySQL](https://dev.mysql.com/downloads/mysql/)

- [SQLite](https://sqlite.org/download.html)

Mesmo que seja utilizado na disciplina uma SGBD relacional, você tem autonomia para escolher outro modelo, como o [MongoDB](https://www.mongodb.com/). Os bancos de dados indicados também são disponibilizados via [Docker](https://www.docker.com/) por meio de [containers](https://www.docker.com/resources/what-container). É uma excelente alternativa à instalação!

Para que vocês possam ter acesso aos dados que eu utilizar nas aulas, optarei pelo **SQLite**. Assim, eu posso incluir o arquivo do bando de dados no GitHub.

## Plataforma de controle de versão

Todas as atividades serão submetidas para o [GitHub](https://github.com/), uma plataforma colaborativa e com controle de versão. Para que você consiga atualizar o seu repositório, você precisa ter instalado no seu computador o [Git](https://git-scm.com/).

Alguns sistemas operacionais já possuem o Git instalado. Para verificar isso, abra o seu terminal ou similar, e digite:

```bash
git --version
```

Se você tiver uma resposta como a seguinte, está tudo correto:  

```bash
git version 2.40.1
```

Caso contrário, você precisará instalar o aplicativo.

Eu sugiro que você verifique o conteúdo complementar sobre Git e GitHub [aqui](git-and-github.md)

O processo de atualização do repositório pelo VSCode pode ser entendido [aqui](https://medium.com/@Zeroesandones/how-to-commit-and-push-your-changes-to-your-github-repository-in-vscode-77a7a3d7dd02).

## Considerações finais

Existem diversas outras maneiras de preparar um ambiente de desenvolvimento conforme o que precisamos, além de realizar as ações diferente do que foi proposto. Se você conhece uma maneira mais prática, por favor, compartilhe a sua experiência.

Você pode contribuir com esse roteiro, seja com correções no texto, indicação de outros processos para instalação e tudo mais, me enviando um e-mail ou a partir de uma *issue* ou *pull request*. Veja sobre isso [aqui](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request). Todas as contribuições são muito bem-vindas!

Se você chegou até aqui e deu tudo certo:

![Win](https://media.giphy.com/media/YPKIJdwYWJ3Ik/giphy.gif)

![Victory!](https://media.giphy.com/media/hflpSaYuR8xK8/giphy.gif)

Caso contrário, entre em contato, e:

![Try again](https://media.giphy.com/media/Jt4sQOFEh29Ob8KAxg/source.gif)

![Keep going](https://media.giphy.com/media/4WEUNLjAKOICdjjxVt/source.gif)

Muito obrigado!  

**Um ótimo curso! E que a Força esteja com você!**  
