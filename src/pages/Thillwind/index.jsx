import { useState } from 'react';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    { id: 1, nome: 'Camiseta', preco: 49.99 },
    { id: 2, nome: 'Calça', preco: 89.99 },
    { id: 3, nome: 'Tênis', preco: 129.99 },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  // Calcula o total
  const total = carrinho.reduce((sum, item) => sum + item.preco, 0);

  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Loja Simples</h1>
        
        {/* Lista de Produtos */}
        <div className="space-y-4 mb-8">
          {produtos.map(produto => (
            <div key={produto.id} className="bg-white p-4 rounded-b-4xl shadow">
              <h3 className="font-medium">{produto.nome}</h3>
              <p>R$ {produto.preco.toFixed(2)}</p>
              <button
                onClick={() => adicionarAoCarrinho(produto)}
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
              >
                Adicionar
              </button>
            </div>
          ))}
        </div>

        {/* Resumo do Carrinho */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2">Seu Carrinho</h2>
          
          {carrinho.length === 0 ? (
            <p>Carrinho vazio</p>
          ) : (
            <>
              <ul className="mb-4">
                {produtos.map(produto => {
                  const qtd = carrinho.filter(item => item.id === produto.id).length;
                  if (qtd === 0) return null;
                  return (
                    <li key={produto.id} className="flex justify-between">
                      <span>{produto.nome} x{qtd}</span>
                      <span>R$ {(produto.preco * qtd).toFixed(2)}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="border-t pt-2 font-bold">
                <p className="flex justify-between">
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;