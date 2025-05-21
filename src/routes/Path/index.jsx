import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thillwind from "../../pages/Thillwind";

const Path = () => {
    return (
        <>
            <h1 className="text-red-800">CARRINHO DE COMPRAS SUPER GT</h1>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/thi-will" element={Thillwind} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Path;