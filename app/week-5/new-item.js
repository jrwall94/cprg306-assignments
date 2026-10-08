"use client";
import { useState } from "react";
export default function Form() {
    let [quantity, setQuantity] = useState(0);
    let [name, setName] = useState("");
    let [category, setCategory] = useState("produce");

    const MIN = 0;
    const MAX = 20;

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            name: name,
            category: category,
            quantity: quantity
        };
        console.log(item);
        alert(`Item Name: ${item.name}, Category: ${item.category}, Quantity: ${item.quantity}`);
        setName("");
        setCategory("produce");
        setQuantity(0);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

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
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
            <input
                type="text"
                id="name"
                placeholder="Item name"
                value={name}
                onChange={handleNameChange}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none"
            />
            <div className="flex flex-row gap-3">
                <div className="flex flex-row items-center rounded-lg border border-gray-300">
                    <button
                        type="button"
                        onClick={decrement}
                        disabled={quantity === MIN}
                        className="px-3 py-2 text-gray-700 enabled:hover:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed rounded-l-lg"
                    >
                        &minus;
                    </button>
                    <span className="w-8 text-center text-gray-900 tabular-nums">{quantity}</span>
                    <button
                        type="button"
                        onClick={increment}
                        disabled={quantity === MAX}
                        className="px-3 py-2 text-gray-700 enabled:hover:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed rounded-r-lg"
                    >
                        +
                    </button>
                </div>
                <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={handleCategoryChange}
                    className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-gray-900 focus:outline-none"
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
            <button
                type="submit"
                className="w-full rounded-lg bg-gray-900 py-2 font-medium text-white hover:bg-gray-700"
            >
                Add Item
            </button>
        </form>
    );
}
