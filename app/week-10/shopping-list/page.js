"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import Home from "../../home";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        const loadItems = async () => {
            try {
                const userItems = await getItems(user.uid);
                setItems(userItems);
            } catch (error) {
                console.error("Failed to load items:", error);
            }
        };

        if (user) {
            loadItems();
        }
    }, [user]);

    const handleAddItem = async (newItem) => {
        try {
            // Firestore generates the id, so drop the temporary one from NewItem
            const { id: _tempId, ...itemData } = newItem;
            const id = await addItem(user.uid, itemData);
            setItems((prevItems) => [...prevItems, { id, ...itemData }]);
        } catch (error) {
            console.error("Failed to add item:", error);
        }
    };

    const handleItemSelect = (item) => {
        const cleanName = item.name
            .split(",")[0]
            .replace(/[\p{Extended_Pictographic}️]/gu, "")
            .trim();
        setSelectedItemName(cleanName);
    };

    if (!user) {
        return (
            <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
                <section className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-xl bg-white p-8 text-center shadow">
                    <p className="text-slate-700">
                        You must be logged in to view the shopping list.
                    </p>
                    <Link href="/week-10" className="text-blue-600 hover:underline">
                        Go to the login page
                    </Link>
                </section>
            </main>
        );
    }

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
