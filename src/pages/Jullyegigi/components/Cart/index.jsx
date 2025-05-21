import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState({
    cuscuz: 0,
    tapioca: 0,
  });

  const increment = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item]: prevCart[item] + 1,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Carrinho de Compras ULTRA GT</h1>

      <div className="space-y-4 w-full max-w-md">
        {/* Cuscuz */}
        <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Cuscuz</h2>
            <p>Quantidade: {cart.cuscuz}</p>
          </div>
          <button
            onClick={() => increment("cuscuz")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            +
          </button>
        </div>

        {/* Tapioca */}
        <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Tapioca</h2>
            <p>Quantidade: {cart.tapioca}</p>
          </div>
          <button
            onClick={() => increment("tapioca")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}