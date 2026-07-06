import AppHeader from "../../components/AppHeader/AppHeader"

const UpdateProject = () => {

    return (

        <>
           <AppHeader title="Atualização do projeto" />

           <form>
                        
            <label htmlFor="name">Nome</label> 
            <input type="text" name="name" id="name" />
            
            <button type="submit">Atualizar</button>
            <button>Voltar</button>

            </form> 
        
        </>

    )

}

export default UpdateProject