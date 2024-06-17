"use client"
import React from 'react'; // allows us to set a state on client side of app

const Item = ({ item, onClick }) => {

    return ( 
      <div
        onClick={onClick} // method to toggle in itemsList component
        className={`bg-gradient-to-br from-blue-700 to-yellow-600 m-1 p-2 w-80 rounded-3xl 
        cursor-pointer transition-opacity duration-200 ${
        item.checked ? 'opacity-30' : 'opacity-100'
        }`}
      >
            
        <div className="text-xl font-semibold flex justify-center">{item.name}</div>
        <div className='flex justify-center'>Amount: {item.quantity} | Department: {item.category}</div>
      </div>
    );
};

export default Item;