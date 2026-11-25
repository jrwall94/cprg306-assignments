"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 12);
    const item = {
      id: id,
      name: name,
      category: category,
      quantity: quantity,
    };
    console.log(item);
    alert(`Item ${name} Added!`);
    onAddItem({ ...item, id });
    setName("");
    setCategory("Produce");
    setQuantity(1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const categoryList = [
    { value: "Produce", label: "produce" },
    { value: "Dairy", label: "dairy" },
    { value: "Bakery", label: "bakery" },
    { value: "Meat", label: "meat" },
    { value: "Frozen Foods", label: "frozen foods" },
    { value: "Canned Goods", label: "canned goods" },
    { value: "Dry Goods", label: "dry goods" },
    { value: "Beverages", label: "beverages" },
    { value: "Snacks", label: "snacks" },
    { value: "Household", label: "household" },
    { value: "Other", label: "other" }
  ];

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center justify-center rounded-xl border border-indigo-300/15 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30"
      >
        <div className="flex flex-col items-center">
          <label htmlFor="itemName" className="text-2xl">
            Item Name:
          </label>
          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => handleNameChange(e)}
            className="m-2 w-3/4 rounded-lg border border-indigo-300/20 bg-slate-950/70 p-2 text-slate-100 placeholder:text-slate-500 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/30"
            required
          />
          <label htmlFor="category" className="text-2xl">
            Category:
          </label>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e)}
            className="m-2 w-3/4 rounded-lg border border-indigo-300/20 bg-slate-950/70 p-2 text-slate-100 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/30"
          >
            {categoryList.map((cat) => (
              <option key={cat.label} className="text-black" value={cat.value}>
                {cat.value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="m-2 w-10 rounded-lg border border-indigo-300/20 bg-slate-800 p-2 text-2xl text-teal-200 transition hover:bg-indigo-900 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            >
              -
            </button>
            <p className="text-2xl m-2">{quantity}</p>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="m-2 w-10 rounded-lg border border-indigo-300/20 bg-slate-800 p-2 text-2xl text-teal-200 transition hover:bg-indigo-900 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            >
              +
            </button>
          </div>
          <button
            type="submit"
            className="m-2 rounded-lg bg-teal-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
