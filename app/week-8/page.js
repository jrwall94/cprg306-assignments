"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import Home from "../home";
import itemsData from "./items.json";

// strips anything after a comma (e.g. "1 kg") and any emoji, so "chicken breast, 1 kg 🍖"
// becomes "chicken breast" — safe to run even on names that are already clean
function cleanItemName(name) {
  return name
    .split(",")[0]
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
    .trim();
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    setSelectedItemName(cleanItemName(item.name));
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <section className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-800">
          Shopping List
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/2">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="lg:w-1/2">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </section>
      <Home />
    </main>
  );
}