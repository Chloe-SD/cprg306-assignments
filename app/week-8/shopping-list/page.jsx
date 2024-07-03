"use client"
import React, { useState } from "react";
import Header from "@/components/header";
import ItemsList from "./item-list";
import NewItem from "@/components/new-item";
import itemsData from "./items.json";
import MealIdeas from "@/components/meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData); // a copy of items list from the JSON file
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    const addItem = (item) => {  // handler function for adding item, passed to NewItem component
      const lastId = items.length > 0 ? items[items.length-1].id : 0; // find ID of last item from list
      const newItem = {...item, id: lastId + 1}; // set ID property of the new item
      setItems([...items, newItem]); // add new item to the list copy
    };

    const formatItemName = (itemName) => {
        return itemName
            .split(',')[0] // ignore anything after a comma
            .trim() // ignore whitespace (both sides)
            .replace(/[^\w\s]/gi, ''); // get rid of anything that is not a word
    }

    const handleSelectItem = (item) => {
        const simpleName = formatItemName(item.name);
        setSelectedIngredient(simpleName);
    };

    return (
      <main>
        <Header/>
        <h1 className="text-2xl font-semibold flex justify-center mb-4">Shopping List</h1>
        
        
        <div className="flex flex-wrap justify-center">

            <div className="w-2/3">
                <NewItem onAddItem={addItem}/>
                <ItemsList itemsData={items} onSelectItem={handleSelectItem}/>
            </div>
            <div className="w-1/3">
                {selectedIngredient ? (
                <MealIdeas ingredient={selectedIngredient} />
                ) : (
                <p>Please select an item</p>
                )}
            </div>
            

        </div>
      </main>
    );
  }