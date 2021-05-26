import React from 'react';
import './cakeIcingOptions.css';

//This components returns the flavor options for the cakes and their icings

export default function CakeIcingOptions() {
  return (
    <div className="options">
      <div className="cake">
        <h2>Cake Options:</h2>
        <ul>
          <li>Vanilla</li>
          <li>Chocolate</li>
          <li>Spice</li>
          <li>Pumpkin</li>
          <li>Red velvet</li>
          <li>Carrot</li>
          <li>Salted caramel</li>
          <li>Strawberry</li>
          <li>Lemon</li>
          <li>Almond</li>
          <li>Banana</li>
          <li>Cinnamon swirl</li>
          <li>Brown butter</li>
          <li>Peach</li>
        </ul>
      </div>
      <div className="icing">
        <h2>Icing Options:</h2>
        <ul>
          <li>Vanilla</li>
          <li>Chocolate</li>
          <li>Peanut Butter</li>
          <li>Oreo</li>
          <li>Almond</li>
          <li>Vanilla</li>
          <li>Cream cheese</li>
          <li>Strawberry</li>
          <li>Honey cinnamon</li>
          <li>Salted caramel</li>
          <li>Lemon</li>
        </ul>
        <br />
        <p>*Fillings offered at an additional charge</p>
      </div>
    </div>
  );
}
