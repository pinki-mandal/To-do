
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, editQuantity, editName, addTodo, deleteTodo } from '../redux/actions';
import TodoList from '../components/TodoList';
import { Link } from 'react-router-dom';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const cartItems = useSelector(state => state.cart);

  const handleAddToCart = (todoId) => {
    dispatch(addToCart(todoId));
  };

  const handleQuantityChange = (todoId, quantity) => {
    dispatch(editQuantity(todoId, quantity));
  };

  const handleEditName = (todoId, name) => {
    dispatch(editName(todoId, name));
  };

  const handleAddTodo = () => {
    dispatch(addTodo());
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div className="container">
      <h1>TODO List</h1>
      <button onClick={handleAddTodo}>Add TODO</button>
      <TodoList
        todos={todos}
        onAddToCart={handleAddToCart}
        onQuantityChange={handleQuantityChange}
        onEditName={handleEditName}
        onDelete={handleDelete}
      />

<div className="todo-routes">
        <Link to="/my-cart" className="cart-link">
          <IconButton aria-label="Add to Cart" className="cart-icon">
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Home;
