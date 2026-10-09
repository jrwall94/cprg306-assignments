"use client";
import Counter from "../week-4/counter";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    let item = { name, quantity, category };
    console.log(item);
    alert(
      `Name: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`,
    );
    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="mx-auto mt-6 w-full max-w-md rounded-xl border border-slate-200 bg-white p-4 shadow-md sm:p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700"
          >
            Item name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter grocery item"
            value={name}
            onChange={handleNameChange}
            required
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[auto_1fr]">
          <fieldset className="space-y-1">
            <legend className="text-sm font-medium text-slate-700">
              Quantity
            </legend>
            <Counter quantity={quantity} setQuantity={setQuantity} />
          </fieldset>
          <div className="space-y-1">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-slate-700"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozenFoods">Frozen Foods</option>
              <option value="cannedGoods">Canned Goods</option>
              <option value="dryGoods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          Add item
        </button>
      </form>
    </div>
  );
}
