"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState();

  const handleItemSelect = (name) => {
    const cleanedName = name
      .split(",")[0]
      .replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu, "")
      .trim()
      .replace(" ", "_");
    setSelectedItem(cleanedName);
  };

  const handleAddItem = (newItem) => {
    setItems((currentItems) => [...currentItems, newItem]);
  };
  //Check MealIdeas with ingredient.trim(',')[0]
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <div className="flex justify-evenly">
        <section className="max-w-2/5">
          <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-800">
            Shopping List
          </h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </section>
        <section className="max-w-2/5">
          <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-800">
            Recipes:
          </h1>
          {selectedItem && (
            <h2 className="text-xl mb-5">
              Containing {selectedItem.replace("_", " ")}:
            </h2>
          )}
          <MealIdeas ingredient={selectedItem} />
        </section>
      </div>
    </main>
  );
}
