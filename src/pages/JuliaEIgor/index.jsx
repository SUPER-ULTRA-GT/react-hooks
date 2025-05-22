import { useEffect, useState } from "react";
import compras from './produtos.json'
import Item from '../JuliaEIgor/components/item'

const JuliaEIgor = () => {
    // const [produtos, setProdutos] = useState([...compras]);
    // const [total, setTotal] = useState(0)

    // useEffect(() => { 
    //     const geral = produtos.reduce((total, item) => total + item.quantidade * item.preco, 0);
    //     setTotal(geral);
    // }, [produtos])

    // const add = (id) => {
    //     const lista = [...produtos];
    //     const index = lista.findIndex(produto => produto.id === id);
    //     const produtoSelecionado = lista[index];

    //     produtoSelecionado.quantidade++;
    //     setProdutos(lista);

    // }
    
    // const remove = (id) => {
    //     const lista = [...produtos];
    //     const index = lista.findIndex(produto => produto.id === id);
    //     const produtoSelecionado = lista[index];

    //     produtoSelecionado.quantidade > 0 &&
    //         produtoSelecionado.quantidade--;
    //     setProdutos(lista)

    }

    return ( 
        <div className="flex flex-col items-center mt-[20px] bg-[#e9e9e92d] py-9 gap-3">
            {produtos.map(item => (
                <Item
                    key={item.id}
                    id={item.id}
                    {...item}
                    add={add}
                    remove={remove}
                    quantidade={item.quantidade}
                />
            ))}

        <h2 className="bg-emerald-200 w-[50%] p-2 text-center">Total: R${total.toFixed(2).replace('.', ',')}</h2>
        </div>
     )
}
 
export default JuliaEIgor;