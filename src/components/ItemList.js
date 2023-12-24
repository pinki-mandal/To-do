
// src/components/ItemList.js
import React from 'react';

const ItemList = ({ items, onAddToCart, onQuantityChange }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => onQuantityChange(item.id, e.target.value)}
          />
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
