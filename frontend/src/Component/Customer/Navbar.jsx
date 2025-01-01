import React from 'react'
import { Link } from 'react-router-dom'
import { Ownerrole } from '../../context/Ownerid'
import { Customerrole } from '../../context/Customerid'

function Navbar() {
 const {customername}=Customerrole();
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
        <Link
          to=""
          className=" py-2 px-3 text-gray-800 hover:text-green-500"
        >
          Orders
        </Link>
        <Link
          to=""
          className=" py-2 px-3 text-gray-800 hover:text-green-500"
        >
          Favorites
        </Link>
     

        {/* Cart Button */}
        <a
          href="#cart"
          className=" py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Logout
        </a>
        <p className=" py-2 px-3 text-gray-800 hover:text-green-500">
          Hi, {customername}
        </p>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar