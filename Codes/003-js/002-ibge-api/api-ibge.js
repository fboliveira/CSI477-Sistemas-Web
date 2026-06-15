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

    // Remover os itens do select
    limparSelect("estado")

    // Recuperar a lista
    const estados = await recuperarListaDeEstados()

    // Ordenar a lista de estados pelo nome - ASC
    estados.sort(
        (a, b) => a.nome.localeCompare(b.nome)
    )

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
        
        // const id = estado.id;
        // const nome = estado.nome;
        // const sigla = estado.sigla;

        // Destructing
        // Objeto java script
        const { sigla, id, nome } = estado;
        // Array -> destructing
        // pessoa = [1, 'Fernando']
        // const { id, nome } = pessoa
        // const { name, setName } = useState('')
 
        // -- Criar um elemento HTML -> option
        const opt = document.createElement("option")

        opt.value = id

        // opt.innerHTML = nome + ' - ' + sigla
        // Template literals
        opt.innerHTML = `${nome} - ${sigla} (${id})`

        // -- fim da construção do option

        // Inserir o option no select: DOM
        selectEstados.appendChild(opt)

    }

}

function limparSelect(idDoSelect) {

    const campoSelect = document.getElementById(idDoSelect)

    // Remover todos os options do select, com exceção do "Selecione:"
    // Selecione -> primeiro option: index 0;
    while(campoSelect.length > 1) {
        // Remove o option que está após o "Selecione:"
        campoSelect.remove(1)
    }

}

// ===== CIDADES:
async function carregarCidades() {

    // Remover todas as cidades do estado anterior
    limparSelect("cidade")

    // 1 - Qual é o estado (UF) que está selecionado?
    // ID do estado 
    // -- select de estados -- recuperar
    const selectEstados = document.getElementById("estado")
    // -- índice do estado selecionado
    const indiceDoEstadoSelecionado = selectEstados.selectedIndex
    // valor (id) associado ao estado selecionado
    const id = selectEstados.options[indiceDoEstadoSelecionado].value

    // Se o "Selecione:" está marcado ou se não existe id associado ao estado
    if (indiceDoEstadoSelecionado === 0 || id === "") {
        // Abandona 
        return
    }

    // Recuperar a lista de cidades a partir do ID do Estado selecionado
    const cidades = await recuperarListaDeCidades(id)

    // Recuperar o select de cidades
    const selectCidades = document.getElementById("cidade")

    // Para cada cidade na lista recuperada
    for(const cidade of cidades) {

        // Recuperar os dados: id, nome
        const { id, nome } = cidade

        // Criar um option com os dados da cidade
        const opt = document.createElement("option")
        opt.value = id
        opt.innerHTML = nome

        // Inserir o option no select de cidades
        selectCidades.appendChild(opt)

    }

    selectCidades.selectedIndex = 0
    selectCidades.focus()
    

}

async function recuperarListaDeCidades(id) {

    // URL: {base}/estados/{id}/municipios
    // Template literals
    const url = `${URL_LOCALIDADES}/estados/${id}/municipios`

    const response = await fetch(url)
    const cidades = await response.json()

    console.log(cidades)

    return cidades

}
// === Funcções em JS

// Clássica/canônico
function soma(a, b) {
    return a + b
}

const c = soma(4, 8)

// Arrow function: (lista de parâmetros) => {
//                 corpo da função
//          }

const somaAF = ( a, b ) => {
    return a + b
}

const caf = somaAF(4, 8)

// Arrow function - inline (return direto)
const somaAF_InLine = (a, b) => a + b;

const cafinline = somaAF_InLine(4, 8)


