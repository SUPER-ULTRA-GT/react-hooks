import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoneEClaudio from "../../pages/BoneEClaudio"
import VendelEClive from "../../pages/VendelEClive";

const Path = () => {
    return (
        <>
            <h1>CARRINHO DE COMPRAS SUPER GT</h1>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <BoneEClaudio />} />
                        <Route path="/vendel-e-clive" element={ <VendelEClive />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Path;