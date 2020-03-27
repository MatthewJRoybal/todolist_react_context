import React, { createContext, useReducer } from 'react';
import todosReducer from './reducers/reducer';

const defaultTodos = [
  "Eggs", "Milk", "Toilet Paper"
];

export const TodosContext from createContext();

export function TodosProvider(props) {
  const [todos] = useReducer(todosReducer, defaultTodos);

  return (
    <TodosContext.Provider value={todos}>
      {props.children}
    </TodosContext.Provider>
  );
}
