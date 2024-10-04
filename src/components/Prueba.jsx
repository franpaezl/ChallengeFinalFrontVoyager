import React, { useState } from 'react';
import "../styles/prueba.css";
import OutPlan from '../components/OutPlan';
import FloorPlan from '../components/FloorPlan';
import TopFloor from '../components/TopFloor';


const Prueba = () => {
  // Estado para rastrear el componente seleccionado
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="bg-gray-800 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-8">Component Selector</h1>

      {/* Contenedor con Flexbox para los botones */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          className="p-4 border bg-gray-700 text-white border-amber-300 rounded-md hover:bg-amber-50 hover:text-black transition duration-150 ease-in-out"
          onClick={() => setSelectedComponent('OutPlan')}
        >
          Mostrar OutPlan
        </button>
        <button
          className="p-4 border bg-gray-700 text-white border-amber-300 rounded-md hover:bg-amber-50 hover:text-black transition duration-150 ease-in-out"
          onClick={() => setSelectedComponent('FloorPlan')}
        >
          Mostrar FloorPlan
        </button>
        <button
          className="p-4 border bg-gray-700 text-white border-amber-300 rounded-md hover:bg-amber-50 hover:text-black transition duration-150 ease-in-out"
          onClick={() => setSelectedComponent('TopFloor')}
        >
          Mostrar TopFloor
        </button>
      </div>



   

      {/* Renderizado condicional del componente según el estado */}
      <div className="component-container p-4 rounded-lg shadow-md w-full max-w-3xl">
        {selectedComponent === 'OutPlan' && <OutPlan />}
        {selectedComponent === 'FloorPlan' && <FloorPlan />}
        {selectedComponent === 'TopFloor' && <TopFloor />}
      </div>
    </div>
  );
};

export default Prueba;
