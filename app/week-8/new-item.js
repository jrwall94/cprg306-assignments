"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = Math.random().toString(36).substring(2, 9);
    const item = { id: newId, name, quantity, category };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const categoryList = [
    { label: "Produce", value: "produce" },
    { label: "Dairy", value: "dairy" },
    { label: "Bakery", value: "bakery" },
    { label: "Meat", value: "meat" },
    { label: "Frozen Foods", value: "frozen foods" },
    { label: "Canned Goods", value: "canned goods" },
    { label: "Dry Goods", value: "dry goods" },
    { label: "Beverages", value: "beverages" },
    { label: "Snacks", value: "snacks" },
    { label: "Household", value: "household" },
    { label: "Other", value: "other" },
  ];

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl shadow-lg p-6">
      <h2 className="text-lg font-semibold text-slate-200 mb-4">
        Add New Item
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Item Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
          >
            Item Name
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="e.g., Milk, Apples, Bread"
            value={name}
            onChange={handleNameChange}
            className="w-full h-11 px-4 rounded-xl border border-slate-700/80 bg-slate-800/90 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
          />
        </div>

        {/* Quantity and Category Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Quantity Stepper */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Quantity
            </label>
            <div className="flex items-center justify-between h-11 bg-slate-800/90 border border-slate-700/80 rounded-xl px-1.5">
              <button
                type="button"
                onClick={decrement}
                disabled={quantity <= 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700 text-slate-100 font-bold text-lg hover:bg-slate-600 active:scale-95 transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-700 disabled:active:scale-100"
              >
                -
              </button>
              <span className="text-base font-bold text-slate-100">
                {quantity}
              </span>
              <button
                type="button"
                onClick={increment}
                disabled={quantity >= 20}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700 text-slate-100 font-bold text-lg hover:bg-slate-600 active:scale-95 transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-700 disabled:active:scale-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Category Dropdown */}
          <div>
            <label
              htmlFor="category"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={handleCategoryChange}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-700/80 bg-slate-800/90 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition capitalize"
            >
              {categoryList.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-11 mt-1 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold text-sm shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}