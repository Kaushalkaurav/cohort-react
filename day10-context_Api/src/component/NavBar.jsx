import React from 'react'

const Navbar = ({ setIsCartOpen }) => {
  return (
    <div className=" bg-blue-500 text-white flex items-center justify-between p-4 rounded-2xl  ">

     <p> logo </p> 
     <div className="flex gap-4">
       <p  onClick={() => setIsCartOpen(true)} className="cursor-pointer" > cart </p>
       <p onClick={() => setIsCartOpen(false)} className="cursor-pointer"> home </p>
     </div>
    
     <p> Login </p>

    </div>
  )
}

export default Navbar;
