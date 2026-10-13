import React from 'react';
import { useCounter } from './CounterContext';

const CounterControls = () => {
  // Access shared dispatch function using Context
  const { dispatch } = useCounter();

  return (
    <div className="counter-controls">
      <button 
        className="btn btn-decrement" 
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Decrement
      </button>
      
       <button 
        className="btn btn-increment" 
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Increment
      </button>
      
      <button 
        className="btn btn-reset" 
        onClick={() => dispatch({ type: 'RESET' })}
      >
        Reset
      </button>
      
     
    </div>
  );
};

export default CounterControls;