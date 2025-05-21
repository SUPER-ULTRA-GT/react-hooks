import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenatoEMikhail from "../../pages/RenatoEMikhail";
import Jullyegigi from "../../pages/jullyegigi";
import BoneEClaudio from "../../pages/BoneEClaudio";
import MatheusEVictor from "../../pages/Matheus&Victor"

const Path = () => {
    return (
        <>
            <h1>CARRINHO DE COMPRAS SUPER GT</h1>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/renato-mikhail" element={<RenatoEMikhail />} />
                        <Route path="/jullyegigi" element={<Jullyegigi /> } />
                        <Route path="/matheus-e-victor" element={<MatheusEVictor />} />
                        <Route path="/bone-e-claudio" element={<BoneEClaudio />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Path;