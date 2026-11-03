"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // 1. Create a sorted copy of the items array
  const sortedItems = [...items].sort((a, b) => {
    const sortField = sortBy === "category" ? "category" : "name";
    return a[sortField].localeCompare(b[sortField]);
  });

  // 2. Group the sorted items into an object by category
  const groupByCategory = sortedItems.reduce((accumulator, item) => {
    if (!accumulator[item.category]) {
      accumulator[item.category] = [];
    }
    accumulator[item.category].push(item);
    return accumulator;
  }, {});

  // 3. Get an alphabetical list of the category names
  const categories = Object.keys(groupByCategory).sort();

  const getButtonClass = (type) =>
    `px-4 py-2 text-sm font-semibold rounded-xl border transition-all duration-150 active:scale-95 ${
      sortBy === type
        ? "bg-amber-500 border-amber-500 text-slate-950 shadow-sm"
        : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-600"
    }`;

  return (
    <div className="w-full max-w-md">
      {/* Sort Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
          Sort by:
        </span>
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={getButtonClass("name")}
        >
          Name
        </button>
        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={getButtonClass("category")}
        >
          Category
        </button>

        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 ml-1">
          Group by:
        </span>
        <button
          type="button"
          onClick={() => setSortBy("grouped")}
          className={getButtonClass("grouped")}
        >
          Category
        </button>
      </div>

      {/* Render Grouped View if "grouped" is selected, otherwise Flat List */}
      {sortBy === "grouped" ? (
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-amber-500 mb-2 pl-1">
                {category}
              </h3>
              <ul className="w-full space-y-3">
                {groupByCategory[category].map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="w-full space-y-3">
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
