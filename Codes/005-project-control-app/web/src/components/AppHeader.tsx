import Menu from "./Menu";

interface AppHeaderInterface {
    title?: string
}

const AppHeader = ({title} : AppHeaderInterface) => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600"></div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Controle de Projetos
            </span>
          </div>
          <Menu />
        </div>
      </header>
      <div className="flex justify-center">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </>
  );
};

export default AppHeader;
