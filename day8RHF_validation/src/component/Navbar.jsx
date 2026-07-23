import React from 'react'
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

    {/* Logo */}
    <div className="flex-1">
      <h1 className="text-2xl font-bold text-blue-600">LOGO</h1>
    </div>

    {/* Center Menu */}
    <ul className="flex-1 flex justify-center gap-10 font-medium text-gray-700">
      
        <NavLink to ={"/UserCard"} > home   </NavLink>
      
      <li>
        <a href="#" className="hover:text-blue-600">About</a>
      </li>
      <li>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </li>
    </ul>

    {/* Right Buttons */}
    <div className="flex-1 flex justify-end gap-3">
     
     <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" >

        <NavLink to ={"/CreatuserForm"} > Create user   </NavLink>

     </button>
    </div>

  </div>
</nav>
    </div>
  )
}

export default Navbar;
