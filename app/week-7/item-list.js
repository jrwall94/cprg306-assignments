"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items = [] }) {
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

  const getTabClass = (type) =>
    `flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all duration-150 ${
      sortBy === type
        ? "bg-amber-500 text-slate-950 shadow-sm font-bold"
        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
    }`;

  return (
    <div className="w-full space-y-5">
      {/* Unified Segmented Sort Control */}
      <div className="bg-slate-900/90 border border-slate-800 p-1.5 rounded-xl flex items-center gap-1">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={getTabClass("name")}
        >
          Sort by Name
        </button>
        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={getTabClass("category")}
        >
          Sort by Category
        </button>
        <button
          type="button"
          onClick={() => setSortBy("grouped")}
          className={getTabClass("grouped")}
        >
          Group by Category
        </button>
      </div>

      {/* Render Grouped View if "grouped" is selected, otherwise Flat List */}
      {sortBy === "grouped" ? (
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category} className="space-y-2.5">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                  {category}
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  {groupByCategory[category].length}
                </span>
              </div>
              <ul className="w-full space-y-2.5">
                {groupByCategory[category].map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="w-full space-y-2.5">
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}