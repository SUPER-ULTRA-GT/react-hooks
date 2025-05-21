import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoneEClaudio from "../../pages/BoneEClaudio";

const Path = () => {
    return (
        <>
            <h1>CARRINHO DE COMPRAS SUPER GT</h1>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/bone-e-claudio" element={<BoneEClaudioEClaudio} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Path;