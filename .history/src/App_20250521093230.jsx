import react from 'react';
import './App.css'

function App() {

  [totalPao, setTotalPao] = useState(0)
  return (
    <>
    <button>-</button>
    <p>pão</p>
    <button onClick={() => {
      contador++
      console.log(contador);
      
    }}>+</button>
    <p>quantidade: <span>{contador}</span></p>
    </>
  )
}

export default App
