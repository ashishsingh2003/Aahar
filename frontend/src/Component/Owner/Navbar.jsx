import React from 'react'
import { Link } from 'react-router-dom'
import { Ownerrole } from '../../context/Ownerid'

function Navbar() {
    const {ownername}=Ownerrole();
  return (
    <div>
         <nav className="bg-white shadow-md sticky top-0 ">
    <div className="container mx-auto px-4 flex justify-between items-center py-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-500">
        Aa<span className="text-gray-800">har</span>
      </div>

      {/* Hamburger Menu for Mobile */}
     

      {/* Navbar Links */}
      <div
        className="flex items-center space-x-8 "

      >
        <Link
          to="/register"
          className=" py-2 px-3 text-gray-800 hover:text-green-500"
        >
          Register
        </Link>
        <Link
          to="/addmenu"
          className=" py-2 px-3 text-gray-800 hover:text-green-500"
        >
          Add Menu
        </Link>
        <Link
          to="/menu"
          className=" py-2 px-3 text-gray-800 hover:text-green-500"
        >
        Menu
        </Link>
        <a
          href="#contact"
          className=" py-2 px-3 text-gray-800 hover:text-green-500"
        >
          Contact
        </a>

        {/* Cart Button */}
        <a
          href="#cart"
          className=" py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Logout
        </a>
        <p className=" py-2 px-3 text-gray-800 hover:text-green-500">
          Hi,  {ownername}
        </p>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar