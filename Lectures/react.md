# React

- Este documento é uma resumo bem simplificado sobre React. As descrições apresentadas aqui foram retiradas e/ou adaptadas da documentação oficial.

- O [**React**](https://react.dev/) é uma **biblioteca** JavaScript para a construção de interfaces.

- A biblioteca é baseada em **componentes**, os quais armazenam os seus estados e renderizam na tela os dados.

## JSX/TSX

- O JSX é uma extensão do JavaScript e utiliza uma sintaxe parecida com o XML.

- O JSX não é obrigatório. Entretanto, a sintaxe é mais amigável (opinião particular).

- A versão correspondente em TypeScript é o TSX.

- Expressões JavaScript podem ser inseridas dentro de chaves ```{ }```.

```jsx
const name = 'Mundo';
const message = <h1>Olá, {name}!</h1>;
```

- Pode ser utilizado como retorno de funções.

- Após a compilação, o JSX é transformado em uma chamada de função JavaScript.

```jsx
function getMessage(user) {
    return <h2>Usuário: {user.name}</h2>
}
```

- O JSX produz elementos do React.

- O JSX/React DOM utiliza o padrão *camelCase* para propriedades como convenção para evitar conflitos com os atributos HTML.

  - Por exemplo, no lugar de ```class``` utiliza-se ```className```

- Os elementos são renderizados no DOM.

- Podemos utilizar uma *tag* HTML para renderizar toda a interface.

```html
<div id="root"></div>
```

- Essa *tag* será recuperada pelo ReactDOM e os elementos serão renderizados.

- Apenas o que foi modificado é atualizado no DOM pelo React.

- O React utiliza *Virtual DOM*, que é uma cópia do DOM atual, para verificar as mudançcas e atualizar de maneira rápida a interface. Veja mais sobre isso [aqui](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom) e [aqui](https://www.geeksforgeeks.org/reactjs-virtual-dom/)

## Componentes

- Os [componentes](https://react.dev/reference/react-dom/components) são elementos independentes e reutilizáveis.

- A interface pode ser composta por diferentes componentes.

- Os componentes são entendidos como funções JavaScript, as quais recebem os dados de entrada (*propriedades* ou *props*) e retornam o quê e como deve ser renderizado em tela.

- Os componentes podem ser escritos como *function* (*function components*) ou *ES6 class*. Ambas descrições são equivalentes para o React.

- Os componentes são definidos com a inicial em maiúsculo.

```jsx
// Function component
function Username(props) {
    return <h2>Usuário: {props.name}</h2>
}
```

```jsx
// ES6 class component
class Username extends React.Component {
    render() {
        return <h2>Usuário: {this.props.name}</h2>
    }
}
```

- A renderização do componente é realizada a partir da definição do elemento e a atribuição das propriedades, quando necessário.

- Composição de componentes

```jsx
// App master component
function App() {
    return (
        <div className="navbar">
            <Username name="Ana" />           
            <Username name="João" />
            <Username name="Pedro" />
        </div>
    );
}

// Rendering app component
const root = ReactDOM.createRoot(document.getElementById('root'));
// Create element
const element = <App />;
// Render
root.render(element);
```

### Estados

- O estado (*state*) contém dados específicos do componente que podem ser alterados no decorrer da aplicação.

- Atributos e dados que não são modificados não devem ser incluídos como estados.

- Eles não devem ser mutados diretamente.

- Por meio dos [*Hooks*](https://react.dev/reference/react) é possível manipular os estados e outras características sem a necessidade de se escrever uma classe.

```jsx
function Tasks() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Número atual de tarefas: {count}</p>
        </div>
    );
}
```

## Criação de uma aplicação

- Inicialmente, as aplicações eram criadas a partir do utilitário [Create React App (CRA)](https://create-react-app.dev/)

- As instruções estão definidas [aqui](https://create-react-app.dev/docs/getting-started)

- Existem configurações avançadas que podem ser encontradas [aqui](https://create-react-app.dev/docs/advanced-configuration/)

- O comando para criar uma aplicação com o *template* do TypeScript é:

```bash
npx create-react-app Nome_Da_Aplicacao --template typescript
```

- Substitua ```Nome_Da_Aplicacao``` para o nome desejado.

- :warning: Contudo, o CRA está se tornando (se tornou) **obsoleto**.

- Uma alternativa ao utilitário padrão é o [Vite](https://vitejs.dev/)

- O comando equivalente para criar uma aplicação com o *template* do TypeScript é:

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest Nome_Da_Aplicacao -- --template react-ts
```

- A documentação do Vite pode ser encontrada [aqui](https://vitejs.dev/guide/)

## Considerações gerais

- O React é uma biblioteca (e não um *framework*). Isso implica que ele não tem todos os mecanismos necessários para se criar um aplicação, além de ser preciso implementar diferentes funcionalidades comuns, como roteamento, carregamento de dados, dentre outras.

- Em projetos maiores, a gestão e a escalabilidade ficam comprometidas.

- Por isso, o próprio React indica que sejam utilizados *frameworks* para o desenvolvimento. Veja [aqui](https://react.dev/learn/start-a-new-react-project)

- O [Next.js](nextjs.md) é um *framework* completo para desenvolvimento de aplicações utilizando o React.

- Por isso, seguiremos o desenvolvimento com ele.

## Outras Referências

- [Código Fonte TV: React JS // Dicionário do Programador](https://youtu.be/NhUr8cwDiiM)

- [Filipe Deschamps: Se Você Passar Por Esses 5 Desafios, Você Aprendeu React JS](https://youtu.be/aJR7f45dBNs)

- [freeCodeCamp.org: React Course - Beginner's Tutorial for React JavaScript Library [2022]](https://youtu.be/bMknfKXIFA8)

- [Hipsters Ponto Tech #142: Angular vs React](https://www.hipsters.tech/angular-vs-react-hipsters-142/)

- [Hipsters Ponto Tech #209: Guia do iniciante em React](https://www.hipsters.tech/guia-do-iniciante-em-react-hipsters-209/)

- [Hipsters Ponto Tech #258: Do Front End ao React](https://www.hipsters.tech/do-front-end-ao-react-hipsters-ponto-tech-258/)

- [Rocketseat: COMEÇANDO NO REACT.JS EM 2022](https://youtu.be/pDbcC-xSat4)

- [Rocketseat: TUDO que você deve estudar de JavaScript antes do React](https://youtu.be/37SwqREHRGI)
