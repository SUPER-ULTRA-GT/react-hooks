import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jullyegigi from "../../pages/jullyegigi";

const Path = () => {
    return (
        <>
            <h1>CARRINHO DE COMPRAS SUPER GT</h1>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/jullyegigi" element={<Jullyegigi /> } />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Path;