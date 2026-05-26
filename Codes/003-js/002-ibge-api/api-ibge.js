// Recuperar os dados a partir da API de Localidades do IBGE
// https://servicodados.ibge.gov.br/api/v1/localidades/estados

const URL_LOCALIDADES = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

// async/await
async function recuperarListaDeEstados() {

    // Requisição -> API: json
    const response = await fetch(URL_LOCALIDADES)
    console.log(response)
    
    // Body parsing -> texto para json:
    const estados = await response.json()

    console.log(estados)

    // Retornar a lista de estados
    return estados;

}

// Função - clássico/canônico
async function carregarEstados() {

    // Recuperar os dados a partir da API
    const estados = await recuperarListaDeEstados()

    // DOM -> hydration
    // Preencher o select com os dados dos estados
    // Formato de retorno - array
    // -- Percorrer o array
    // -- Para cada item, inserir um elemento

    // Percorrer o array retornado pela API
    // for-in (C: for(int i = 0; i < n; i++) )  
    // indice do elemento
    // for(const i in estados) {
    //     console.log(estados[i].sigla)
    // }

    // Select -> estados: DOM
    const select_estados = document.getElementById("estados")

    // for-of (Java: for-each -> for(item : Lista))
    // elemento do array
    for(const estado of estados) {
        // console.log(estado.nome)

        // const id = estado.id
        // const nome = estado.nome
        // const sigla = estado.sigla

        // const regiao_nome = estado.regiao.nome

        // Destructing
        // Objects
        const { sigla, id, nome } = estado;
        // Arrays -> destructing
        // pessoa = [1, 'Fernando']
        // const { id, nome } = pessoa

        // Criação do option com os dados do estado
        const item_option = document.createElement("option")

        item_option.value = id
        item_option.innerText = nome

        // Inserir o option no select de estados
        select_estados.appendChild(item_option)

    }

}