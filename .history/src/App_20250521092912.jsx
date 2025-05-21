
import './App.css'

function App() {

  let contador = 0;
  return (
    <>
    <button>-</button>
    <p>pão</p>
    <button onClick={() => contador++}>+</button>
    <p>quantidade: <span>{contador}</span></p>
    </>
  )
}

export default App
