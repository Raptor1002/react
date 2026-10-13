import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

const Cart = () => {
  // Read cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Handle quantity changes
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  // Conditional Rendering: Empty Cart State
  if (cartItems.length === 0) {
    return (
      <div className="page-container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Your Cart is Empty</h2>
        <p style={{ color: '#6B7280', marginBottom: '2rem' }}>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products" className="btn-primary">Start Shopping</Link>
      </div>
    );
  }

  // Rendering the Cart Items
  return (
    <div className="page-container">
      <h2 style={{ marginBottom: '2rem' }}>Shopping Cart</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* List Rendering of Cart Items */}
        {cartItems.map((item) => (
          <div key={item.id} className="card" style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: '2rem',
            padding: '1rem'
          }}>
            <img 
              src={item.image} 
              alt={item.title} 
              style={{ width: '80px', height: '80px', objectFit: 'contain' }} 
            />
            
            <div style={{ flex: 1 }}>
              <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
              <p className="price">${item.price}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="btn-secondary"
                  style={{ padding: '0.2rem 0.6rem' }}
                >
                  -
                </button>
                <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="btn-secondary"
                  style={{ padding: '0.2rem 0.6rem' }}
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={() => dispatch(removeFromCart(item.id))} 
                style={{ 
                  background: '#EF4444', 
                  color: 'white', 
                  border: 'none', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {/* Cart Summary */}
        <div className="card" style={{ 
          marginTop: '2rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          background: '#F3F4F6'
        }}>
          <h3>Total Price:</h3>
          <h2 className="price">${calculateTotal()}</h2>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;