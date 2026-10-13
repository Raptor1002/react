import React from 'react';
import { useCounter } from './CounterContext';

export const CounterDisplay = () => {
  // Access shared state using Context
  const { state } = useCounter();

  return (
    <div className="counter-display">
      <h2>Current Count</h2>
      <h1 className="count-value">{state.count}</h1>
    </div>
  );
};

export default CounterDisplay;