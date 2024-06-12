"use client" // marks file as a client so that useSate can be implemented
import React, { useState } from 'react'; // allows us to set a state on client side of app

const Item = ({ List }) => {

    // a key/value pair of item index / clicked status.
    const [clickedItems, setClickedItems] = useState({});
  
    // method to toggle click status of a particular items index
    const handleClick = (id) => {
        setClickedItems((prevClickedItems) => ({
          ...prevClickedItems,
          [id]: !prevClickedItems[id],
        }));
      };

    return <div className="flex flex-wrap justify-center">
        {List && List.map((item) =>(
        <div
        key={item.id} // unique key (could not deploy on vercel w/out this)
        onClick={() => handleClick(item.id)} // method to toggle opacity when clicked
        className={`bg-gradient-to-br from-blue-700 to-yellow-600 m-1 p-2 w-80 rounded-lg 
        cursor-pointer transition-opacity duration-200 ${
          clickedItems[item.id] ? 'opacity-30' : 'opacity-100' //opacity settings
        }`}
      >
            
            <div className="text-xl font-semibold flex justify-center">{item.name}</div>
            <div className='flex justify-center'>Amount: {item.quantity} | Department: {item.category}</div>
        </div>))}

    </div>;

};

export default Item;