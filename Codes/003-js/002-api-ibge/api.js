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

async function carregarDadosCidades() {

    // Qual é o estado selecionado
    const selectEstados = document.getElementById("estados");

    const estado_index = selectEstados.selectedIndex;

    limparSelect("cidades");

    const estado_id = selectEstados.options[estado_index].value;

    if (estado_index === 0 || estado_id === "") {
        return;
    }

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/municipios`);

    const cidades = await response.json();
    preencherSelectCidades(cidades);

}

function preencherSelectEstados(estados) {

    // hydration
    
    // for(let i in estados) {
    //     // console.log(estados[i]);
    //     console.log(i);
    // }

    const select = document.getElementById("estados");

    limparSelect("estados");

    estados.sort( (a, b) => a.nome.localeCompare(b.nome) );

    for(let estado of estados) {
        // const id = estado.id;
        // const nome = estado.nome;
        // const sigla = estado.sigla;

        // Destructing
        const { id, nome, sigla } = estado;
        // const [ ] = estado;

        const option = document.createElement("option");

        option.value = id;
        // Template literals
        option.innerHTML = `${nome}-${sigla}`;

        select.appendChild(option);
 
    }

}

function preencherSelectCidades(cidades) {

    const selectCidades = document.getElementById("cidades");

    for(const cidade of cidades) {

        const { id, nome } = cidade;

        const option = document.createElement("option");

        option.value = id;
        option.innerHTML = nome;

        selectCidades.appendChild(option);

    }
}

function limparSelect(idDoCampo) {
    const select = document.getElementById(idDoCampo);

    while(select.length > 1) {
        select.remove(1);
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