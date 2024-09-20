const getAllEstados = async () => {




    const response = await fetch('http://localhost:5000/estados', 
        { cache: 'no-cache' })

    return response.json();

}

export { getAllEstados }