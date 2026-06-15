const getAllCidades = async () => {

    const cidades = await fetch('http://localhost:5555/cidades', { cache: 'no-store' });
    return cidades.json();
}

export default getAllCidades;