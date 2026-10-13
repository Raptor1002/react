import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import useFetch from '../../hooks/useFetch';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <div className="loader">Loading details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="btn-secondary">&larr; Back</button>
      <div className="detail-content">
        <img src={product.image} alt={product.title} />
        <div className="info">
          <h2>{product.title}</h2>
          <p className="category">{product.category}</p>
          <p className="desc">{product.description}</p>
          <h3 className="price">${product.price}</h3>
          <button onClick={() => dispatch(addToCart(product))} className="btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;