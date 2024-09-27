import React from 'react'
import logo from "../assets/logo.png"


const Header = () => {
  return (
<header className="w-[100%] bg-[#E6BB4D] p-[30px]">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a className="block text-teal-600" href="#">
          <img src={logo} alt="logo" className="w-[120px]" />
        </a>
      </div>

      {/* Navigation centered */}
      <nav aria-label="Global" className="hidden md:flex md:justify-center flex-1">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-[#92251E] text-lg font-semibold transition hover:text-red-500" href="#">Menu</a>
          </li>
          <li>
            <a className="text-[#92251E] text-lg font-semibold transition hover:text-red-500" href="#">Pedidos</a>
          </li>
          <li>
            <a className="text-[#92251E] text-lg font-semibold transition hover:text-red-500" href="#">Reseña</a>
          </li>
          <li>
            <a className="text-[#92251E] text-lg font-semibold transition hover:text-red-500" href="#">dfasdas</a>
          </li>
        </ul>
      </nav>

      {/* Register and Login buttons */}
      <div className="flex items-center gap-4">
        <a className="rounded-md bg-[#92251E] px-5 py-2.5 text-sm font-medium text-white shadow" href="#">
          Login
        </a>
        <a className="rounded-md bg-[#92251E] px-5 py-2.5 text-sm font-medium text-white" href="#">
          Register
        </a>
      </div>
    </div>
  </div>
</header>


)

}

export default Header;
