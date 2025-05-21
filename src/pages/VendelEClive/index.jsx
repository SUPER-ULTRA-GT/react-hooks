import AdicionarItem from "./components/Botoes/AdicionarItem";
import BotaoSoma from "./components/Botoes/BotaoSoma";
import BotaoSubtracao from "./components/Botoes/BotaoSubtracao";
import { useState } from "react";
import RemoverItem from "./components/Botoes/RemoverItem";

const VendelEClive = () => {
    const [itemInput, setItemInput] = useState("");
    const [arrayItens, setArrayItens] = useState([]);
    const [contador, setContador] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
                <h1 className="font-bold text-3xl">Adicione o item a ser incrementado</h1>
            <div className="flex flex-col items-center justify-center bg-gray-100 gap-4 max-h-1/2 max-w-1/2 overflow-auto">
                <div className="flex gap-2">
                    <RemoverItem
                        arrayItens={arrayItens}
                        setArrayItens={setArrayItens}
                    />
                    <input
                        type="text"
                        placeholder="Digite o nome do produto"
                        value={itemInput}
                        onChange={(e) => setItemInput(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-1/2"
                    />
                    <AdicionarItem
                        itemInput={itemInput}
                        arrayItens={arrayItens}
                        setArrayItens={setArrayItens}
                        setItemInput={setItemInput}
                    />
                </div>

                <div>
                    <h2>Itens Adicionados:</h2>
                    <ul className="flex flex-col gap-4">
                        {arrayItens.map((item, index) => (
                            <li key={index} className="flex items-center justify-between bg-white p-2 m-2 rounded shadow">
                                {item}:
                                <BotaoSubtracao
                                    contador={contador}
                                    setContador={setContador}
                                />
                                <p id="contador">{contador}</p>
                                <BotaoSoma
                                    contador={contador}
                                    setContador={setContador}
                                />

                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default VendelEClive;