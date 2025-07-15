// src/components/Navbar.jsx
import React from 'react';

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
        <a href="/">Home</a> | 
        <a href="/about">About</a> | 
        <a href="/services">Services</a> | 
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;