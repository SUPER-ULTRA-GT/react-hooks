import { useState } from 'react';
import './App.css'

function App() {

  const [totalPao, setTotalPao] = useState(0)
  
  return (
    <>
    <button>-</button>
    <p>pão</p>
    <button onClick={() => {
      setTotalPao(totalPao + 1)
      
    }}>+</button>
    <p>quantidade: <span>{totalPao}</span></p>
    </>
  )
}

export default App
