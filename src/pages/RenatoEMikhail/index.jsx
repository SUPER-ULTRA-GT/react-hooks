
import React, {useState} from "react";

const RenatoEMikhail = () => {

    const [carrinho, setCarrinho] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    
    const produtos ={
        pao: {nome: "Panevitta", preco: 8.00},
        bebida: {nome: "Café", preco: 1.00}
    };

    const addCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
        setTotal(total + produto.preco);
        setQuantidade(quantidade + 1);
    };

    const remCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
        setTotal(total - produto.preco);
        setQuantidade(quantidade - 1);
    };

    return (  
        <>
            <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 text-center">Carrinho</h1>

            <div className="flex gap-4 justify-center mt-4">
                <button 
                onClick={() => addCarrinho(produtos.pao)} 
                className="px-4 py-2 bg-blue-500 text-white rounded">Adicionar Pão</button>
                <button onClick={() => addCarrinho(produtos.bebida)} 
                className="px-4 py-2 bg-blue-500 text-white rounded">Adicionar Café</button>
            </div>
            
            <div className="flex gap-4 justify-center mt-4">
                <button 
                onClick={() => remCarrinho(produtos.pao)} 
                className="px-4 py-2 bg-red-700 text-white rounded">Remover Pão</button>
                <button onClick={() => remCarrinho(produtos.bebida)} 
                className="px-4 py-2 bg-red-700 text-white rounded">Remover Café</button>
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mt-6">Items no Carrinho</h2>
            <ul className="mt-2 space-y-2">
                {Object.entries(
                carrinho.reduce((acc, item) => {
                    acc[item.nome] = acc[item.nome] || {...item, quantidade: 0 };
                    acc[item.nome].quantidade += 1;
                    return acc;
                }, {})
                ).map(([key, item]) => (
                <li key={key} className="bg-white p-3 rounded shadow-md">
                    {item.quantidade}x {item.nome}
                </li>
                ))}
            </ul>
            <h2 className="text-xl font-semibold text-gray-700 mt-6">Total: R$ {total.toFixed(2)}</h2>
            </div>
        </>
        );
}
 
export default RenatoEMikhail;