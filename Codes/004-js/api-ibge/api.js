const sum = (a) => a + 10;

function carregarDadosEstados() {

    // Arrow function
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(response => response.json())
        .then(data => preencherSelectEstados(data))
        .catch(error => console.error(error))

}

function preencherSelectEstados(data) {

    // data = [ Object{id, nome, sigla}, Object{}, ... ]

    const selectEstados = document.getElementById("estados");
    const selectByForm = document.dados.estados;

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

