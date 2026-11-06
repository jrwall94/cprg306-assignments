"use client";

import { useState, useEffect } from "react";

function cleanIngredient(text) {
  if (!text) return "";
  return text
    .split(",")[0]
    .replace(/\p{Extended_Pictographic}/gu, "")
    .trim()
    .toLowerCase();
}

function getAlternativeForm(word) {
  if (word.endsWith("ies")) {
    return word.slice(0, -3) + "y";
  }
  if (
    word.endsWith("oes") ||
    word.endsWith("ches") ||
    word.endsWith("shes") ||
    word.endsWith("xes")
  ) {
    return word.slice(0, -2);
  }
  if (word.endsWith("s") && !word.endsWith("ss")) {
    return word.slice(0, -1);
  }
  return word + "s";
}

async function fetchMealIdeas(ingredient) {
  const cleanedIngredient = cleanIngredient(ingredient);
  if (!cleanedIngredient) return [];

  try {
    // 1. Try fetching with the exact cleaned ingredient first
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        cleanedIngredient
      )}`
    );
    const data = await response.json();

    if (data.meals && data.meals.length > 0) {
      return data.meals;
    }

    // 2. Fallback: If no results found, try the singular/plural alternative
    const altIngredient = getAlternativeForm(cleanedIngredient);
    const fallbackResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        altIngredient
      )}`
    );
    const fallbackData = await fallbackResponse.json();

    return fallbackData.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const fetchedMealIdeas = await fetchMealIdeas(ingredient);
    setMeals(fetchedMealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-200">Meal Ideas</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {ingredient ? (
              <>
                Showing recipes using{" "}
                <span className="text-amber-400 font-semibold capitalize">
                  {ingredient}
                </span>
              </>
            ) : (
              "Select an item from your list to see recipes"
            )}
          </p>
        </div>

        {ingredient && meals.length > 0 && (
          <span className="flex items-center justify-center min-w-8 h-7 px-2.5 bg-slate-800/90 border border-slate-700/80 rounded-lg text-xs font-bold text-amber-400">
            {meals.length}
          </span>
        )}
      </div>

      {!ingredient ? (
        <div className="py-12 px-4 text-center border border-dashed border-slate-800 rounded-xl bg-slate-950/40">
          <p className="text-sm text-slate-400 font-medium">
            Click on any shopping list item to discover meal ideas.
          </p>
        </div>
      ) : meals.length > 0 ? (
        <ul className="space-y-2.5 max-h-[540px] overflow-y-auto pr-1">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center gap-3.5 p-2.5 bg-slate-800/60 border border-slate-700/60 rounded-xl hover:border-amber-500/40 hover:bg-slate-800 transition duration-150"
            >
              {meal.strMealThumb && (
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-12 h-12 rounded-lg object-cover border border-slate-700 shrink-0"
                />
              )}
              <span className="text-sm font-medium text-slate-100 leading-snug">
                {meal.strMeal}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-12 px-4 text-center border border-dashed border-slate-800 rounded-xl bg-slate-950/40">
          <p className="text-sm text-slate-400">
            No meal ideas found for{" "}
            <span className="text-slate-200 font-semibold capitalize">
              {ingredient}
            </span>
            .
          </p>
        </div>
      )}
    </div>
  );
}