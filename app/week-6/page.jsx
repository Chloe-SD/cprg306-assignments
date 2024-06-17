"use client"
import React, { useState } from "react";
import Header from "@/components/header";
import ItemsList from "../../components/item-list";
import NewItem from "@/components/new-item";
import itemsData from "../../public/items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData); // a copy of items list from the JSON file

    const addItem = (item) => {  // handler function for adding item, passed to NewItem component
      const lastId = items.length > 0 ? items[items.length-1].id : 0; // find ID of last item from list
      const newItem = {...item, id: lastId + 1}; // set ID property of the new item
      setItems([...items, newItem]); // add new item to the list copy
    };

    return (
      <main>
        <Header/>
        <h1 className="text-2xl font-semibold flex justify-center mb-4">Shopping List</h1>
        <NewItem onAddItem={addItem}/>
        <ItemsList itemsData={items}/>
      </main>
    );
  }