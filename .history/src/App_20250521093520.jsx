import { useState } from 'react';
import './App.css'

function App() {

  [totalPao, setTotalPao] = useState(0)
  return (
    <>
    <button>-</button>
    <p>pão</p>
    <button onClick={() => {
      setTotalPao()
      
    }}>+</button>
    <p>quantidade: <span>{contador}</span></p>
    </>
  )
}

export default App
