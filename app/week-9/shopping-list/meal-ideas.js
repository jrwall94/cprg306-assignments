"use client";

import { useState, useEffect } from "react";
import Meal from "./meal";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await response.json();
    return data.meals;
  }

  useEffect(() => {
    async function loadMealIdeas(ingredient) {
      const newMeals = await fetchMealIdeas(ingredient);
      setMeals(newMeals || []);
    }
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="grid grid-cols-1 gap-3 max-w-75">
      {meals.map((meal) => (
        <Meal
          key={meal.idMeal}
          name={meal.strMeal}
          imageurl={meal.strMealThumb}
        />
      ))}
    </div>
  );
}
