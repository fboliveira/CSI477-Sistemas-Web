const getAllEstados = async () => {

    const estados = await fetch('http://localhost:5555/estados', { cache: 'no-store' });
    return estados.json();

}

export default getAllEstados;
