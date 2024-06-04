"use client" // marks file as a client so that useSate can be implemented
import React, { useState } from 'react'; // allows us to set a state on client side of app

const NewItem = () => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    return <div>
        <form className='flex-col flex items-center p-4
        bg-gradient-to-br from-blue-700 to-yellow-600 rounded-lg'>
            <div className='flex justify-center'>
                <p className='flex items-center px-5'>Item Name:</p>
                <input type="text" placeholder="Item Name" required/>
            </div>
            <div className='flex justify-center'>
                <p className='flex items-center px-5'>Quantity:</p>
                <input type='number' min="1" max="99" required></input>
            </div>
            <div className='flex justify-center'>
                <p className='flex items-center justify-end px-5'>Category:</p>
                <select>
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