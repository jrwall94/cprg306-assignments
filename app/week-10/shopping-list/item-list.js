"use client";
import Item from "./item";
import { useState } from "react";


export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const groupedItems = items.reduce((groups, item) => {
    const category = item.category.trim().toLowerCase();
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  const sortedGroups = Object.entries(groupedItems).sort(([categoryA], [categoryB]) =>
    categoryA.localeCompare(categoryB),
  );

  const getButtonClass = (type) => {
    return sortBy === type
      ? "m-2 rounded-lg border border-teal-300/50 bg-teal-300 px-3 py-1 text-lg font-semibold text-slate-950"
      : "m-2 rounded-lg border border-indigo-300/20 bg-slate-800 px-3 py-1 text-lg text-slate-200 transition hover:border-teal-300/50 hover:bg-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300";
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <span className="text-lg text-slate-300">Sort By: </span>
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
        <span className="text-lg text-slate-300">Group By: </span>
        <button
          type="button"
          onClick={() => setSortBy("grouped")}
          className={getButtonClass("grouped")}
        >
          Category
        </button>
      </div>
      {sortBy === "grouped" ? (
        <div>
          {sortedGroups.map(([category, categoryItems]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-4 capitalize text-center">{category}</h2>
              <ul>
                {[...categoryItems]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item key={item.id} item={item} onSelect={() => onItemSelect(item)} />
                  ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={() => onItemSelect(item)} />
        ))}
      </div>
      )}
    </div>
  );
}
