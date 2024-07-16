"use client"
import React from 'react'; // allows us to set a state on client side of app

const Item = ({ item, onSelect }) => {

    return ( 
      <div
        className={`bg-gradient-to-br from-blue-700 to-yellow-600 m-1 p-2 w-80 rounded-3xl 
        border-2 border-pink-700 
        shadow-md shadow-purple-500
        cursor-pointer
        }`}
        onClick={() => onSelect(item)}
      >
            
        <div className="text-xl font-semibold flex justify-center">{item.name}</div>
        <div className='flex justify-center'>Amount: {item.quantity} | Department: {item.category}</div>
      </div>
    );
};

export default Item;