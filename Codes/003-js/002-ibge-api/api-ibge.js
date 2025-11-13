// API - IBGE
const URL_LOCALIDADES = 'https://servicodados.ibge.gov.br/api/v1/localidades'

// Recuperar a lista de estados
// Requisitar /estados na URL de localidades

// Função clássica/canônico
async function recuperarListaDeEstados() {

    // Requisição -> json
    // Template literals
    const response = await fetch(`${URL_LOCALIDADES}/estados`)
    const estados = await response.json()

    console.log(estados)

    // Retornar os dados recuperados
    return estados;

}

async function carregarEstados() {

    // Recuperar a lista
    const estados = await recuperarListaDeEstados()

    // Preencher o select com os dados de retorno
    // -- Percorrer o array
    // -- Para cada item do array, criar um option dentro do select

    // DOM: hydration
    // DOM: recuperar o select
    const selectEstados = document.getElementById("estado")

    // Percorrer o array
    // for-in (C: for(int i = 0; i < n; i++))
    // Recupera o index
    console.log("for-in")
    for(const i in estados) {
        console.log(estados[i].nome)
    }

    // Recuperar o elemento do array
    // for-of (Java: for-each-> for(Integer item : lista))

    console.log("for-of")
    for(const estado of estados) {
        console.log({
            sigla: estado.sigla, 
            id: estado.id
        })
    }

}






