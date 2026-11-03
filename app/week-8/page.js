"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import BackHome from "../components/backhome";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 flex flex-col items-center">
      <title>Shopping List</title>
      <div className="w-full max-w-md space-y-8">
        <header className="text-center space-y-1">
          <h1 className="text-3xl font-extrabold text-amber-500 tracking-tight">
            Shopping List
          </h1>
          <p className="text-sm text-slate-400">
            {items.length} {items.length === 1 ? "item" : "items"} on your list
          </p>
        </header>

        <NewItem onAddItem={handleAddItem} />

        <hr className="border-slate-800/80" />

        <ItemList items={items} />

        <div className="flex justify-center pt-2">
          <BackHome />
        </div>
      </div>
    </main>
  );
}