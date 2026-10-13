import React from 'react';
import UserCard from './Usercard';
import './App.css';

const App = () => {
  // Array containing 5 sets of user data
  const users = [
    {
      id: 1,
      name: "MohanRaj",
      city: "Salem",
      age: 32,
      email: "mohan123.com",
      phone: "8888888888"
    },
    {
      id: 2,
      name: "Sathish",
      city: "Chennai",
      age: 35,
      email: "sathish123.com",
      phone: "9999999999"
    },
    {
      id: 3,
      name: "Shalini",
      city: "madurai",
      age: 29,
      email: "shalini123.com",
      phone: "898989898"
    },
    {
      id: 4,
      name: "Vimal",
      city: "Erode",
      age: 27,
      email: "vimal123.com",
      phone: "77777777777"
    },
    {
      id: 5,
      name: "simi",
      city: "tirupur",
      age: 45,
      email: "simi123.com",
      phone: "5555555555"
    }
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">User Data Details</h1>
      
      {/* Container for the responsive card layout */}
      <div className="card-grid">
        {users.map((user) => (
          <UserCard
            key={user.id} 
            name={user.name}
            city={user.city}
            age={user.age}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>
    </div>
  );
};

export default App;