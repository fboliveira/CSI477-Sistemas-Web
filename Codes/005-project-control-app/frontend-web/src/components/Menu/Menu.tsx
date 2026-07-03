
// React component - arrow function
const Menu = () => {

    const cssMenu = "text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 mr-2"

    return (
        <div>

            <ul className="md:flex items-center gap-8">
                <li>Home</li>
                <li>Projetos</li>
                <li>Tarefas</li>
                <li>Relatórios</li>
                <li>Perfil</li>
            </ul>
        
        </div>
    )

}

export default Menu