# TypeScript

- [TypeScript](https://www.typescriptlang.org/) é uma linguagem desenvolvida pela Microsoft para adicionar tipagem estática ao JavaScript.

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

## Tipagem

- Os tipos pode ser definidos por inferência.

```typescript
let message = "Olá, mundo!"; // string (implícito)
let name: string = "João"; // string (explícito)
let id = 0; // number
```

- Os tipos podem ser definidos a partir de uma interface

```typescript
interface Pessoa {
    nomeCompleto: string;
}

const pessoa: Pessoa {
    nomeCompleto: "Pedro Oliveira"
}

console.log(pessoa.nomeCompleto); // O tipo pode ser verificado no TypeScript
```

- Tipos complexos podem ser definidos por meio da união de tipos.

```typescript
type Logged = true | false;
type ConnectionState = "opening" | "closed" | "listening";
```

- Existem diversos outros tipos e funcionalidades. É importante você verificar a [documentação](https://www.typescriptlang.org/docs/) da linguagem.

## Outras referências

- [Código Fonte TV: TypeScript // Dicionário do Programador](https://youtu.be/gmupEp468lY)

- [GeeksForGeeks: TypeScript](https://www.geeksforgeeks.org/typescript/)

- [Programming with Mosh: TypeScript Tutorial - TypeScript for React - Learn TypeScript](https://youtu.be/NjN00cM18Z4)

- [W3Schools: TypeScript tutorial](https://www.w3schools.com/typescript/typescript_intro.php)
