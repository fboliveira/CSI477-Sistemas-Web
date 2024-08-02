// Recuperar a lista de estados - API
async function recuperarListaEstados() {

    // API: Método/URL
    // https://servicodados.ibge.gov.br/api/v1/localidades/estados

    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');

    const estados = await response.json();

    // console.log(estados);
    preencherSelectEstados(estados);
        

}

// Carregar o select de estados com os dados
function preencherSelectEstados(estados) {

    // hydration

    // for(let i in estados) {
    //     console.log(estados[i].nome)
    // }

    const select = document.getElementById("estados");

    estados.sort()

    for(let estado of estados) {
        // const id = estado.id;
        // const nome = estado.nome;
        // const sigla = estado.sigla;

        // Destructing
        const { id, nome, sigla } = estado;
        // const [ ] = estado;

        const option = document.createElement("option");

        option.value = id;
        option.innerHTML = nome;

        select.appendChild(option);


    }

}

// Arrow function =>

// Classica
function soma(a, b) {
    return a + b;
}

// Arrow function: () => { }
const somaArrow = (a, b) => {
    return a + b;
}

somaArrow(5, 6);

// Arrow function in line (return direto)
const somaArrowInLine = ( a, b ) => a + b;