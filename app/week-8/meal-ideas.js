"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  );
  const data = await response.json();
  return data.meals || [];
}

async function fetchMealIngredients(mealId) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await response.json();
  const meal = data.meals[0];

  // The API stores ingredients in numbered fields, strIngredient1 to strIngredient20
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (name && name.trim()) {
      ingredients.push(`${measure || ""} ${name}`.trim());
    }
  }
  return ingredients;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    if (!ingredient) {
      return;
    }

    // Ignore this response if another item was clicked before it came back
    let ignore = false;

    const loadMealIdeas = async () => {
      const newMeals = await fetchMealIdeas(ingredient);
      if (!ignore) {
        setMeals(newMeals);
        setSelectedMeal(null);
      }
    };

    loadMealIdeas();

    return () => {
      ignore = true;
    };
  }, [ingredient]);

  const handleMealClick = async (mealId) => {
    if (selectedMeal?.id === mealId) {
      setSelectedMeal(null);
      return;
    }
    const ingredients = await fetchMealIngredients(mealId);
    setSelectedMeal({ id: mealId, ingredients: ingredients });
  };

  return (
    <div>
      <h2 className="mb-3 text-xl font-semibold text-slate-700">Meal Ideas</h2>

      {!ingredient && (
        <p className="text-sm text-slate-600">
          Select an item to see meal ideas.
        </p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-sm text-slate-600">
          No meals found for {ingredient}.
        </p>
      )}

      {ingredient && meals.length > 0 && (
        <>
          <p className="mb-3 text-sm text-slate-600">
            Meals using {ingredient}:
          </p>
          <ul className="space-y-2">
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                onClick={() => handleMealClick(meal.idMeal)}
                className="cursor-pointer rounded-lg bg-white p-3 text-slate-800 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
              >
                <p className="font-medium">{meal.strMeal}</p>
                {selectedMeal?.id === meal.idMeal && (
                  <ul className="mt-2 list-inside list-disc text-sm text-slate-600">
                    {selectedMeal.ingredients.map((mealIngredient, index) => (
                      <li key={index}>{mealIngredient}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
