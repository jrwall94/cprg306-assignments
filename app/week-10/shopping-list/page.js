"use client";

import { useState , useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import Home from "../../home";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

// strips anything after a comma (e.g. "1 kg") and any emoji, so "chicken breast, 1 kg 🍖"
// becomes "chicken breast" — safe to run even on names that are already clean
function cleanItemName(name) {
  return name
    .split(",")[0]
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
    .trim();
}

export default function Page() {
  const [items, setItems] = useState([]); // starts empty, filled from Firestore
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth();

  // Load this user's items once they're signed in
  useEffect(() => {
    async function loadItems() {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
    if (user) loadItems();
  }, [user]);

  // All hooks must run before this early return
  if (!user) {
    return <p className="p-8">You must be logged in to view this page.</p>;
  }

  // Save to Firestore first, then show it using the id Firestore generated
  async function handleAddItem(newItem) {
    const { id, ...itemData } = newItem; // drop any local id from NewItem
    const newId = await addItem(user.uid, itemData);
    setItems((prev) => [...prev, { id: newId, ...itemData }]);
  }

  // Clean the selected item's name before passing it to MealIdeas  ← this was missing
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