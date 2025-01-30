// https://servicodados.ibge.gov.br/api/v1/localidades/estados

const URL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

async function carregarEstados() {

    const response = await fetch(URL)
    console.log(response)
    const estados = await response.json()
    console.log(estados)

    preencherSelectEstados(estados)

}

function preencherSelectEstados(estados) {

    // for(const i in estados) {
    //     console.log(estados[i].nome)
    // }

    const select = document.getElementById("estados")
    limparSelect("estados")

    estados.sort( (a, b) => a.nome.localeCompare(b.nome))

    for(const estado of estados) {
        // console.log(estado.nome)

        // const id = estado.id;
        // const nome = estado.nome;
        // const sigla = estado.sigla;

        // Destructing
        const {id, nome, sigla} = estado;

        const option = document.createElement("option");
        option.value = id;
        // option.innerHTML = nome + '-' + sigla;
        // Template literals
        option.innerHTML = `${nome}-${sigla}`;

        select.appendChild(option);

        // hydration

    }

}

function limparSelect(idDoCampo) {

    const select = document.getElementById(idDoCampo)

    while(select.length > 1) {
        select.remove(1)
    }
}

function carregarCidades() {

    limparSelect("cidades")

    // Qual é o estado que está selecionado:
    // -- Recuperar o select de estados
    const selectEstados = document.getElementById("estados")

    // Índice do option selecionado:
    const index = selectEstados.selectedIndex

    // ID do estado: value do option selecioado - index
    const id = selectEstados.options[index].value

    if (index === 0 || id === "") {
        return
    }

    // URL/id/municipios
    const url = `${URL}/${id}/municipios`

    fetch(url)
        .then( dados => dados.json() )
        .then (cidades => preencherSelectCidades(cidades))

}

const preencherSelectCidades = (cidades) => {

    const selectCidades = document.getElementById("cidades")

    for(const cidade of cidades) {

        const { id, nome } = cidade;

        const option = document.createElement("option")

        option.value = id;
        option.innerHTML = nome

        selectCidades.appendChild(option)
    }

}








// Classica
function soma (a, b) {
    return a + b
}

// Arrow function
const somaArrow = (a, b) => {
    return a + b;
}

const somaArrowInLine = (a, b) => a + b;

soma(4, 5)
somaArrow(2, 3)