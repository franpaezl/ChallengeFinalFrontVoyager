import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import logo from "../assets/logo.png";
import CustomerButton from './CustomerButton';

const Header = () => {
  return (
    <header className="z-10 absolute w-full p-[30px] mt-[2px] ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-[#0F1D15] border-[#E6BB4D] border-2 rounded-lg">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link className="block text-teal-600" to="/">
              <img src={logo} alt="logo" className="w-[120px]" />
            </Link>
          </div>

          {/* Navegación centrada */}
          <nav aria-label="Global" className="hidden md:flex md:justify-center flex-1">
            <ul className="flex items-center gap-6 text-lg">
              <li className="transition transform hover:scale-125">
                <Link to="/menu" className="text-[#E6BB4D] text-lg font-semibold transition hover:text-[#FFD700]">Menu</Link>
              </li>
              <li className="transition transform hover:scale-125">
                <Link className="text-[#E6BB4D] text-lg font-semibold transition hover:text-[#FFD700]" to="/deliveryadmin">Pedidos</Link>
              </li>
              <li className="transition transform hover:scale-125">
                <Link className="text-[#E6BB4D] text-lg font-semibold transition hover:text-[#FFD700]" to="/reseña">Reseña</Link>
              </li>
              <li className="transition transform hover:scale-125">
                <Link className="text-[#E6BB4D] text-lg font-semibold transition hover:text-[#FFD700]" to="/dfasdas">dfasdas</Link>
              </li>
            </ul>
          </nav>

          {/* Botones de Login y Register */}
          <div className="flex items-center gap-4">
            <Link to="/login" >
          <CustomerButton 
              text="Login" 
              onClick={() => console.log('Login clicked!')}
              textColor="text-[#0F1D15]" // Cambia al color deseado
              bgColor="bg-[#E6BB4D]" // Cambia al color de fondo deseado
              hoverBgColor="bg-[#FFD700]" // Cambia al color de fondo en hover deseado
            />
            </Link>
            <Link to="/register">
            <CustomerButton
              text="Register" 
              onClick={() => console.log('Register clicked!')}
              textColor="text-[#0F1D15]" // Cambia al color deseado
              bgColor="bg-[#E6BB4D]" // Cambia al color de fondo deseado
              hoverBgColor="bg-[#FFD700]" // Cambia al color de fondo en hover deseado
            />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
