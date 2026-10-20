"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const [isGrouped, setIsGrouped] = useState(false);

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy]),
  );

  const groupedItems = sortedItems.reduce((accumulator, currentItem) => {
    const key = currentItem.category;
    //Initialize array if it doesn't already exist for current category
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    //Add current item into the correct category
    accumulator[key].push(currentItem);
    return accumulator;
    //Start with an empty array each time
  }, {});

  return (
    <section>
      <div className="flex mb-5 gap-5 justify-center">
        <button
          onClick={() => {
            setSortBy("name");
            setIsGrouped(false);
          }}
          className={`px-2 py-1 rounded-lg ${sortBy == "name" && !isGrouped ? "bg-slate-700 text-white" : "bg-slate-300"}`}
        >
          Sort by name
        </button>
        <button
          onClick={() => {
            setSortBy("category");
            setIsGrouped(false);
          }}
          className={`px-2 py-1 rounded-lg ${sortBy == "category" && !isGrouped ? "bg-slate-700 text-white" : "bg-slate-300"}`}
        >
          Sort by category
        </button>
        <button
          onClick={() => {
            setSortBy("category");
            setIsGrouped(true);
          }}
          className={`px-2 py-1 rounded-lg ${isGrouped == true ? "bg-slate-700 text-white" : "bg-slate-300"}`}
        >
          Group by category
        </button>
      </div>
      {/* Display regular item list if items shouldn't be grouped */}
      {!isGrouped && (
        <ul className="grid grid-cols-1 gap-3 max-w-md m-auto">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}
      {/* Display grouped item list if grouped is selected */}
      {isGrouped && (
        <div className="grid grid-cols-1 gap-3 max-w-md m-auto">
          {Object.entries(groupedItems).map(([category, items]) => (
            <ul
              key={category}
              className="font-bold capitalize flex flex-col gap-1"
            >
              {category}
              {items.map((item) => (
                <Item key={item.id} {...item} />
              ))}
            </ul>
          ))}
        </div>
      )}
    </section>
  );
}
