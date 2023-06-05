# JavaScript ES6 and beyond

This lecture summarizes the main features on JavaScript ES6 and beyond. Those features, as well as examples, were adapted from: [JavaScript ES6, ES7, ES8: Learn to Code on the Bleeding Edge (Full Course)](https://youtu.be/nZ1DMMsyVyI).

## Var, let & const

[MDN JavaScript variable declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)

> **var**: Declares a variable, optionally initializing it to a value.  
> Var declarations are processed before any code is executed. This is called [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) [(Source)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#description).

```js
console.log(num); // undefined
var num = 5;
console.log(num); // 5
```

> **let**: Declares a block-scoped, local variable, optionally initializing it to a value. [(Source)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

```js
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1
```

> **const**: Declares a block-scoped, read-only named constant.

```js
const value = 5;

const names = [];
names.push('Ana', 'Pedro', 'João', 'Brígida', 'Hugo');
console.log(names);

const person = {};
person.firstName = 'Hugo';
console.log(person);
```

## Template Literals

```js
const first = 'Hello'
const second = 'World'

const message = `Message: ${first}, ${second} !`
```

## Destructuring

```js
const person = {
    firstName: 'Marie',
    middleName: 'Salomea',
    lastName: 'Sklodowska–Curie',
    nobelPrizes: [
        'Chemistry', 'Physics'
    ],
    born: 1867,
    died: 1934
};
```

Destructuring objects:

```js
const { firstName, lastName, nobelPrizes } = person;
console.log( `${firstName} ${lastName}` );
```

Destructuring arrays:

```js
const [ firstPrize, secondPrize ] = nobelPrizes;
```

## Object Literal

```js
const firstName = 'Marrie';
const lastName = 'Sklodowska–Curie';

const person = {
    firstName, lastName
}
console.log(person);
```

## For of loop

```js
const names = ["Ana", "Pedro", "João", "Hugo", "Brigida"];

for(const name of names) {
    console.log(name);
}
```

## Spread operator

```js
const people = ["Ana", "Pedro", "João"];
const pets = ["Hugo", "Brigida"];

const names = [...people, ...pets];
console.log(names);
```

## Rest operator

```js
function show(name) {
    console.log(name);
}

show("Ana", "Pedro", "João");

function showRest(...name) {
    console.log(name);
}

showRest("Ana", "Pedro", "João");

```

## Arrow Functions

```js
// "Traditional" Function
function sum(a, b) {    
    return a + b;
}
console.log(sum(3, 4));

// Arrow function version
const sumArrow = (a, b) => a + b;
console.log(sumArrow(3, 4));
```

## Default Params

```js
// B has a default value
function sum(a, b = 0) {    
    return a + b;
}
// Only A is passed to the function
console.log(sum(3));
```

## Export & import

Node.js requires "type": "module" in the package.json.

```js
// connection.js
export function connect() {
    console.log("Connecting to database...");
}


// index.js
import { connect } from './connection.js';
connect();
```

## Async/Await

```js
// Async functions return a Promise
async function hello() {
    return "Hello, World!";
}

// It is equivalent to:
function hello() {
    return Promise.resolve("Hello, World!");
}

// Await waits for a Promise
const message = await hello();
console.log(message);

// You may also process a promise like this:
hello().then( (message ) => console.log(message));

```

There are other interesting examples [here](https://www.w3schools.com/js//js_async.asp) and [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

## Other functionalities

- [Can I use ... ?](https://caniuse.com/)

You might observe other functionalities here:

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)

- [Sets](https://www.w3schools.com/js//js_object_sets.asp)
