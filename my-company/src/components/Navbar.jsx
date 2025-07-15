// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '10px', 
      backgroundColor: '#eee' 
    }}>
      <div>Logo</div>
      <div>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/services">Services</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;