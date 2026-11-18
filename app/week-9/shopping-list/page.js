"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();
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
      {user && (
        <div className="flex justify-evenly">
          <section className="max-w-2/5">
            <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-slate-800">
              Shopping List
            </h1>
            <Link href={"/week-9"} className="text-blue-600 hover:underline">
              <p className="text-center">
                Click here to return to the sign in page
              </p>
            </Link>
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
      )}
      {!user && (
        <div>
          <p>Please sign in to see your shopping list</p>
          <Link href={"/week-9"} className="text-blue-600 hover:underline">
            Click here to visit the sign in page
          </Link>
        </div>
      )}
    </main>
  );
}
