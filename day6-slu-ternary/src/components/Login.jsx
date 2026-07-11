import React from 'react'

const login = ( {setToggle}) => {
  return(
  <div className="bg-white p-8 rounded shadow w-90 p-6 rounded-xl flex flex-col gap-4">
    <h1 className="text-2xl font-bold text-center"> Login </h1>
  <form className="flex flex-col gap-4"> 
    <input className="p-2 border border-gray-300 rounded" type="text"  placeholder="Username" />
    <input className="p-2 border border-gray-300 rounded" type="password" placeholder="Password" />
     <button type="submit" className="bg-blue-600 text-white p-2 rounded">Login</button>
  </form>
  <p>Don't have an account? <a onClick ={ ()=> setToggle((prev) => !prev) } href="/register" className="text-blue-500 hover:underline cursor-pointer">Register here</a></p>
  </div>  
  );
}

export default login;
