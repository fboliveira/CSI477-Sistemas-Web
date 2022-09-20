
const CreateEstado = () => {

    return (
        <div>
            <h3>Cadastrar Estado</h3>
            <form>

                <div>
                    <label 
                        htmlFor="nome"
                    >Nome</label>

                    <input type="text" name="nome" id="nome" />
                </div>

                <div>
                    <label 
                        htmlFor="sigla"
                    >Sigla</label>

                    <input type="text" name="sigla" id="sigla" />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateEstado;