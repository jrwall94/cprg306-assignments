"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [isMin, setIsMin] = useState(true);
  const [isMax, setIsMax] = useState(false);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
    if (quantity == 19) {
      setIsMax(true);
    }
    if (quantity == 1) {
      setIsMin(false);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (quantity == 2) {
      setIsMin(true);
    }
    if (quantity == 20) {
      setIsMax(false);
    }
  };

  return (
    <div className="flex p-7 max-w-2xs bg-teal-300 mx-auto justify-between mt-10">
      <p className="my-auto border-2 bg-white p-3">{quantity}</p>
      <button
        onClick={decrement}
        className={`p-3 ${isMin ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"} `}
      >
        -
      </button>
      <button
        onClick={increment}
        className={`p-3 ${isMax ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
      >
        +
      </button>
    </div>
  );
}
