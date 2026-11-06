"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import BackHome from "../components/backhome";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    if (!item || !item.name) return;
    const cleanedName = item.name
      .split(",")[0]
      .replace(/\p{Extended_Pictographic}/gu, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 flex flex-col items-center">
      <title>Shopping List</title>
      <div className="w-full max-w-4xl space-y-8">
        <header className="text-center space-y-1">
          <h1 className="text-3xl font-extrabold text-amber-500 tracking-tight">
            Shopping List
          </h1>
          <p className="text-sm text-slate-400">
            {items.length} {items.length === 1 ? "item" : "items"} on your list
          </p>
        </header>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Form + Shopping List */}
          <div className="w-full space-y-6">
            <NewItem onAddItem={handleAddItem} />
            <hr className="border-slate-800/80" />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          {/* Right Column: Sticky Meal Ideas Panel */}
          <div className="w-full md:sticky md:top-8">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <BackHome />
        </div>
      </div>
    </main>
  );
}