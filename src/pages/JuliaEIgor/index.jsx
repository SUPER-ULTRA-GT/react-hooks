import { useState } from "react";

const JuliaEIgor = () => {
// pao
    const [pao, setPao] = useState(0)
    const [precoPao, setPrecoPao] = useState(1)
    function addPao() {
        setPao(prevPao => prevPao + 1)

    }

// cafe
    const [cafe, setCafe] = useState(0)
    function addCafe() {
        setCafe(prevCafe => prevCafe + 1)
    }

// total 



    return ( 
        <>
            <div className="item">
                <h2>Pão</h2>
                <p>Quantidade: {pao}</p>
                <button onClick={addPao}>Adicionar</button>
                <p>Preço: {precoPao}</p>
            </div>

            <div className="item">
                <h2>Café</h2>
                <p>Quantidade: {cafe}</p>
                <button onClick={addCafe}>Adicionar</button>
                <p>Preço: </p>
            </div>

            <p>Total: </p>
        </>
     )
}
 
export default JuliaEIgor;