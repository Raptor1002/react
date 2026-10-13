import React from 'react';
import './App.css'; 

const UserCard = ({ name, city, age, email, phone }) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{name}</h2>
      <div className="user-details">
        <p><strong>City:</strong> {city}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
    </div>
  );
};

export default UserCard;