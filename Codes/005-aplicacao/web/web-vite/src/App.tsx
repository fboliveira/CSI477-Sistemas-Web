import Menu from "./components/menu/Menu"
import ListProjects from "./pages/projects/ListProjects"

function App() {
  
  return (
    <>
    <h1>Sistema de Controle de Projetos</h1>

    <div id="menu">
      <Menu />
    </div>

    <div id="content">
      <ListProjects />
    </div>
      
    </>
  )
}


export default App
