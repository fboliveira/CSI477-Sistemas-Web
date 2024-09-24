const getAllCidades = async() => {

    const response = await fetch('http://localhost:5000/cidades', {
        cache: 'no-cache'
    })

    return response.json()

}

const getByIdCidade = async( id: string ) => {


    const response = await
        fetch(

            `http://localhost:5000/cidades/${id}`,
            { cache: 'no-cache' }
        )

    return response.json();

}

export { getAllCidades, getByIdCidade }