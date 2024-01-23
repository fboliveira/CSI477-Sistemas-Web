import { useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  // function incrementar() {
  //   setCount(count + 1);
  // }

  const incrementar = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Sistema de Doação de Sangue: {count} </h1>

      <h2>Elementos: {count}</h2>

      <button
        onClick={incrementar}
      >Incrementar</button>

      <Menu />

    </>
  )
}

export default App
