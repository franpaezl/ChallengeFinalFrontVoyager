import React from 'react'
import ReservationComponent from '../components/ReservationComponent'
import { Calendar, Clock, Users, MapPin, Utensils, Sun, Moon } from 'lucide-react';

function Reservation() {
  return (
    <div>
        sdf
        <ReservationComponent/>
        <div className=''>
              <label className="block text-sm text-[20px]  text-center font-medium text-gray-700 mb-2">Seating Area</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button className="p-4 border bg-gray-700 text-white border-amber-300 rounded-md hover:bg-amber-50 hover:text-black focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-150 ease-in-out flex flex-col items-center">
                  <MapPin className="text-[#dd9000] mb-2" />
                  <span className=''>Ground Floor</span>
                </button>
                <button className="p-4 border bg-gray-700 text-white border-amber-300 rounded-md hover:bg-amber-50 hover:text-black focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-150 ease-in-out flex flex-col items-center">
                  <Utensils className="text-[#dd9000] mb-2" />
                  <span>First Floor</span>
                </button>
                <button className="p-4 border bg-gray-700 text-white border-amber-300 rounded-md hover:bg-amber-50 hover:text-black focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-150 ease-in-out flex flex-col items-center">
                  <Sun className="text-[#dd9000] mb-2" />
                  <span>Outdoor</span>
                </button>
              </div>
            </div>
    </div>
  )
}

export default Reservation