import { useSearchParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../../components/ProductCard';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  if (loading) return <div className="loader">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;

  const filteredProducts = categoryFilter 
    ? products.filter(p => p.category === categoryFilter)
    : products;

  return (
    <div>
      <div  style={{ display: 'flex', gap: '12px', color:'blue' }} className="filters">
        <button onClick={() => setSearchParams({})}>All</button>
        <button onClick={() => setSearchParams({ category: 'electronics' })}>Electronics</button>
        <button onClick={() => setSearchParams({ category: 'jewelery' })}>Jewelry</button>
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;