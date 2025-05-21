import { useState } from 'react'
import './App.css'

function App() {
  const [quantidadePao, setQuantidadePao] = useState(0)
  const [quantidadeCoca, setQuantidadeCoca] = useState(0)
  const precoPao = 2.50 
  const precoCoca = 3.00

  const incrementarPao = () => {
    setQuantidadePao(prev => prev + 1)
  }

  const incrementarCoca = () => {
    setQuantidadeCoca(pre => pre + 1)
  }

  const decrementarPao = () => {
    setQuantidadePao(prev => (prev > 0 ? prev - 1 : 0))
  }

  const decrementarCoca = () => {
    setQuantidadeCoca(pre => (pre > 0 ? pre - 1 : 0))
  }

  const totalPao = quantidadePao * precoPao

  const totalCoca = quantidadeCoca * precoCoca

  const total = (totalPao + totalCoca).toFixed(2)

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-4 bg-gray-100 p-6 rounded'>
        <h1 className='text-xl font-bold'>Carrinho de Compras</h1>
        
        <div className='flex items-center gap-4'>
          <button onClick={decrementarPao} className='px-3 py-1 bg-red-500 text-white rounded'>-</button>
          <div className='text-center'>
            <p className='font-semibold'>Pão</p>
            <p>Quantidade: {quantidadePao}</p>
            <p>Preço: R$ {precoPao.toFixed(2)}</p>
          </div>
          <button onClick={incrementarPao} className='px-3 py-1 bg-green-500 text-white rounded'>+</button>
        </div>

        <div className='flex items-center gap-4'>
          <button onClick={decrementarCoca} className='px-3 py-1 bg-red-500 text-white rounded'>-</button>
          <div className='text-center'>
            <p className='font-semibold'>Coca</p>
            <p>Quantidade: {quantidadeCoca}</p>
            <p>Preço: R$ {precoCoca.toFixed(2)}</p>
          </div>
          <button onClick={incrementarCoca} className='px-3 py-1 bg-green-500 text-white rounded'>+</button>
        </div>

        <div className='mt-4'>
          <p className='text-lg font-bold'>Total: R$ {total}</p>
        </div>
      </div>
    </div>
  )
}

export default App
