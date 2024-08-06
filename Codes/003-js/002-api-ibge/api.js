// Recuperar a lista de estados - API
async function recuperarListaEstados() {

    // API: Método/URL
    // https://servicodados.ibge.gov.br/api/v1/localidades/estados

    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');

    const estados = await response.json();

    // console.log(estados);
    limparSelect("estados");
    preencherSelectEstados(estados);
        

}

// Carregar o select de estados com os dados
function preencherSelectEstados(estados) {

    // hydration

    // for(let i in estados) {
    //     console.log(estados[i].nome)
    // }

    const select = document.getElementById("estados");

    estados.sort((a, b) => a.nome.localeCompare(b.nome));

    for(let estado of estados) {
        // const id = estado.id;
        // const nome = estado.nome;
        // const sigla = estado.sigla;

        // Destructing
        const { id, nome, sigla } = estado;
        // const [ ] = estado;

        const option = document.createElement("option");

        option.value = id;
        option.innerHTML = `${nome}-${sigla}`;

        select.appendChild(option);

    }

}

async function recuperarListaCidades() {

    // Qual é o estado que está selecionado
    const selectEstados = document.getElementById("estados");

    const estado_index = selectEstados.selectedIndex;

    const estado_id = selectEstados.options[estado_index].value;

    limparSelect("cidades");

    if ( estado_index ===  0 || estado_id === "") {
        return;
    }

    // /estados/{id}/municipios
    // string: ' ... '
    // template literals: ` ... `  
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/municipios`);

    const cidades = await response.json();
    preencherSelectCidades(cidades);
}

function preencherSelectCidades(cidades) {

    // Recuperar o select
    const selectCidades = document.getElementById("cidades");

    // Iterar sobre o array, incluíndo os options
    for(const cidade of cidades) {

        const { id, nome } = cidade;

        const option = document.createElement("option");

        option.value = id;
        option.innerHTML = nome;

        selectCidades.appendChild(option);

    }

}

function limparSelect(idDoCampoSelect) {

    const campoSelect = document.getElementById(idDoCampoSelect);

    while(campoSelect.length > 1) {
        campoSelect.remove(1);
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