import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  // Define initial state to make resetting easy
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    city: '',
    address: '',
    password: ''
  };

  // State Management
  const [formData, setFormData] = useState(initialFormState);
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle all input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Basic Validation: Ensure no fields are empty
    const hasEmptyFields = Object.values(formData).some((val) => val.trim() === '');
    
    if (hasEmptyFields) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    // Clear errors and save submitted data
    setErrorMessage('');
    setSubmittedData(formData);
  };

  // Handle Form Reset
  const handleReset = () => {
    setFormData(initialFormState);
    setSubmittedData(null);
    setErrorMessage('');
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>User Registration</h2>
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="123-456-7890" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="25" min="1" />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="New York" />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="123 Main St..." rows="3"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" />
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-submit">Submit</button>
            <button type="button" className="btn btn-reset" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>

      {/* Dynamic Data Display via Conditional Rendering */}
      {submittedData && (
        <div className="submitted-card">
          <h3>Submitted Information</h3>
          <div className="submitted-grid">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
            <p><strong>Gender:</strong> {submittedData.gender}</p>
            <p><strong>City:</strong> {submittedData.city}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>Password:</strong> <em>[Hidden for security]</em></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;