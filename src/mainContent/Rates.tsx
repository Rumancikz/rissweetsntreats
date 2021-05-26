import React from 'react';
import './rates.css';

// This component returns the going rates for this client's products

export default function Rates() {
  return (
    <div className="rates" id="order">
      <div className="subTitle">
        <h2>Cupcake Base Rate:</h2>
        <h2>$18 / dozen</h2>
      </div>
      <ul>
        <li>
          *Additional charge for decorative topping and/or liners (dependent
          upon design complexity)
        </li>
        <li>*Additional $10 / dozen for Gluten Free Cupcakes</li>
      </ul>
      <div className="subTitle">
        <h2>Cookie Base Rate (chocolate chip, peanut butter, sugar, etc.):</h2>
        <h2>$15 / dozen</h2>
      </div>
      <br />
      <div className="subTitle">
        <h2>Royal Icing Cookie Base Rate:</h2>
        <h2>$55 / 2 dozen</h2>
      </div>
      <ul>
        <li>*Pricing subject to increase based on design intricacy</li>
      </ul>
      <div className="subTitle">
        <h2>Cakes & Cupcake Cakes: </h2>
        <h2>Pricing Varies based on size and design</h2>
      </div>
    </div>
  );
}
