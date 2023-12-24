// src/pages/MyCart.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';

const MyCart = () => {
  const cartItems = useSelector(state => state.cart);

  return (
    <div className="container">
      <h1>My Cart</h1>
      <CartList cartItems={cartItems} />
    </div>
  );
};

export default MyCart;
