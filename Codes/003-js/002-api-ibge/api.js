async function carregarEstados() {

    // https://servicodados.ibge.gov.br/api/v1/localidades/estados





    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')

    const estados = await response.json();
    console.log(estados);

    preencherSelectEstados(estados);


    // Outra maneira de manipulacao
    // await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    //     .then((response) => response.json())
    //     .then((estados) => console.log(estados))

}

function preencherSelectEstados(estados) {

    // hydration
    
    for(let i in estados) {
        // console.log(estados[i]);
        console.log(i);
    }

    for(let estado of estados) {
        console.log(estado);
    }

}

// Arrow functions
// Classica
function soma(a, b) {
    return a + b;
}

// Arrow function
const somaArrow = (a, b) => {
    return a + b;
}

// Arrow function in line (return direto)
const somaArrowInLine = (a, b) => a + b;