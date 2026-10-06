// app/week-5/new-item.js
"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

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

  // new: submission handler
  function handleSubmit(event) {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log(item);
    alert(`Added: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-slate-800 p-4 rounded-md max-w-xs"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
        className="bg-slate-700 text-sky-100 p-2 rounded-md"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-slate-700 text-sky-100 p-2 rounded-md"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-slate-700 text-sky-100 w-8 h-8 rounded-md hover:bg-slate-600 disabled:opacity-30"
        >
          −
        </button>
        <span className="text-sky-100 text-lg w-6 text-center">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className="bg-slate-700 text-sky-100 w-8 h-8 rounded-md hover:bg-slate-600 disabled:opacity-30"
        >
          +
        </button>
      </div>

      {/* new: submit button */}
      <button
        type="submit"
        className="bg-sky-700 text-sky-100 p-2 rounded-md hover:bg-sky-600"
      >
        Add Item
      </button>
    </form>
  );
}