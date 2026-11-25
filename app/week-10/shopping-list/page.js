"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useState, useEffect } from "react";
import Link from "next/link";
import {getItems, addItem} from "../_services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./item-list";
import Home from "../../components/home";
import MealIdeas from "./meal-ideas";

function fixItemName(name) {
  return name
    .split(",")[0]
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
    .trim();
}

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  function handleItemSelect(item) {
    setSelectedItemName(fixItemName(item.name));
  }

  const handleAddItem = async(newItem) => {
    if (!user) return;
    const { id, ...itemData } = newItem;
    const addedItemId = await addItem(user.uid, itemData);
    if (addedItemId) {
      const itemWithId = {...newItem, id: addedItemId.id}; 
      setItems((prevItems) => [...prevItems, itemWithId]);
    }
  };
  
  if (!user) {
    return (
      <main className="mx-auto max-w-6xl p-6">
        <h1 className="flex justify-center text-4xl font-bold tracking-tight text-white">
          No user found.
        </h1>
        <p className="mt-4 text-center text-lg text-slate-300">
          Please sign in to access your shopping list.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/week-10"
            className="rounded-lg bg-teal-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
          >
            Click Here to go to login page
          </Link>
      
        </div>
        <div className="mt-6 flex justify-center">
          <Home />
        </div>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div>
        <h1 className="flex justify-center text-4xl font-bold tracking-tight text-white">
          Shopping List
        </h1>
        <Home />
      </div>
      <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="min-w-0">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
      <Home />
    </main>
  );
}
