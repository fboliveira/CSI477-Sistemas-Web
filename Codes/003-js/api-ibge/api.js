async function carregarEstados() {

    // https://servicodados.ibge.gov.br/api/v1/localidades/estados


    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')

    console.log(response);

    const estados = await response.json();
    console.log(estados);

    preencherSelectEstados(estados);


}

async function carregarCidades() {

    limparSelect("cidades");

    // Qual é o estado que está selecionado:
    const selectEstados = document.getElementById("estados");

    // Índice do option selecionado:
    const estado_index = selectEstados.selectedIndex;

    // Value do option selecionado: ID do estado
    const estado_value = selectEstados.options[estado_index].value;

    if (estado_index === 0 || estado_value === "") {
        return;
    }

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_value}/municipios`)   
    
    const cidades = await response.json();
    preencherSelectCidades(cidades);

}

function preencherSelectCidades(cidades) {

    // Recuperar select pelo ID
    const selectCidades = document.getElementById("cidades");

    // Percorrer o array de cidades
    for(const cidade of cidades) {
        
        // Inserir cada cidade no select
        const { id, nome } = cidade;

        // Criar um elemento do tipo option para a cidade
        const option = document.createElement("option");

        // Atributos os valores
        option.value = id;
        option.innerHTML = nome;

        // Inserir o option no select
        selectCidades.appendChild(option);

    }


}

function preencherSelectEstados(estados) {

    for(let i in estados) {
        // console.log(estados[i].nome);
    }

    limparSelectEstados();

    const select = document.getElementById("estados");

    estados.sort( (a, b) => a.nome.localeCompare(b.nome) );

    const regiao_norte = estados.filter( (estado) => estado.regiao.id === 3 );
    console.log(regiao_norte);

    for(let estado of estados) {
        // const nome = estado.nome;
        // const uf = estado.sigla;

        // Destructing
        const { id, nome, sigla } = estado;

        console.log(nome, sigla);

        const option = document.createElement("option");

        option.value = id;
        // option.innerHTML = nome + ' - ' + sigla
        // Template literals
        option.innerHTML = `${nome}-${sigla}`

        select.appendChild(option);

        // hydration


    }

}

function limparSelectEstados() {

    const select = document.getElementById("estados");

    while(select.length > 1) {
        select.remove(1);
    }

}

function limparSelect(campo) {

    const select = document.getElementById(campo);

    while(select.length > 1) {
        select.remove(1);
    }

}

// Classica
function soma(a, b){
    return a + b;
}

// Arrow functions
const somaArrow = ( a, b ) => {
    return a + b;
}

// Arrow function in line: retorno direto
const somaArrowInLine = (a, b) => a + b;