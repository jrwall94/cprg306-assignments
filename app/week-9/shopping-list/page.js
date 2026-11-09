"use client";

import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import BackHome from "../../components/back-home";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md space-y-4">
          <BackHome />
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-lg p-6 text-center space-y-4">
            <h1 className="text-xl font-bold text-slate-100">Access Denied</h1>
            <p className="text-sm text-slate-400">
              You must be logged in to view the shopping list.
            </p>
            <Link
              href="/week-9"
              className="inline-flex items-center justify-center w-full h-11 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition"
            >
              Go to Login Page
            </Link>
          </div>
        </div>
      </main>
    );
  }

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
    <main className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <BackHome />

        <div className="flex items-center justify-between border-b border-slate-800 pb-5">
          <div>
            <h1 className="text-3xl font-bold text-slate-100">Shopping List</h1>
            <p className="text-sm text-slate-400 mt-1">
              Signed in as{" "}
              <span className="text-amber-400">
                {user.displayName || user.email}
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={firebaseSignOut}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 transition"
          >
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}