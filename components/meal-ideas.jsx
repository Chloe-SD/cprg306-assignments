"use client"
import React, { useState, useEffect } from "react"

//The MealIdeas component is responsible 
//for fetching and displaying meal ideas 
//based on a selected shopping list item

// This is the function to fetch the ideas from the API:::
async function fetchIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}


const MealIdeas = ({ ingredient= '' }) => {
    
    const [meals, setMeals] = useState([]);
    
    const getMealIdeas = async () => {
        if (ingredient) { // only run if actually passed an ingredient!
            const possibleMeals = await fetchIdeas(ingredient); // pass ingredient to fetch function
            setMeals(possibleMeals || []);
        }
    }

    // This will get new ideas whenever the ingredient prop changes
    useEffect(() => {
        getMealIdeas();
    }, [ingredient]); 

    return (
        <div>
            <h1>Meal Ideas for {ingredient}</h1>
            <ul className="space-y-2">
                {meals.map(meal => (
                    <li key={menubar.idMeal}>
                        <div className="flex space-x-5 border-2"> 
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="h-20 w-20" />
                            <h2 className="flex text-lg items-center">{meal.strMeal}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}



export default MealIdeas;