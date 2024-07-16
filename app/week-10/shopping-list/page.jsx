//week-10/shopping-list/page.js
"use client"
import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import ItemsList from "./item-list";
import NewItem from "@/components/new-item";
import MealIdeas from "@/components/meal-ideas";
import { addItem, getItems } from "../_services/shopping_list_service";
import { useUserAuth } from "../_utils/auth-context";



export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    useEffect(() => {
      if (!user) return;

      const unsubscribe = getItems(user.uid, setItems);

      return () => unsubscribe();
    }, [user]);

    const handleAddItem = async (item) => {  // handler function for adding item, passed to NewItem component
      if (!user) {
        console.error("User not authenticated");
        return;
      }
      try {
        const addedItems = await addItem(user.uid, item);
        console.log("Json response: ", addedItems);
      } catch (error) {
          console.error("Error adding item: ", error);
      }
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

    if (!user) {
      return (
        <main>
          <Header/>
          <p>No authorization found</p>
        </main>
        
      )
    }

    return (
      <main>
        <Header/>
        User: {user?.displayName}, {user?.email}
        <h1 className="text-2xl font-semibold flex justify-center mb-4">Shopping List</h1>
        
        
        <div className="flex flex-wrap justify-center">

            <div className="w-2/3">
                <NewItem onAddItem={handleAddItem}/>
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