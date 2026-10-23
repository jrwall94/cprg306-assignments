"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import Home from "../home";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
            <section className="mx-auto max-w-3xl">
                <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-800">
                    Shopping List
                </h1>
                <div className="mb-8 flex justify-center">
                    <NewItem onAddItem={handleAddItem} />
                </div>
                <ItemList items={items} />
            </section>
            <Home />
        </main>
    );
}