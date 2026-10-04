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
    let newName = e.target.value;
    if (newName.length > 0) {
      setName(newName);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Item Name"
          value={name}
          onChange={handleNameChange}
        ></input>
        <Counter quantity={quantity} setQuantity={setQuantity} />
        <select id="category" value={category} onChange={handleCategoryChange}>
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
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
