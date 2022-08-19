function limparSelect(campo) {

    const select = document.getElementById(campo);

    while( select.length > 1 ) {
        select.remove(1);
    }

}

function preencherSelect(data, campo) {

    const select = document.getElementById(campo);
    limparSelect(campo);

    data.sort( (a, b) => a.nome.localeCompare(b.nome) );

    for(const elemento of data) {

        const { id, nome } = elemento;

        const option = document.createElement("option");
        option.value = id;
        option.innerHTML = nome;

        select.appendChild(option);

    }    

}

function carregarDadosEstados() {

    // Arrow function
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(response => response.json())
        .then(data => preencherSelect(data, "estados"))
        .catch(error => console.error(error))

}

function carregarDadosCidades() {

    const selectEstados = document.getElementById("estados");

    const estado_index = selectEstados.selectedIndex;

    const estado_id = selectEstados.options[ estado_index ].value;

    const selectCidades = document.getElementById("cidades");

    limparSelect("cidades");

    if ( estado_id === "" ) {
        return;
    }

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/municipios`)
        .then(response => response.json())
        .then(data => preencherSelect(data, "cidades"))
        .catch(error => console.error(error))

}

function preencherSelectEstados(data) {

    // data = [ Object{id, nome, sigla}, Object{}, ... ]

    const selectEstados = document.getElementById("estados");
    const selectByForm = document.dados.estados;

    limparSelect("estados");


    for( const estado of data ) {

        // const id = data[index].id;
        // Destructing
        const { id, nome, sigla } = estado;
        
        console.log(`${id} - ${nome} - ${sigla}`);

        const option = document.createElement("option");
        option.value = id;
        option.innerHTML = `${nome}-${sigla}`;

        selectEstados.appendChild(option);


    }

}

function preencherSelectCidades(data) {

    const selectCidades = document.getElementById("cidades");

    for( const cidade of data ) {

        // Destructing
        const { id, nome } = cidade;
        
        console.log(`${id} - ${nome}`);

        const option = document.createElement("option");
        option.value = id;
        option.innerHTML = `${nome}`;

        selectCidades.appendChild(option);


    }

}


