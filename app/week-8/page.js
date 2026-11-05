"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import Home from "../home";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanName = item.name
            .split(",")[0]
            .replace(/[\p{Extended_Pictographic}️]/gu, "")
            .trim();
        setSelectedItemName(cleanName);
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
            <section className="mx-auto max-w-5xl">
                <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-800">
                    Shopping List
                </h1>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="flex-1">
                        <div className="mb-8 flex justify-center">
                            <NewItem onAddItem={handleAddItem} />
                        </div>
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className="flex-1">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </section>
            <Home />
        </main>
    );
}
