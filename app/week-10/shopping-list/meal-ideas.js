"use client";
import React, { useState } from "react";
import {useEffect} from "react";

async function fetchMealIdeas(ingredient) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  const data = await res.json();
  return data.meals || [];
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {
        if (!ingredient) {
            setMeals([]);
            return;
        }
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="m-4 rounded-xl border border-indigo-300/15 bg-slate-900/60 p-4 shadow-lg shadow-slate-950/20">
            <h2 className="text-2xl font-bold mb-4 capitalize text-center">{`Meal Ideas Using ${ingredient}`}</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="mb-2">
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    )
}
