import { Outlet } from 'react-router-dom';

const ProductsLayout = () => {
  return (
    <div className="products-layout">
      <h2>Our Collection</h2>
      {/* Outlet renders the matched child route (ProductList or ProductDetail) */}
      <Outlet /> 
    </div>
  );
};

export default ProductsLayout;