// src/components/TodoList.jsx

import React from 'react';

const TodoList = ({ todos, onAddToCart, onQuantityChange, onEditName, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="text"
            value={todo.name}
            onChange={(e) => onEditName(todo.id, e.target.value)}
          />
          <input
            type="number"
            value={todo.quantity}
            onChange={(e) => onQuantityChange(todo.id, e.target.value)}
          />
          <button onClick={() => onAddToCart(todo.id)}>Add to Cart</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
