import React from 'react';
import './Navbar.css';

// This component returns the Navigation Bar

export default function Navbar() {
  return (
    <div className="nav">
      <a href="#t">About</a>
      <a href="#order">Order</a>
      <a href="#contact">Contact</a>
      <a href="#gallery">Gallery</a>
    </div>
  );
}
