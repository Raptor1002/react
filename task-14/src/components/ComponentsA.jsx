import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../redux/features/userSlice';

const ComponentA = () => {
  const dispatch = useDispatch();
  
  const [formData, setLocalFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the local state to the Redux Store
    dispatch(setFormData(formData));
    
    // Optional: Clear local form after submission
    setLocalFormData({ name: '', email: '', phone: '', city: '', role: '' });
  };

  return (
    <div className="card form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="" disabled>Select a role</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Analyst">Analyst</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit to Redux</button>
      </form>
    </div>
  );
};

export default ComponentA;