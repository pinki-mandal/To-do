// store/actions/cartActions.js
export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
  });  