"use client";
import { useState } from "react";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import Home from "../components/home";
import MealIdeas from "./meal-ideas";

function fixItemName(name) {
  return name
    .split(",")[0]
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
    .trim();
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect(item) {
    setSelectedItemName(fixItemName(item.name));
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="flex justify-center text-4xl font-bold tracking-tight text-white">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <MealIdeas ingredient={selectedItemName} />
      </div>
      <Home />
    </main>
  );
}
