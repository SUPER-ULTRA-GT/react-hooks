const AdicionarItem = ({ itemInput, arrayItens, setArrayItens, setItemInput }) => {
    const adicionarElemento = () => {
        if (itemInput.trim() !== "") {
            setArrayItens([...arrayItens, itemInput]);
            setItemInput("");
        }
    }
    
    return (  
        <button onClick={adicionarElemento} className="bg-green-500 rounded-full border border-black text-white cursor-pointer hover:bg-green-600 text-sm">Adicionar Item</button>
    );
}

export default AdicionarItem;