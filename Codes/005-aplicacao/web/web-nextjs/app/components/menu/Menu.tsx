import Link from "next/link";

export default function Menu() {

    const linkCss = "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"

    // Source: https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/navbars
    return(
        <nav className="bg-gray-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-start">
                    <div className="flex flex-1 items-start justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <Link className={linkCss} href="/">Home</Link>
                                <Link className={linkCss} href="/projects">Projetos</Link>
                                <Link className={linkCss} href="#">Tarefas</Link>
                                <Link className={linkCss} href="#">Perfil</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )


}