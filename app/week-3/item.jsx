import React from "react";

const Item =({List})=>{
    return <div className="flex flex-wrap justify-center">
        {List && List.map((I, index) =>(
        <div key={index} // using index as a unique key because the items don't have unique IDs
        className="bg-gradient-to-br from-blue-700 to-yellow-600 m-1 p-2 w-80 rounded-lg">
            
            <div className="text-xl font-semibold">{I.name}</div>
            Amount: {I.quantity} | Department: {I.category}
        </div>))}

    </div>;

};

export default Item