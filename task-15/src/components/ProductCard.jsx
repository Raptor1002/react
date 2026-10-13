import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.substring(0, 20)}...</h3>
      <p className="price">${product.price}</p>
      <div className="card-actions">
        <Link to={`/products/${product.id}`} className="btn-secondary">View Details</Link>
        <button onClick={() => dispatch(addToCart(product))} className="btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;