// src/redux/store.js

import { createStore } from 'redux';
import reducer from './reducer';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
    // Log errors or handle them as needed
  }
};

const store = createStore(
  reducer,
  loadState(), // Load state from local storage
);

store.subscribe(() => {
  saveState(store.getState()); // Save state to local storage on every change
});

export default store;
