// src/components/Prueba1.js
import React, { useState } from 'react';

const Prueba1 = ({ addToCart }) => {
  const [products] = useState([
    {
      nameProduct: "Oklahoma",
      priceProduct: 8.99,
      category: "BURGER",
      details: "Juicy burger with caramelized onions and cheddar cheese.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727749502/oklahoma1_kyqed5.png"
    },
    {
      nameProduct: "American",
      priceProduct: 7.49,
      category: "BURGER",
      details: "Classic American burger with lettuce, tomato, and mayonnaise.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727749543/american1_haeqpf.png"
    },
    {
      nameProduct: "Voyager",
      priceProduct: 9.99,
      category: "BURGER",
      details: "Gourmet burger with avocado, bacon, and special sauce.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727749532/cheeseBuger1_trckvo.png"
    },
    {
      nameProduct: "Cheeseburger",
      priceProduct: 10.49,
      category: "BURGER",
      details: "Delicious burger with double cheese and fresh onion.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727749479/voyager1_wqem9z.png"
    },
    {
      nameProduct: "Cheddar Fries",
      priceProduct: 5.99,
      category: "FRYING",
      details: "Crispy French fries topped with melted cheddar cheese and crispy bacon.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753875/papasChedarPS_xbpzmi.png"
    },
    {
      nameProduct: "Veggie Burger",
      priceProduct: 8.99,
      category: "BURGER",
      details: "Vegetarian burger with chickpeas and avocado sauce.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727723685/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_lthzrk.jpg"
    },
    {
      nameProduct: "Fanta Bottle",
      priceProduct: 1.99,
      category: "DRINK",
      details: "Orange flavored soda in a bottle.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727757754/fantaBotellaPS_exinu7.png"
    },
    {
      nameProduct: "Fanta Can",
      priceProduct: 1.49,
      category: "DRINK",
      details: "Orange flavored soda in a can.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727757753/lataFantaPS_abr5jv.png"
    },
    {
      nameProduct: "Fries",
      priceProduct: 2.99,
      category: "FRYING",
      details: "Crispy golden French fries.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753876/papas1PS_kh6rye.png"
    },
    {
      nameProduct: "Onion Fries",
      priceProduct: 3.49,
      category: "FRYING",
      details: "Crispy fried onion strips.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753876/friesOnionPS_ziqavq.png"
    },
    {
      nameProduct: "Coca Bottle",
      priceProduct: 1.99,
      category: "DRINK",
      details: "Classic bottle cola soda.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727757754/cocaBotellaPS_bhhhao.png"
    },
    {
      nameProduct: "Coca Can",
      priceProduct: 1.49,
      category: "DRINK",
      details: "Classic can cola soda.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727757755/cocaLataPS_zrwjyx.png"
    },
    {
      nameProduct: "Chocolate Cupcake",
      priceProduct: 2.99,
      category: "DESSERT",
      details: "Rich chocolate cupcake with creamy frosting.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753895/postre1PS_cka425.png"
    },
    {
      nameProduct: "Strawberry Cupcake",
      priceProduct: 2.99,
      category: "DESSERT",
      details: "Light and fluffy cupcake with strawberry frosting.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753897/postre3PS_u9fzfd.png"
    },
    {
      nameProduct: "Chocolate Cake Slice",
      priceProduct: 4.99,
      category: "DESSERT",
      details: "A slice of rich chocolate cake with layers of creamy frosting.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753898/postre2PS_bfbigw.png"
    },
    {
      nameProduct: "Strawberry Cake Slice",
      priceProduct: 4.99,
      category: "DESSERT",
      details: "A slice of light and fruity strawberry cake with whipped cream.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753896/postre5PS_nychtd.png"
    },
    {
      nameProduct: "Strawberry Pie",
      priceProduct: 5.49,
      category: "DESSERT",
      details: "Delicious strawberry pie with a flaky crust.",
      img: "https://res.cloudinary.com/dhojn5eon/image/upload/v1727753896/postre4PS_u6i2ja.png"
    }
  ]);

  const handleAddToCart = (product) => {
    const quantity = parseInt(prompt("Enter quantity:")) || 1;
    addToCart(product, quantity);
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.nameProduct} style={{ marginBottom: '20px' }}>
          <h2>{product.nameProduct} - ${product.priceProduct.toFixed(2)}</h2>
          <img src={product.img} alt={product.nameProduct} style={{ width: '100px' }} />
          <p>{product.details}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Prueba1;
