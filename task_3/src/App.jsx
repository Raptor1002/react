import React, { useState } from 'react';
import './App.css';

// --- 1. MOCK DATA FOR LIST RENDERING ---
// Array containing 5 objects, each with 6 key-value pairs
const employeeData = [
  { id: 1, name: 'MOHAN', email: 'mohan123.com', age: 28, city: 'Salem', role: 'Frontend Developer' },
  { id: 2, name: 'RAVI', email: 'ravi123@company.com', age: 34, city: 'Chennai', role: 'UX Designer' },
  { id: 3, name: 'Chandran', email: 'chandran123@company.com', age: 22, city: 'trichy', role: 'Software Intern' },
  { id: 4, name: 'Dhanapal', email: 'dhanapal123@company.com', age: 30, city: 'Salem', role: 'Product Manager' },
  { id: 5, name: 'Elavarasan', email: 'elavarasan123@company.com', age: 45, city: 'madurai', role: 'Director of IT' }
];

// --- 2. LOGIN COMPONENT ---
const Login = ({ onLogin }) => {
  return (
    <div className="auth-container">
      <h2>Welcome to the Employee Portal</h2>
      <p>Please log in hgg to view the directory.</p>
      <button className="btn btn-primary" onClick={onLogin}>
        Log In
      </button>
    </div>
  );
};

// --- 3. HOME / WELCOME COMPONENT (Includes List Rendering) ---
const Home = ({ onLogout }) => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h2>Employee Data</h2>
        <button className="btn btn-secondary" onClick={onLogout}>
          Log Out
        </button>
      </header>

      {/* List Rendering using map() */}
      <div className="card-grid">
        {employeeData.map((employee) => (
          // Using a unique key (employee.id) for each rendered item
          <div className="card" key={employee.id}>
            <div className="card-header">
              <h3>{employee.name}</h3>
              <span className="badge">{employee.role}</span>
            </div>
            <div className="card-body">
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Age:</strong> {employee.age}</p>
              <p><strong>City:</strong> {employee.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 4. MAIN APP COMPONENT (Conditional Rendering) ---
const App = () => {
  // Boolean state to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle handlers
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="app-wrapper">
      {/* Conditional Rendering using a Ternary Operator */}
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;