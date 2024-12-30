import React from 'react'

function Navbar() {
  return (
    <div>
         <nav className="bg-white shadow-md sticky top-0 ">
    <div className="container mx-auto px-4 flex justify-between items-center py-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-500">
        Aa<span className="text-gray-800">har</span>
      </div>

      {/* Hamburger Menu for Mobile */}
     

      {/* Navbar Links */}
      <div
        className="flex items-center space-x-8 "

      >
        <a
          href="#home"
          className=" py-2 px-3 text-gray-800 hover:text-green-500"
        >
          Home
        </a>
        <a
          href="#menu"
          className=" py-2 px-3 text-gray-800 hover:text-green-500"
        >
          Menu
        </a>
        <a
          href="#about"
          className=" py-2 px-3 text-gray-800 hover:text-green-500"
        >
          About Us
        </a>
        <a
          href="#contact"
          className=" py-2 px-3 text-gray-800 hover:text-green-500"
        >
          Contact
        </a>

        {/* Cart Button */}
        <a
          href="#cart"
          className=" py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Cart (0)
        </a>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar