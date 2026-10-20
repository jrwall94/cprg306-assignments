"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((currentItems) => [...currentItems, newItem]);
  };
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <section className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-800">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </section>
    </main>
  );
}
