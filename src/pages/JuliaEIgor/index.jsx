import { useState } from "react";

const JuliaEIgor = () => {
// pao
    const [pao, setPao] = useState(1)
    const [precoPao, setPrecoPao] = useState(1)

    function addPao() {
        setPao(prevPao => prevPao + 1)
        setPrecoPao(prevPrecoPao => prevPrecoPao + 1)

    }

    function deletePao() {
            if (pao > 1){
                setPao(prevPao => prevPao - 1)
                setPrecoPao(prevPrecoPao => prevPrecoPao - 1)
            }

    }

// cafe
    const [cafe, setCafe] = useState(1)
    const [precoCafe, setPrecoCafe] = useState(5)

    function addCafe() {
        setCafe(prevCafe => prevCafe + 1)
        setPrecoCafe(prevPrecoCafe => prevPrecoCafe + 5)
    
    }

     function deleteCafe() {
            if (cafe > 1){
                setCafe(prevCafe => prevCafe - 1)
                setPrecoCafe(prevPrecoCafe => prevPrecoCafe - 5)
            }

    }

// total 
const total = precoPao + precoCafe

    return ( 
        <div className="flex flex-col items-center mt-[20px] bg-[#e9e9e92d] py-9 ">
            <div className="item bg-violet-200 py-3.5 px-5 w-[50] rounded-2xl">
                <h2 className="text-[22px] font-semibold">Pão</h2>
                <section className="flex items-center justify-between" >
                    <p>R${precoPao.toFixed(2).replace('.', ',')}</p>

                    <section className="flex gap-2.5">
                        <button className="border rounded-[10px] text-lg px-2.5" onClick={deletePao}>-</button>
                        <p>{pao}</p>
                        <button className="border rounded-[10px] text-lg px-2" onClick={addPao}>+</button>
                    </section>
                </section>
            </div>

            <div className="item bg-violet-200 py-3.5 px-5  w-[50%] rounded-2xl my-3">
                <h2 className="text-[22px] font-semibold">Café</h2>
                <section className="flex items-center justify-between">
                    <p>R${precoCafe.toFixed(2).replace('.', ',')}</p>

                    <section className="flex gap-2.5">
                        <button className="border rounded-[10px] text-lg px-2.5" onClick={deleteCafe}>-</button>
                        <p>{cafe}</p>
                        <button className="border rounded-[10px] text-lg px-2" onClick={addCafe}>+</button>
                    </section>
                </section>
    
            </div>

            <p className="bg-emerald-200 w-[50%] p-2 text-center">Total: R${total.toFixed(2).replace('.', ',')}</p>
        </div>
     )
}
 
export default JuliaEIgor;