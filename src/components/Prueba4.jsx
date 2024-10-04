// src/components/Prueba4.js
import React, { useState } from 'react';
import Prueba1 from './Prueba1';
import Prueba2 from './prueba2';
import Prueba3 from './prueba3';


const Prueba4 = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.nameProduct === product.nameProduct);
      if (existingProduct) {
        return prevCart.map(item =>
          item.nameProduct === product.nameProduct
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  return (
    <div className='bg-green-500'>
      <h1>Food Order App</h1>
      <Prueba1 addToCart={addToCart} />
      <Prueba2 cart={cart} />
      <Prueba3 cart={cart} />
    </div>
  );
};

export default Prueba4;
