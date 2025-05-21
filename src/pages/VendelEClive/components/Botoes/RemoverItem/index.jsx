const RemoverItem = ({ arrayItens, setArrayItens }) => {
    const removerUltimoItem = () => {
        if (arrayItens.length > 0) {
            const novosItens = [...arrayItens];
            novosItens.pop();
            setArrayItens(novosItens);
        }
    }
    
    return ( 
        <button onClick={removerUltimoItem} className="bg-red-500 rounded-full border border-black text-white cursor-pointer hover:bg-red-600">Remover Último Item</button>
     );
}
 
export default RemoverItem;