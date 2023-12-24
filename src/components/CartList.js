// src/components/CartList.jsx

import React from 'react';

const CartList = ({ cartItems }) => {
  return (
    <ul>
      {cartItems.map(item => (
        <li key={item.id}>
          {item.name} - Quantity: {item.quantity}
        </li>
      ))}
    </ul>
  );
};

export default CartList;
