const getByIdCidade = async(id: string) => {

        const cidade = await fetch(
            `http://localhost:5000/cidades/${id}`, 
            { cache: 'no-store'}
            )

        return cidade.json();

}


export default getByIdCidade;