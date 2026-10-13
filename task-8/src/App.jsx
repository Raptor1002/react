import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contect';

// Nested Pages
import Services from './pages/Services';
import WebDev from './pages/services/WebDev';
import AppDev from './pages/services/AppDev';
import UiUx from './pages/services/UiUx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          
          {/* Nested Routing Configuration */}
          <Route path="/services" element={<Services />}>
            <Route index element={<WebDev />} /> {/* Default child route */}
            <Route path="web-development" element={<WebDev />} />
            <Route path="app-development" element={<AppDev />} />
            <Route path="ui-ux-design" element={<UiUx />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;