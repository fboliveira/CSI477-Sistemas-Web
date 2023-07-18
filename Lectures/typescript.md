# TypeScript

- [TypeScript](https://www.typescriptlang.org/) é uma linguagem (*super set*) desenvolvida pela Microsoft para adicionar tipagem estática (ou forte) ao JavaScript.

- O JavaScript possui tipos, mas não faz a verificação.

```javascript
const pessoa {
    nomeCompleto: "Pedro Oliveira"
}

console.log(pessoa.nome) // Isso é um problema em JavaScript
```

- O TypeScript pode ser utilizado para desenvolver aplicações JavaScript tanto do lado do servidor quanto do cliente (*browser*).

- O código em TypeScript é transpilado (convertido) para JavaScript.

- É possível converter o código para diferentes versões do JavaScript (*target*), seja pelo próprio compilador TypeScript ou utilizando [Babel](https://babeljs.io/).

- Os erros podem ser identificados no momento da compilação.

- Os códigos JavaScript são códigos válidos em TypeScript (*super set*)

## Tipagem

- Os tipos pode ser definidos por inferência.

```typescript
let message = "Olá, mundo!"; // string (implícito)
let name: string = "João"; // string (explícito)
let id = 0; // number
let city; // any
```

- *Type Assertions*: não modifica o tipo em tempo de compilação

- Auxiliar no *IntelliSense*

```typescript
let name; // any
name = "Pedro Oliveira"; // pode gerar confusão acerca do tipo
const length = (<string>name).length;
const startWithP (name as s).startsWith('P');
```

- *Inline annotation*: funciona em casos simples, sintaxe verbosa e não é possível utilizá-la em outros contextos (sem repeti-la).

```typescript
const process = (data: {id: number, name: string }) => {
    // ...
}

process({
    id: 2,
    name: "João"
});

```

- Os tipos podem ser definidos a partir de uma interface:

```typescript
interface Pessoa {
    id: number;
    nomeCompleto: string;
}

const pessoa: Pessoa {
    id: 1
    nomeCompleto: "Pedro Oliveira"
}

console.log(pessoa.nomeCompleto); // O tipo pode ser verificado no TypeScript
```

- Definição do tipo do parâmetro a partir da interface:

```typescript
const process = (data: Pessoa) => {
    //... 
}

process(pessoa);
```

- Tipos complexos podem ser definidos por meio da união de tipos.

```typescript
type Logged = true | false;
type ConnectionState = "opening" | "closed" | "listening";
```

## Enumerators 

- Definição de um conjunto de constantes nomeadas

- Constantes separadas:

```typescript
const DB_MySql = 1
const DB_Pgsql = 2
const DB_SQLite = 3
```

- Enum

```typescript
enum DatabaseTypes {
    MySql = 1,
    Pgsql,
    SQLite
}

const connection = DatabaseTypes.MySql

console.log(connection)
```

## Orientação a objetos

- O TypeScript fornece recursos de orientação a objetos, como:
    = classes, interfaces, construtores, modificadores (público e privado), *generics*, dentre outros.

### Classes

- Definição da classe
- Modificadores de acesso
- Múltiplos construtores não são permitidos - parâmetros como opcionais.

```typescript
class Pessoa {

    id: number; // public (padrão), private
    nomeCompleto: string;

    // Definição do construtor com os parâmetros e a associação com as propriedades
    constructor(id?: number, nomeCompleto?: string) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
    }

    // As propriedades id e nome definidas anteriormente podem ser retiradas se esta sintaxe for utilizada
    constructor(private id?: number, private nomeCompleto?: string) {
    }

    process() {
        // ...
    }

}

const pessoa = new Pessoa();
pessoa.process();

```

## Continuação

- Existem diversos outros tipos e funcionalidades. É importante você verificar a [documentação](https://www.typescriptlang.org/docs/) da linguagem.

## Outras referências

- [Código Fonte TV: TypeScript // Dicionário do Programador](https://youtu.be/gmupEp468lY)

- [GeeksForGeeks: TypeScript](https://www.geeksforgeeks.org/typescript/)

- [Programming with Mosh: TypeScript Tutorial - TypeScript for React - Learn TypeScript](https://youtu.be/NjN00cM18Z4)

- [W3Schools: TypeScript tutorial](https://www.w3schools.com/typescript/typescript_intro.php)
