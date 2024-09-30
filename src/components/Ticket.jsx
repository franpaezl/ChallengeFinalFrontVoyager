import React from "react";
import Button from "./Button"; // Asegúrate de importar el botón correctamente

const Ticket = ({ firstName, lastName, dateTime, status, products, total, onClick }) => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg flex flex-col w-[20%]">
      <h3 className="text-lg font-semibold text-black">{`${firstName} ${lastName}`}</h3>
      <p className="text-gray-700">{dateTime}</p>
      <ul className="mt-2">
        {products.map((item, index) => (
          <li key={index} className="text-sm text-black">
            {item.product.name} (x{item.quantity})
          </li>
        ))}
      </ul>
      <p className="mt-2 font-bold text-lg text-black">${total.toFixed(2)}</p>
      
      {/* Aquí agregamos el botón al final del ticket */}
      <Button 
        onClick={onClick} 
        text="View Details" 
        backgroundColor="bg-blue-500 hover:bg-blue-700" 
        borderColor="border-blue-500" 
        arrowColor="text-white"
      />
    </div>
  );
};

export default Ticket;
