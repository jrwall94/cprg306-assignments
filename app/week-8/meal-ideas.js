"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  const data = await response.json();
  return data.message;
};

const loadMealIdeas = async () => {
    const mealIdeasList = await fetchMealIdeas();
    setMeals([])
}

export default function MealIdeas(ingredient) {
  const [meals, setMeals] = useState([]);
};
