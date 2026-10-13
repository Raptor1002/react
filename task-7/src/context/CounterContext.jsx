import React, { createContext, useReducer, useContext } from 'react';

// 1. Create the Context
export const CounterContext = createContext();

// 2. Define Initial State and Reducer
export const initialState = { count: 0 };

export const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// 3. Create the Provider Component
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// 4. Custom Hook for easy consumption (Wrapper for useContext)
export const useCounter = () => {
  return useContext(CounterContext);
};