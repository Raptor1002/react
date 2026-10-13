import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const { state } = useAuth();
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">ShopHunt</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-actions">
        <Link to="/cart" className="cart-btn">Cart ({cartCount})</Link>
        {state.isAuthenticated ? (
          <Link to="/profile" className="profile-btn">Profile</Link>
        ) : (
          <Link to="/profile" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;