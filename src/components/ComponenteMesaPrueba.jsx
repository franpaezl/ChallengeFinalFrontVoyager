import React, { useState } from 'react'
import "../styles/componenteMesaPrueba.css"
import { div } from 'framer-motion/client'


const ComponenteMesaPrueba = () => {

    // const tables = [
    //     { id: 1, type: 'rectangular', seats: 4 },
    //     { id: 2, type: 'circular', seats: 6 },
    //     { id: 3, type: 'rectangular', seats: 4 },
    //     { id: 4, type: 'circular', seats: 6 },
    //     { id: 5, type: 'rectangular', seats: 4 },
    //     { id: 6, type: 'circular', seats: 6 },
    //     { id: 7, type: 'rectangular', seats: 4 },
    //     { id: 8, type: 'rectangular', seats: 8 },
    //     { id: 9, type: 'circular', seats: 6 },
    //     { id: 10, type: 'rectangular', seats: 4 },
    //     { id: 11, type: 'circular', seats: 6 },
    //     { id: 12, type: 'rectangular', seats: 4 },
    // ]
    // const [selectedTable, setSelectedTable] = useState(null)

    // const handleTableClick = (tableId) => {
    //     setSelectedTable(selectedTable === tableId ? null : tableId)
    // }

    return (
        // <div className="restaurant-floor-plan">
        //     <h2>Seleccione su mesa</h2>
        //     <div className="floor-plan-grid">
        //         {tables.map((table) => (
        //             <div
        //                 key={table.id}
        //                 className={`table ${table.type} ${selectedTable === table.id ? 'selected' : ''}`}
        //                 onClick={() => handleTableClick(table.id)}
        //             >
        //                 <span className="table-number">{table.id}</span>
        //                 <span className="seat-count">{table.seats}</span>
        //             </div>
        //         ))}
        //     </div>
        //     {selectedTable && (
        //         <div className="selection-info">
        //             Mesa seleccionada: {selectedTable}
        //             <button onClick={() => setSelectedTable(null)}>Cancelar selección</button>
        //         </div>
        //     )}
        // </div>


        <div className='div-container'>
            {/* Divs mesas rectangular */}
            <div className='div-mesa'></div>
            <div className='div-mesa-2'></div>
            <div className='div-mesa-3'></div>
            <div className='div-mesa-4'></div>
            {/* Divs mesas cuadradas */}
            <div className='div-mesa-5'></div>
            {/* Divs mesas redondas */}
            <div className='div-mesa-6'></div>
            <div className='div-mesa-7'></div>
            <div className='div-mesa-8'></div>
            <div className='div-mesa-9'></div>
            <div className='div-mesa-10'></div>
            <div className='div-mesa-11'></div>







        </div>
    )
}

export default ComponenteMesaPrueba