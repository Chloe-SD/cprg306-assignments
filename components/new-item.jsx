"use client" // marks file as a client so that useSate can be implemented
import React, { useState } from 'react'; // allows us to set a state on client side of app

const NewItem = ({ onAddItem }) => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents default form submission behavior
        const item = { name, quantity, category }; // create an item to hold the form inputs
        if (onAddItem != null){
            onAddItem(item);
        } else {
            alert(`You have added the Item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`); 
        };    
        console.log(item); // write the item to console
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return <div className="flex justify-center w-max-content h-max mb-4">
        <form onSubmit={handleSubmit} 
        className='flex-col flex items-center p-4
        bg-gradient-to-br from-blue-700 to-yellow-600 rounded-lg'>
            
            <div className='flex justify-center'>
                <p className='flex items-center px-5'>Item Name:</p>
                <input type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder="Item Name" 
                required/>
            </div>
            
            <div className='flex justify-center'>
                <p className='flex items-center px-5'>Quantity:</p>
                <input type='number'
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1" max="99" 
                required/>
            </div>
            
            <div className='flex justify-center'>
                <p className='flex items-center justify-end px-5'>Category:</p>
                <select value={category}
                onChange={(e) => setCategory(e.target.value)}>
                    <option value disabled="Category"></option>
                    <option value="produce" selected>Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button type='submit' className='w-3/4 mt-4'>Add Item</button>
        </form>
    </div>

};

export default NewItem;