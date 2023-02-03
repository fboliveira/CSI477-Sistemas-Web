async function carregarEstados() {

    // https://servicodados.ibge.gov.br/api/v1/localidades/estados


    await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => response.json())
        .then(data => preencherSelectEstados(data))
        .catch(error => console.error(error));


}

function preencherSelectEstados(data) {

    const select = document.getElementById("estados");

    limparSelect("estados");

    for(let uf of data) {

        // const { id, nome, sigla } = data[index];

        // const nome = uf.nome;
        // const sigla = uf.sigla;

        const { id, nome, sigla } = uf;

        const option = document.createElement("option");
        
        option.value = id;
        option.innerHTML = `${nome}-${sigla}`;
        
        select.appendChild(option);

    }

}

function limparSelect(campo) {

    const select = document.getElementById(campo);

    while(select.length > 1) {
        select.remove(1);
    }
    
}

async function carregarCidades() {

    const select_estados = document.getElementById("estados");
    const estados_index = select_estados.selectedIndex;

    const estado_id = select_estados.options[ estados_index ].value;

    limparSelect("cidades");
    
    if ( estado_id == "" ) {
        return;
    }

    const url_municipios = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/municipios`;

    await fetch(url_municipios)
        .then(response => response.json())
        .then(data => preencherSelectCidades(data))
        .catch(error => console.error(error));

}

function preencherSelectCidades(data) {

    const select = document.getElementById("cidades");

    limparSelect("cidades");

    for(let cidade of data) {

        // const { id, nome, sigla } = data[index];

        // const nome = cidade.nome;
        // const sigla = cidade.sigla;

        const { id, nome } = cidade;

        const option = document.createElement("option");
        
        option.value = id;
        option.innerHTML = nome;
        
        select.appendChild(option);

    }

}


// Arrow functions:
function soma(a, b) {
    return a + b;
}

const somaArrow = (a, b) => {
    return a + b;
}

const somaArrowInLine = (a, b) => a + b;


