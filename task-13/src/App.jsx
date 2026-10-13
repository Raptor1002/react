import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    city: ''
  });

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  // READ: Fetch initial data
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Form Inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Reset Form
  const resetForm = () => {
    setFormData({ name: '', username: '', email: '', phone: '', website: '', city: '' });
    setEditingId(null);
  };

  // CREATE & UPDATE: Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Structure data to match JSONPlaceholder format
    const payload = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      address: { city: formData.city } // Nesting city to match API structure
    };

    try {
      if (editingId) {
        // UPDATE (PUT)
        const response = await fetch(`${API_URL}/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        if (!response.ok) throw new Error('Failed to update user');
        const updatedUser = await response.json();
        
        // Update local UI state
        setUsers(users.map(user => user.id === editingId ? { ...user, ...updatedUser } : user));
      } else {
        // CREATE (POST)
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error('Failed to create user');
        const newUser = await response.json();
        
        // JSONPlaceholder always returns id: 11 for new POSTs. 
        // We generate a random ID for the UI to prevent duplicate key errors.
        const uiUser = { ...newUser, id: Date.now() }; 
        setUsers([uiUser, ...users]);
      }
      resetForm();
    } catch (err) {
      setError(err.message);
    }
  };

  // Trigger Edit Mode
  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
      city: user.address?.city || ''
    });
    setEditingId(user.id);
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete user');
      
      // Update local UI state
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      
      {error && <div className="error-message">Error: {error}</div>}

      {/* Form Section */}
      <div className="form-card">
        <h2>{editingId ? 'Edit User' : 'Add New User'}</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleInputChange} />
          <input type="text" name="username" placeholder="Username" required value={formData.username} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} />
          <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleInputChange} />
          <input type="text" name="website" placeholder="Website (e.g. yoursite.com)" value={formData.website} onChange={handleInputChange} />
          <input type="text" name="city" placeholder="City" required value={formData.city} onChange={handleInputChange} />
          
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {editingId ? 'Update User' : 'Add User'}
            </button>
            {editingId && (
              <button type="button" className="btn-secondary" onClick={resetForm}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="table-container">
        {loading ? (
          <p className="loading">Loading users data...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.address?.city}</td>
                  <td className="action-cells">
                    <button onClick={() => handleEdit(user)} className="btn-edit">Edit</button>
                    <button onClick={() => handleDelete(user.id)} className="btn-delete">Delete</button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="8" className="empty-state">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default App;