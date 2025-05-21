
import './App.css'

function App() {

  
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
