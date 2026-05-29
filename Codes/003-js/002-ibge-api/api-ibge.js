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

    // Remover os itens do select, deixando apenas a primeira opção (Selecione:)
    // Selecione -> index: 0
    while (select_estados.length > 1) {
        select_estados.remove(1)
    }

    // Ordenar os estados pelo atributo nome - ASC
    // Array.sort()
    estados.sort(
        (a, b) => a.nome.localeCompare(b.nome)
    )

    select_estados.selectedIndex = 0

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

// Recuperar as cidades do estado selecionado
async function recuperarListaDeCidades(estadoId) {

    // URL: api/estadoId/municipios
    //const url_cidades = URL_LOCALIDADES + '/' + estadoId + '/municipios'
    // Template literals -> `${}`
    const url_cidades = `${URL_LOCALIDADES}/${estadoId}/municipios`

    const response = await fetch(url_cidades)

    const cidades = await response.json()

    return cidades

}

// Invocar o carregamento das cidades após a seleção do estado
const carregarCidades = async () => {

    // Limpar o select de cidades - retirar todas as opções
    document.getElementById("cidades").options.length = 1
    document.getElementById("cidades").selectedIndex = 0

    // Qual é o estado (UF) que está selecionado?
    // -- recuperar o select de estado
    const select_estados = document.getElementById("estados")
    // -- índice do option (estado) selecionado
    const estado_index = select_estados.selectedIndex
    // -- value (id do estado) do índice selecionado
    const estado_id = select_estados.options[estado_index].value;

    // Verificar se o índice selecionado é válido
    // Verificar se o valor recuperado para o id é válido
    if (estado_index === 0 || estado_id === "") {
        // Se não for válido, abandona a operação
        return
    }

    // Se for válido, recuperar a lista de cidades pelo ID do estado
    const cidades = await recuperarListaDeCidades(estado_id)

    // Recuperar o select de cidades
    const select_cidades = document.getElementById("cidades")

    // Ordenar as cidades pelo nome - ASC
    cidades.sort((a,b) => a.nome.localeCompare(b.nome))

    // Percorrer o array e inserir os itens (options)
    for(const cidade of cidades) {

        // Destructing
        const { id, nome } = cidade

        // Criar um option
        const option_cidade = document.createElement("option")

        // Atributir id e nome
        option_cidade.value = id
        option_cidade.innerText = nome

        // Inserir o option no select
        select_cidades.appendChild(option_cidade)

    }


}


/// ----------------------------
// Funções em JS
/// ----------------------------

// Função que recebe dois parâmetros e retorna a soma.

// Clássica/canônica
// Definição
function soma(a, b) {
    return a + b
}

// Invocar
soma(5, 7)

// Arrow functions
// (parâmetros) => {
// _corpo_    
//}
// Definição
const somaArrow = (a, b) => {
    return a + b
}

// Invocar
somaArrow(5, 7)

// Arrow function - inline (return direto)
// Definição
const somaArrowInLine = (a, b) => a + b

// Invocar
somaArrowInLine(5, 7)








