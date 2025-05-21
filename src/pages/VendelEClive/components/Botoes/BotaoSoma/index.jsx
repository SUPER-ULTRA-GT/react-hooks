import { useState } from "react";

const BotaoSoma = () =>{
    const contador = 0;
    [contador, setContador] = useStatee(0);
    const somar = () => {
        setContador(contador + 1);
    }
    return ( 
        <div>
            <button>+</button>
        </div>
     );
}
 
export default BotaoSoma;