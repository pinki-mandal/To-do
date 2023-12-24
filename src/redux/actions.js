// src/redux/actions.js

export const addToCart = (todoId) => ({ type: 'ADD_TO_CART', payload: todoId });
export const editQuantity = (todoId, quantity) => ({ type: 'EDIT_QUANTITY', payload: { todoId, quantity } });
export const editName = (todoId, name) => ({ type: 'EDIT_NAME', payload: { todoId, name } });
export const addTodo = () => ({ type: 'ADD_TODO' });
export const deleteTodo = (todoId) => ({ type: 'DELETE_TODO', payload: todoId });
