// src/components/Prueba2.js
import React, { useState } from 'react';

const Prueba2 = ({ cart }) => {
  const [deliveryMethod, setDeliveryMethod] = useState('takeaway');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [addresses, setAddresses] = useState([
    "123 Main St",
    "456 Oak Ave",
    "789 Pine Rd"
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Order confirmed!\nDelivery Method: ${deliveryMethod}\nAddress: ${deliveryMethod === 'delivery' ? selectedAddress : 'N/A'}`);
  };

  return (
    <div>
      <h2>Confirm Your Order</h2>
      <ul>
        {cart.map(item => (
          <li key={item.nameProduct}>
            {item.nameProduct} - ${item.priceProduct.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="takeaway"
              checked={deliveryMethod === 'takeaway'}
              onChange={() => {
                setDeliveryMethod('takeaway');
                setSelectedAddress(''); // Reset address selection for takeaway
              }}
            />
            Take Away
          </label>
          <label>
            <input
              type="radio"
              value="delivery"
              checked={deliveryMethod === 'delivery'}
              onChange={() => {
                setDeliveryMethod('delivery');
                setSelectedAddress(addresses[0]); // Set default address for delivery
              }}
            />
            Delivery
          </label>
        </div>
        {deliveryMethod === 'delivery' && (
          <div>
            <label htmlFor="address">Select Address:</label>
            <select id="address" value={selectedAddress} onChange={(e) => setSelectedAddress(e.target.value)}>
              {addresses.map((address, index) => (
                <option key={index} value={address}>{address}</option>
              ))}
            </select>
          </div>
        )}
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default Prueba2;
