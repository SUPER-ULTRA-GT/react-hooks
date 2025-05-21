import { BrowserRouter, Routes, Route } from "react-router-dom";
import JuliaEIgor from "../../pages/juliaEIgor";

const Path = () => {
    return (
        <>
            <h1>CARRINHO DE COMPRAS SUPER GT</h1>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/julia-e-igor" element={<JuliaEIgor />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Path;