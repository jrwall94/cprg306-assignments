"use client";
import { useState } from "react";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);

  const buttonStyle = "bg-blue-600 p-2 rounded-2xl text-white font-bold text-3xl m-1 disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed disabled:active:scale-100";

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex bg-slate-400 w-64 justify-center rounded-2xl p-4">
      <p className="flex justify-center items-center w-40 font-bold text-4xl text-black bg-white rounded-2xl mr-3">
        {quantity}
      </p>
      <button
        onClick={increment}
        disabled={quantity >= 20}
        className={`${buttonStyle} px-4`}
      >
        +
      </button>
      <button
        onClick={decrement}
        disabled={quantity <= 1}
        className={`${buttonStyle} px-5`}
      >
        -
      </button>
    </div>
  );
}
