"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = [...items]
    .sort((a, b) => a.name.localeCompare(b.name))
    .reduce((groups, item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
      return groups;
    }, {});

  const buttonClass = (value) =>
    `rounded-md px-4 py-2 text-sm font-medium transition ${
      sortBy === value
        ? "bg-teal-600 text-white shadow-sm"
        : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
    }`;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        <span className="text-sm font-medium text-slate-600">Sort by:</span>
        <button onClick={() => setSortBy("name")} className={buttonClass("name")}>
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={buttonClass("category")}
        >
          Category
        </button>
        <button onClick={() => setSortBy("group")} className={buttonClass("group")}>
          Grouped Category
        </button>
      </div>

      {sortBy === "group" ? (
        <div className="space-y-6">
          {Object.keys(groupedItems)
            .sort()
            .map((category) => (
              <div key={category}>
                <h2 className="mb-3 text-xl font-semibold capitalize text-slate-700">
                  {category}
                </h2>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {groupedItems[category].map((item) => (
                    <Item key={item.id} {...item} />
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
