import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  // Consume the context created with useReducer
  const { state, dispatch } = useAuth();
  
  // Local state for the login form
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (loginData.email && loginData.password.length >= 6) {
      // Dispatch action to our AuthReducer
      dispatch({ 
        type: 'LOGIN', 
        payload: { 
          name: loginData.email.split('@')[0], 
          email: loginData.email 
        } 
      });
      setError('');
    } else {
      setError('Please enter a valid email and a password of at least 6 characters.');
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    setLoginData({ email: '', password: '' });
  };

  // Conditional Rendering: If user is logged in, show profile dashboard
  if (state.isAuthenticated) {
    return (
      <div className="page-container">
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2>Welcome, {state.user.name}!</h2>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <p><strong>Email:</strong> {state.user.email}</p>
            <p><strong>Account Status:</strong> Active</p>
            <p><strong>Member Since:</strong> 2026</p>
          </div>
          <button 
            onClick={handleLogout} 
            className="btn-secondary" 
            style={{ marginTop: '2rem', width: '100%' }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Conditional Rendering: If not logged in, show login form
  return (
    <div className="page-container">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Login to Your Account</h2>
      <form onSubmit={handleLogin} className="form">
        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            value={loginData.email} 
            onChange={(e) => setLoginData({...loginData, email: e.target.value})} 
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={loginData.password} 
            onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
            placeholder="Min. 6 characters"
          />
        </div>
        {error && <span className="error-text">{error}</span>}
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Profile;