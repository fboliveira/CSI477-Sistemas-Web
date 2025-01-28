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

    for(const estado of estados) {
        // console.log(estado.nome)

        // const id = estado.id;
        // const nome = estado.nome;
        // const sigla = estado.sigla;

        // Destructing
        const {id, nome, sigla} = estado;

        const option = document.createElement("option");
        option.value = id;
        option.innerHTML = nome;

        select.appendChild(option);

        // hydration

    }


}