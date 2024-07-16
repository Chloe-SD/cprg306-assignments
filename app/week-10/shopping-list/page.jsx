"use client"
import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import ItemsList from "./item-list";
import NewItem from "@/components/new-item";
import MealIdeas from "@/components/meal-ideas";
import { addItem, getItems } from "../_services/shopping_list_service";
import { AuthContextProvider } from "../_utils/auth-context";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    useEffect(() => {
      // Fetch items when component mounts
      const fetchItems = async () => {
          try {
              const fetchedItems = await getItems();
              setItems(fetchedItems);
          } catch (error) {
              console.error("Error fetching items: ", error);
          }
      };

      fetchItems();
    }, []);

    const handleAddItem = async (item) => {  // handler function for adding item, passed to NewItem component
      try {
        const itemId = await addItem(item);
        const newItem = { id: itemId, ...item };
        setItems([...items, newItem]);
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
      <AuthContextProvider>

      
      <main>
        <Header/>
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
      </AuthContextProvider>
    );
  }