"use client";

import Item from "./item";
import { useState } from "react";
import itemList from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  itemList.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <section>
      <div className="flex mb-5 gap-5">
        <button
          onClick={() => setSortBy("name")}
          className={`px-2 py-1 rounded-lg ${sortBy == "name" ? "bg-amber-300" : "bg-slate-300"}`}
        >
          Sort by name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-2 py-1 rounded-lg ${sortBy == "category" ? "bg-amber-300" : "bg-slate-300"}`}
        >
          Sort by category
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {itemList.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
