import React from 'react';
import "../styles/foodCards.css";
import Button from './Button';

const FoodCards = (props) => {
  // Function to format price as USD
  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
  };

  return (
    <div className='card-container '>
      <div 
        className='card'
        style={{ 
          backgroundImage: `url(${props.backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: props.backgroundPosition || 'center' 
        }}
      >
        <div className='card-front flex flex-col items-center justify-center rounded-lg border border-white'>
          <div className='h-full w-full flex flex-col items-center justify-center bg-[#00000034] rounded-[50px] p-4 '>
            <h3 id='textShadow' className='text-[40px] text-white font-extrabold mb-2 border-b'>{props.name}</h3>
            {/* Removed description and price from the front */}
          </div>
        </div>
        <div className='card-back flex flex-col items-center gap-[10px] justify-center bg-white rounded-[50px] p-4'>
          <img src={props.typeIcon} alt="Category Icon" className='w-[50px] text-[#0F1D15]' />
          <h3 className='text-[30px] text-[#0F1D15] font-bold'>{props.name}</h3>
          <p className='text-lg text text-center text-[#0F1D15]'>{props.description}</p> {/* Moved description here */}
          <p className='text-red-500 text-xl font-bold'>{formatPrice(props.price)}</p> {/* Moved price here */}
          <Button 
            text="Add to Cart" // Changed button text to "Add to Cart"
            backgroundColor="bg-[#E6BB4D]" // Background color for the button
            borderColor="border-[#0F1D15]" // Border color for the button
            arrowColor="text-[#0F1D15]" // Color for the arrow
            onClick={() => console.log(`${props.name} added to cart`)} // Example onClick function
          />
        </div>
      </div>
    </div>
    
  );
}

export default FoodCards;
