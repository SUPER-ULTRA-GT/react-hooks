import { BrowserRouter, Routes, Route } from "react-router-dom";
import JuliaEIgor from "../../pages/JuliaEIgor";

const Path = () => {
    return (
        <div>
            <h1 className="text-center mt-4">CARRINHO DE COMPRAS SUPER GT</h1>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/julia-e-igor" element={<JuliaEIgor />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default Path;