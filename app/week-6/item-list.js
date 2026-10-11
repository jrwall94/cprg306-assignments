"use client";
import {useState} from "react";
import Item from "./item";
import items from "./items.json";


export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = [...items] . sort((a, b) => {
    if (sortBy === "name") return a .name .localeCompare(b.name);
    if (sortBy === "category") return a .category . localeCompare(b.category);
    return 0;
  });

  const groupedItems = [...items]
  .sort((a, b) => a.name.localeCompare(b.name))
  .reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  

  return (
     <>
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => setSortBy("name")}
        className={sortBy === "name" ? "bg-slate-700 text-white px-3 py-1 rounded" : "bg-slate-200 text-slate-700 px-3 py-1 rounded"}
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className={sortBy === "category" ? "bg-slate-700 text-white px-3 py-1 rounded" : "bg-slate-200 text-slate-700 px-3 py-1 rounded"}
      >
        Sort by Category
      </button>
      <button
          onClick={() => setSortBy("grouped")}
          className={sortBy === "grouped" ? "bg-slate-700 text-white px-3 py-1 rounded" : "bg-slate-200 text-slate-700 px-3 py-1 rounded"}
>
  Group by Category
</button>
    </div>

    {sortBy === "grouped" ? (
      <div className="space-y-4">
        {Object.entries(groupedItems)
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([category, categoryItems]) => (
            <div key={category}>
              <h2 className="text-lg font-bold capitalize mb-2">{category}</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {categoryItems.map((item) => (
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
  </>
  );
}
    
    
    

    



