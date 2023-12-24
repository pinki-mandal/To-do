// src/redux/reducer.js

const initialState = {
    todos: [
      { id: 1, name: 'Task 1', quantity: 1 },
      { id: 2, name: 'Task 2', quantity: 1 },
      // Add more tasks if needed
    ],
    cart: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const todoToAdd = state.todos.find(todo => todo.id === action.payload);
        return {
          ...state,
          cart: [...state.cart, { ...todoToAdd }],
        };
  
      case 'EDIT_QUANTITY':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.todoId
              ? { ...todo, quantity: action.payload.quantity }
              : todo
          ),
        };
  
      case 'EDIT_NAME':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.todoId
              ? { ...todo, name: action.payload.name }
              : todo
          ),
        };
  
      case 'ADD_TODO':
        const newTodoId = state.todos.length + 1;
        return {
          ...state,
          todos: [...state.todos, { id: newTodoId, name: `Task ${newTodoId}`, quantity: 1 }],
        };
  
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  