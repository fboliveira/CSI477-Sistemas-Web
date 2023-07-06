# Next.js

- Este documento é uma resumo bem simplificado sobre o Next.js. É importante que você se atualize a partir da [documentação](https://nextjs.org/docs) do *framework*.

- O [Next.js](https://nextjs.org/) é um **framework** para desenvolvimento de aplicações.

- Ele se difere do [React](./react.md), em especial, pelo processo de desenvolvimento, pelo mecanismo de renderização e pela criação das rotas.

- O React renderiza as aplicações no **cliente** (e no servidor a partir da versão 18), enquanto o Next.js pode renderizar tanto no **cliente quanto no servidor**.

- *Search Engine Optimization* (Otimização para Mecanismos de Busca)

- SEO e React.js: implicações com interfaces renderizadas apenas no cliente

- SEO e Next.js: renderiza no cliente e no servidor e consegue aperfeiçoar a indexação por mecanismos de busca.

- *Full stack applications*: rotas, renderização, carregamento de dados, definição de estilos, dentre outros.

- [Conhecimentos essenciais](https://nextjs.org/docs/getting-started/react-essentials) do React para utilizar o Next.js:
    = *Server and client components* e quando utilizar cada um deles.
    = *Hooks*
    = Carregamento de dados.
    = Dentre outros.

## Criação da aplicação

```bash
npx create-next-app@latest <app-folder-name>
```

- Com a execução do comando, alguns definições serão solicitadas.

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias? No / Yes
```
- Antes da versão 13, o Next.js utilizava uma estrutura de pastas e funcionamento definida como *Pages Router*

- Entretando, a nova versão, a **_App Router_** é a recomendada para novas projetos e suporta as últimas funcionalidades do React.

- Para executar a aplicação executamos ```npm run dev``` para iniciarmos o servidor.

- A aplicação estará disponível no endereço <http://localhost:3000>.

- A estrutura do projeto está disponível [aqui](https://nextjs.org/docs/getting-started/project-structure).

## Construção da aplicação

- Páginas e layout.

- Definição de estilos - TailwindCSS.

- Definição de rotas.

- Renderização.

- Carregamento de dados: integração com o *backend*

- Operações de CRUD.

## Outras referências

- [JavaScript Mastery - Next.js 13 Full Course 2023 | Build and Deploy a Full Stack App Using the Official React Framework](https://youtu.be/wm5gMKuwSYk)

- [Rocketseat - Crie componentes DESSA FORMA no React (Pattern de composição)](https://youtu.be/oPOKpSFqy-I)

- [Web Dev Simplified - Next.js Server Actions Change Everything About React](https://youtu.be/10Yt5vRimNI)


