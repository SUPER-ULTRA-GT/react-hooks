const BotaoSoma = ( { contador, setContador } ) =>{
    const somar = () => {
        setContador(contador + 1);
        document.getElementById("contador").innerHTML = {contador};

    }
    return ( 
        <div>
            <button onClick={somar} className="bg-green-500 rounded border border-black text-white py-0 px-1 cursor-pointer hover:bg-green-600">+</button>
            
        </div>
     );
}
 
export default BotaoSoma;