
// App.jsx
import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  // 1. Boolean State for Theme Toggle
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // 2. Numerical State for Counter
  const [count, setCount] = useState(0);

  // Event Handlers for the Counter
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // Event Handler for Theme Toggle
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    // Conditional rendering of CSS classes for dynamic styling
    <div className={`app-container ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      
      {/* Theme Toggle Button */}
      <div className="theme-toggle-container">
        <button className="theme-btn" onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : ' Dark Mode'}
        </button>
      </div>

      {/* Counter UI */}
      <div className="counter-card">
        <h1>React Counter</h1>
        
        {/* Dynamic Data Binding */}
        <div className="count-display">
          {count}
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <button className="btn btn-decrement" onClick={handleDecrement}>
            Decrement
          </button>
          
          <button className="btn btn-increment" onClick={handleIncrement}>
            Increment
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;