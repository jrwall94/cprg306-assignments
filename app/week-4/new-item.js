import { useState } from "react";
export default function Counter() {
    let [quantity, setQuantity] = useState(0);
    const MIN = 0;
    const MAX = 20;


    const increment = () => {
        if (quantity < MAX) {
            setQuantity(quantity + 1);
        }
    }
    const decrement = () => {
        if (quantity > MIN) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex flex-row items-center justify-center gap-4 bg-gray-900 text-white p-6 rounded">

            <button
                onClick={increment}
                disabled={quantity === MAX}
                className="bg-blue-500 text-white px-4 py-2 rounded enabled:hover:bg-blue-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
                +
            </button>
            <h2 className="text-2xl font-bold">{quantity}</h2>
            <button
                onClick={decrement}
                disabled={quantity === MIN}
                className="bg-red-500 text-white px-4 py-2 rounded enabled:hover:bg-red-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
                -
            </button>
        </div>
    );
}