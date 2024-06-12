"use client"
import { useEffect, useState } from 'react';
import Item from './Item';
import itemsData from '../../public/items.json';

const ItemsList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="flex flex-col items-center">
      <div className="my-4 space-x-4">
        <button
          onClick={() => setSortBy('name')}
          className={`${sortBy === 'name' ? 'text-white py-2' : 'text-gray-800'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`${sortBy === 'category' ? 'text-white py-2' : 'text-gray-800'}`}
        >
          Sort by Category
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {sortedItems.map((item, index) => (
          <Item key={item.id} List={[item]} />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
