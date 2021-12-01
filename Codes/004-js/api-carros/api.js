function limparSelect(campo) {

    while( campo.length > 1 ) {
        campo.remove(1);
    }
}

function preencherSelectMarcas(data) {

    let marcas = document.getElementById("marcas");
    limparSelect(marcas);

    for( let index in data ) {

        const { nome, codigo } = data[index];

        let option = document.createElement("option");
        option.value = codigo;
        option.innerHTML = `${nome}-${codigo}`;

        marcas.appendChild(option);

    }

}

function preencherSelectModelos(data) {

    let modelos = document.getElementById("modelos");
    limparSelect(modelos);

    for( let index in data["modelos"] ) {

        const { nome, codigo } = data["modelos"][index];

        let option = document.createElement("option");
        option.value = codigo;
        option.innerHTML = `${nome}-${codigo}`;

        modelos.appendChild(option);

    }

    preencherSelectAnos(data)

}

function preencherSelectAnos(data) {

    let anos = document.getElementById("anos");
    limparSelect(anos);

    for( let index in data["anos"] ) {
        const { nome, codigo } = data["anos"][index];

        let option = document.createElement("option");
        option.value = codigo;
        option.innerHTML = nome;

        anos.appendChild(option);

    }

}

function carregarMarcas() {

    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
        .then(response => response.json())
        .then(data => preencherSelectMarcas(data))
        .catch(error => console.error(error))

}

function carregarModelos() {

    const marcas = document.getElementById("marcas");
    const marcas_index = marcas.selectedIndex;
    const marca_codigo = marcas.options[ marcas_index ].value;

    const modelos = document.getElementById("modelos");
    limparSelect(modelos);

    if ( marca_codigo == "" ) {
        return;
    }

    const url_modelos = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca_codigo}/modelos`;
    
    fetch(url_modelos)
        .then(response => response.json())
        .then(data => preencherSelectModelos(data))
        .catch(error => console.error(error))

}