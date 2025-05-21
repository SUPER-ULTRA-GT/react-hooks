import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenatoEMikhail from "../../pages/RenatoEMikhail";

const Path = () => {
    return (
        <>
            <h1>CARRINHO DE COMPRAS SUPER GT</h1>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/renato-mikhail" element={<RenatoEMikhail />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Path;