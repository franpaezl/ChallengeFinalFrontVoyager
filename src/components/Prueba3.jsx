// src/components/Prueba3.js
import React from 'react';

const Prueba3 = ({ cart }) => {
  return (
    <div>
      <h2>Your Order Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.nameProduct}>
              {item.nameProduct} - ${item.priceProduct.toFixed(2)} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Prueba3;
