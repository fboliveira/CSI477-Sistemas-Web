function limparSelect(campo) {
    while( campo.length > 1 ) {
        campo.remove(1);
    }
}

function preencherSelectEstados(data) {

    let estados = document.getElementById("estados");
    limparSelect(estados);

    for( let index in data ) {
        //const id = data[index].id;
        const { id, nome, sigla } = data[index];

        let option = document.createElement("option");
        option.value = id;
        option.innerHTML = `${nome}-${sigla}`;

        estados.appendChild(option);

    }

}

function preencherSelectCidades(data) {

    let cidades = document.getElementById("cidades");
    limparSelect(cidades);

    for( let index in data ) {
        //const id = data[index].id;
        const { id, nome } = data[index];

        let option = document.createElement("option");
        option.value = id;
        option.innerHTML = nome;

        cidades.appendChild(option);

    }

}

function carregarEstados() {

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(response => response.json())
        .then(data => preencherSelectEstados(data))
        .catch(error => console.error(error))

}

function carregarCidades() {

    const estados = document.getElementById("estados");
    const estado_index = estados.selectedIndex;
    const estado_id = estados.options[ estado_index ].value;

    const cidades = document.getElementById("cidades");
    limparSelect(cidades);

    if ( estado_id == "" ) {
        return;
    }

    const url_cidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/municipios`;

    fetch(url_cidades)
        .then(response => response.json())
        .then(data => preencherSelectCidades(data))
        .catch(error => console.error(error))

}