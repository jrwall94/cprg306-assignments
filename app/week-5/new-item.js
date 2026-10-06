// app/week-5/new-item.js
"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState(""); // new: name field state

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    // was: flex items-center gap-4 — now flex-col to stack input above the quantity row
    <div className="flex flex-col gap-4 bg-slate-800 p-4 rounded-md max-w-xs">
      {/* new: name input, controlled by name/setName */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className="bg-slate-700 text-sky-100 p-2 rounded-md"
      />

      {/* unchanged: quantity row, same as week 4, now wrapped in its own flex row */}
      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-slate-700 text-sky-100 w-8 h-8 rounded-md hover:bg-slate-600 disabled:opacity-30"
        >
          −
        </button>
        <span className="text-sky-100 text-lg w-6 text-center">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="bg-slate-700 text-sky-100 w-8 h-8 rounded-md hover:bg-slate-600 disabled:opacity-30"
        >
          +
        </button>
      </div>
    </div>
  );
}