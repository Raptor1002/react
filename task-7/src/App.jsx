import React from 'react';
import { CounterProvider } from './context/CounterContext';
import CounterDisplay from './context/CounterDisplay';
import CounterControls from './context/CounterControls';
import './App.css';

const App = () => {
  return (
    <CounterProvider>
      <div className="app-container">
        <div className="counter-card">
          <header>
            <h1>React State Management</h1>
            <p>Powered by useContext & useReducer</p>
          </header>
          
          <CounterDisplay />
          <CounterControls />
        </div>
      </div>
    </CounterProvider>
  );
};

export default App;