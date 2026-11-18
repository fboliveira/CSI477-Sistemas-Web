import Menu from "../menu/Menu";

interface HeaderInterface {
    title?: string;
}


const Header = ({ title } : HeaderInterface) => {

    return(
        <>
            <header>
                <div>
                    <h1 className="text-3xl font-extrabold">Controle de Projetos</h1>
                </div>
                <div>
                    <Menu />
                </div>
            </header>
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
        </>
    )

}

export default Header