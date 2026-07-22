import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='  p-4 flex justify-between items-center bg-white-400'>
      <div> logo </div>
      <div className=' flex gap-6 item-center cursor-pointer' > 
        <NavLink to ={"/"} > Home  </NavLink>
        <NavLink to ={"/product"} > Product  </NavLink>
        <NavLink to ={"/cart"} > Cart  </NavLink>
      </div>
      <div> 
        <button className=''> log in </button>
      </div>
    </div>
  )
}

export default Navbar;
