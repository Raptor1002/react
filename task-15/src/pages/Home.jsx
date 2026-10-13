import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to ShopHunt</h1>
        <p>Discover the best products at unbeatable prices. Quality and customer satisfaction are our top priorities.</p>
        <br />
        <Link to="/products" className="btn-primary">Shop Now</Link>
      </div>
    </div>
  );
};

export default Home;