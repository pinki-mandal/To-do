// src/store/actions/todoActions.js
export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const editTodo = (todo) => ({
  type: 'EDIT_TODO',
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});
