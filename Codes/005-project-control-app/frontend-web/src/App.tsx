import './App.css'
import Menu from './components/Menu/Menu.tsx'
import ListProjects from './pages/projects/ListProjects.tsx'

function App() {

  return( 
    <>
      <h1>Sistema de Controle de Projetos</h1>
      <h2>Menu principal</h2>
      <Menu />
      <ListProjects />
    </>
  )
}

export default App
