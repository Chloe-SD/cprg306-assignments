"use client"
import { useEffect, useState } from 'react';
import Item from './item';

const ItemsList = ({ itemsData, onSelectItem }) => {
  
  // state for sort method
  const [sortBy, setSortBy] = useState('name'); //default sort: by name
  // States for setting check / uncheck status of items
  const [Items, setItems] = useState([]);

  useEffect(() => {
    // Retrieve list of items from the JSON file and add a checked property
    const itemsWithChecked = itemsData.map(item => ({ ...item, checked: false }));
    setItems(itemsWithChecked);
  }, [itemsData]);

  // maintain a sorted list
  const sortedItems = [...Items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Finally the return statement HTML component
  return (
    <div className='flex flex-col items-center'>
      <div className='my-4 space-x-4'>
        <button
          onClick={() => setSortBy('name')}
          className={`${sortBy === 'name' ? 'text-white py-2' : 'text-gray-800'}`}>
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`${sortBy === 'category' ? 'text-white py-2' : 'text-gray-800'}`}>
          Sort by Category
        </button>
      </div>
      <div className="px-5 flex-column justify-center">
        {/* <p className=" flex justify-center">tip: Click on items to check them off as you shop<br/>
        feature: This list will adjust to your screen size!</p>     */}
      </div>
      <div className='flex flex-wrap justify-center mt-3'>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onSelect={onSelectItem}
          />
        ))}
      </div>
    </div>
  )

};

export default ItemsList;
