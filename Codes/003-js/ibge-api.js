// Escopo global
// URL da API do IBGE
const URL_LOCALIDADES = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

// Função clássico/canônico/padrão
// async/await -> response: Promise<>
async function recuperarListaDeEstados() {

    // Request -> URL:GET
    const response = await fetch(URL_LOCALIDADES)
    // Response -> json 
    const estados = await response.json()
    
    return estados

}

async function carregarEstados() {

    console.log('Iniciando carregamento dos estados...')
    const estados = await recuperarListaDeEstados()

    // Considerando que os dados não estão ordenados e que a API não tem opção de ordenação
    estados.sort(
        (a, b) => a.nome.localeCompare(b.nome)
    )


    // Percorrer o array
    // for-in (C: for(int i = 0; i < n; i++))
    // Recupera o index (i) dos elementos do array
    for(const i in estados) {
        console.log(estados[i].nome)
    }

    // DOM: hydration
    // DOM: recuperar o select de estados para adicionar os itens que foram retornados pela API
    const select_estados = document.getElementById("estado")

    // For: recuperar o elemento do array
    // for-of (Java: for-each -> for(Object item : lista))
    for(const estado of estados) {
        // console.log(estado.sigla)
    
        // const id = estado.id
        // const nome = estado.nome
        // const sigla = estado.sigla

        // Destructing
        // Objeto java script
        const { id, nome, sigla } = estado // <- a ordem dos campos não importa
        // Array -> posição
        // pessoa = [1, 'Fernando']
        // const [ idDaPessoa, nome ] = pessoa <- a ordem dos campos importa  

        // -- Criar um elemento HTML -> option
        const opt = document.createElement("option")

        opt.value = id
        // opt.innerHTML = nome + ' - ' + sigla
        // Template literals
        opt.innerHTML = `${nome} - ${sigla} (${id})`
        
        // Inserir o option criado no select
        select_estados.appendChild(opt)

        console.log({
            id, nome, sigla
        })
        
    }  

}

// CIDADES:
async function recuperarListaDeCidades(id) {
    // URL: {base}/{id}/municipios
    const url_cidades = `${URL_LOCALIDADES}/${id}/municipios`

    const response = await fetch(url_cidades)
    const cidades = await response.json()

    console.log(cidades)

    return cidades
}

async function carregarCidades() {
    
    // Recuperar o select de cidades
    const select_cidades = document.getElementById('cidade')
    
    // Remover todos, menos o "Selecione: (index 0)"
    while(select_cidades.length > 1) {
        select_cidades.remove(1)
    }

    // Qual é o ID do estado selecionado?
    const select_estados = document.getElementById("estado")
    // Índice do estado selecionado
    const index_estado = select_estados.selectedIndex
    // ID (value) do estado selecionado
    const id_estado = select_estados.options[index_estado].value

    // Garantir que o estado selecionado é valido -> 
    if ( index_estado === 0 || id_estado === "" ) {
        // Abandonar
        return
    }

    // Recuperar a lista de cidades a partir do ID do estado
    const cidades = await recuperarListaDeCidades(id_estado)

    // Percorrer a lista de cidades e inserir um option para cada item

    // For: recuperar o elemento do array
    // for-of (Java: for-each -> for(Object item : lista))
    for(const cidade of cidades) {

        // Destructing
        // Objeto java script
        const { id, nome } = cidade // <- a ordem dos campos não importa

        // -- Criar um elemento HTML -> option
        const opt = document.createElement("option")

        opt.value = id
        opt.innerHTML = `${nome} (${id})`
        
        // Inserir o option criado no select
        select_cidades.appendChild(opt)
        
    } 

}

// == FUNÇÕES EM JS

// Clássica/canônica
function soma(a, b) {
    return a + b
}

const valor_soma = soma(5, 8)

// Arrow function
// ( lista de parâmetros ) => {
// corpo    
//      }

const soma_arrow_function = ( a, b ) => {
    return a + b
}

const valor_soma_arrow_function = soma_arrow_function(6, 9)

// Arrow function in line
const soma_arrow_function_in_line = (a, b) => a + b

const valor_soma_arrow_function_in_line = soma_arrow_function_in_line(4, 8)