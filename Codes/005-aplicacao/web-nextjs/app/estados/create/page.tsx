export default function CreateEstado() {

    return(
    
        <main>
            <h1>Cadastro de estado</h1>

            <form>

                <div>
                    <label 
                        htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" />
                </div>
                <div>
                    <label 
                        htmlFor="sigla">Sigla</label>
                    <input 
                        type="text" 
                        name="sigla" 
                        id="sigla" />
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                    <button type="button">Voltar</button>
                </div>
            </form>

        </main>

    );

}