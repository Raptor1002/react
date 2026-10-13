const About = () => {
  return (
    <div className="page-container">
      <div className="about-hero" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>About ShopHub</h1>
        <p style={{ fontSize: '1.2rem', color: '#4B5563', maxWidth: '600px', margin: '0 auto' }}>
          Your one-stop destination for premium electronics, stylish jewelry, and modern apparel.
        </p>
      </div>

      <div className="about-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        <div className="card">
          <h3>Our Mission</h3>
          <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
            We started ShopHub with a simple goal: to provide high-quality products at accessible prices. 
            We believe that a great shopping experience shouldn't be a luxury. We carefully curate our 
            inventory through trusted APIs to bring you the best deals on the internet.
          </p>
        </div>

        <div className="card">
          <h3>Why Choose Us?</h3>
          <ul style={{ marginTop: '1rem', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
            <li><strong>Fast API Integration:</strong> Real-time product updates.</li>
            <li><strong>Secure State Management:</strong> Your cart is safely handled by Redux.</li>
            <li><strong>Seamless Navigation:</strong> Lightning-fast routing with React Router.</li>
            <li><strong>Responsive Design:</strong> Shop effortlessly on mobile, tablet, or desktop.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;