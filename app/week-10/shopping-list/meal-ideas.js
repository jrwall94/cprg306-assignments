"use client";

import { useState, useEffect } from "react";

// hits TheMealDB, returns the array of meals that contain this ingredient
async function fetchMealIdeas(ingredient) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await res.json();
  return data.meals || []; // API returns null (not []) when there's no match
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // re-fetch any time the selected ingredient changes
  useEffect(() => {
    async function loadMealIdeas() {
      const result = await fetchMealIdeas(ingredient);
      setMeals(result);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Meal Ideas</h2>
      <ul className="space-y-1">
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}