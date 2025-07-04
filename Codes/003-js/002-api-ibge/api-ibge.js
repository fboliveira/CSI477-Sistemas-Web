const URL_LOCALIDADES = 'https://servicodados.ibge.gov.br/api/v1/localidades'

// Recuperar os estados a partir da API
// https://servicodados.ibge.gov.br/api/v1/localidades/estados

// Função canônica/clássico
async function recuperarListaDeEstados() {
    
    // Requisição -> API (json)

    const response = await fetch(`${URL_LOCALIDADES}/estados`)
    const estados = await response.json()

    //console.log(estados)

    // Retornar a lista de estados
    return estados;

}

async function carregarEstados() {

    // Recuperar a lista de estados - API
    const estados = await recuperarListaDeEstados();

    // DOM -> hydration
    // Preencher o select de estados com o retorno
    // -- Percorrer o array
    // -- Para cada item, inserir um option

    // DOM: recuperar o select de estados
    const selectEstados = document.getElementById("estados")

    // Percorrer o array retornado pela API
    // for-in (C: for(int i = 0; i < tam; i++))
    // for(const i in estados) {
    //     console.log(estados[i].nome)
    // }

    // Ordenar os estados pelo nome - ASC
    // Array.sort()
    // Arrow function
    estados.sort(
        (a, b) => a.nome.localeCompare(b.nome)
    )

    limparSelect("estados")

    // for-of (Java: for-each -> for(item : Lista))
    for(const estado of estados) {
        
        // const id = estado.id;
        // const nome = estado.nome;
        // const sigla = estado.sigla;

        // const regiao_id = estado.regiao.id;

        // Destructing 
        // JSON
        const { id, nome, sigla } = estado;
        // Array -> destructing
        // pessoa = [1, 'Fernando']
        // const { id, nome } = pessoa

        const option = document.createElement("option");

        option.value = id;
        // option.innerHTML = nome + '-' + sigla;
        // Template literals
        option.innerHTML = `${nome}-${sigla} (${id})` ;

        selectEstados.appendChild(option);

    }

}

function limparSelect(selectId) {

    const campoSelect = document.getElementById(selectId)

    // Remover options do select, com exceção do "Selecione:"
    // Selecione -> option de index 0;

    while(campoSelect.length > 1) {
        campoSelect.remove(1) // index
    }

}

// Cidades:
async function carregarCidades() {

    limparSelect("cidades")

    // Qual é o estado (UF) que está selecionado? ID do Estado
    // -- recuperar o select de estados
    const selectEstados = document.getElementById("estados")
    // -- índice do estado selecionado
    const estado_index = selectEstados.selectedIndex;
    // -- id (value) do estado selecionado
    const estadoId = selectEstados.options[estado_index].value;

    if ( estado_index === 0 || estadoId === "" ) {
        return;
    }

    const cidades = await recuperarListaDeCidades(estadoId);

    const selectCidades = document.getElementById("cidades");

    for(const cidade of cidades) {

        const { id, nome } = cidade

        const option = document.createElement("option");

        option.value = id
        option.innerHTML = nome

        selectCidades.appendChild(option)

    }

}

async function recuperarListaDeCidades(estadoId) {

    // URL: .../estados/{id}/municipios
    // Template literals -> ${}
    const response = await fetch(`${URL_LOCALIDADES}/estados/${estadoId}/municipios`)

    const cidades = await response.json()

    console.log(cidades)

    return cidades;

}

async function carregarPaises() {

    limparSelect("paises")

    const paises = await recuperarListaDePaises()

    paises.sort((a, b) => a.nome.localeCompare(b.nome))

    const selectPaises = document.getElementById("paises");

    for(const pais of paises) {

        const { id, nome } = pais

        const option = document.createElement("option");

        option.value = id.M49
        option.innerHTML = `${nome} (${id["ISO-ALPHA-2"]})`

        selectPaises.appendChild(option)

    }

}

async function recuperarListaDePaises() {

    // URL: .../paises
    // Template literals -> ${}
    const response = await fetch(`${URL_LOCALIDADES}/paises`)

    const paises = await response.json()

    console.log(paises)

    return paises;

}

function carregarDados() {
    carregarEstados()
    carregarPaises()
}




/// Funções em JS

// Funcao: Recebe dois parâmetros e retorna a soma.

// Clássica/canônica
function soma(a, b) {
    return a + b;
}

soma(5, 6)

// Arrow functions: (parâmetros) => { 
//      corpo 
// }
const somaArrow = (a, b) => {
    return a + b;
}

somaArrow(5, 6)

// Arrow function - inline (return direto)
const somaArrowInLine = (a, b) => a + b;
somaArrowInLine(5, 6)