
// Recuperar os estados a partir da API
// https://servicodados.ibge.gov.br/api/v1/localidades/estados

// Função canônica/clássico
async function recuperarListaDeEstados() {
    
    // Requisição -> API (json)

    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
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
    for(const i in estados) {
        console.log(estados[i].nome)
    }

    // for-of (Java: for-each -> for(item : Lista))
    for(const estado of estados) {
        console.log(estado.sigla)
    }

}