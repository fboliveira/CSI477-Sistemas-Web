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

    // Percorrer o array
    // for-in (C: for(int i = 0; i < n; i++))
    // Recupera o index (i) dos elementos do array
    for(const i in estados) {
        console.log(estados[i].nome)
    }

    // For: recuperar o elemento do array
    // for-of (Java: for-each -> for(Object item : lista))
    for(const estado of estados) {
        // console.log(estado.sigla)
    
        const id = estado.id
        const nome = estado.nome
        const sigla = estado.sigla

        console.log({
            id, nome, sigla
        })
        
    }  

}