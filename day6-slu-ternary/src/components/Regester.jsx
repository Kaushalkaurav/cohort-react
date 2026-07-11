import React, { useState } from 'react'

const Regester = ( { setToggle }) => {
    
 const[formData, setFormData] = useState({});
 const handleChange = (e) => {
    let {name, value }= e.target;
    setFormData({...formData, [name]: value})
 };
 const handleSubmit = (e) =>{
    e.preventDefault();
    console.log (formData);
 };
  return (
        <div className="bg-white p-8 rounded shadow w-90 p-6 rounded-xl flex flex-col gap-4">
    <h1 className="text-2xl font-bold text-center"> Regester </h1>
  <form  onSubmit={handleSubmit} className="flex flex-col gap-4"> 
    <input  name = "name" onChange={handleChange} className="p-2 border border-gray-300 rounded" type="text"  placeholder="Name" />
    <input name = "email" onChange={handleChange} className="p-2 border border-gray-300 rounded" type="email"  placeholder="Email" />
    <input name = "password" onChange={handleChange} className="p-2 border border-gray-300 rounded" type="password" placeholder="Password" />
     <button type="submit" className="bg-blue-600 text-white p-2 rounded">Register</button>
  </form>
  <p>already have an account? <a  onClick={() => setToggle((prev) => !prev)} className="text-blue-500 hover:underline cursor-pointer">Login here</a></p>
  </div>  

  )
}

export default Regester;
