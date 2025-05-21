const BotaoSubtracao = ({ contador, setContador }) => {
    const subtrair = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }
    
    return (
        <div>
            <button onClick={subtrair} className="bg-red-500 rounded border border-black py-0 px-1 text-white cursor-pointer hover:bg-red-600">-</button>
        </div>
    );
}

export default BotaoSubtracao;