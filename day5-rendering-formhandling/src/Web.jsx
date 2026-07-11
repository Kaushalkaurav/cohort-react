import React from 'react'
import { useState } from "react";
import Contect from './Contect.jsx'
import About from './About.jsx'
import Card from './Card.jsx'
const web = () => {
  const [formData, setFormData] = useState({
    name: "",email: "", password: ""
  });
  const handleSubmit = (e) => {
    setFormData({...formData, name: e.target.value});
  };
  console.log( "Form Data:", formData);

  return (
    <div className= "flex flex-col gap-5 w-60">
     <input 
        onChange={handleSubmit} 
     type="text" 
     className= "border-2"
     placeholder='enter your name' />
     <input
      onChange= {handleSubmit}
      className= "border-2"
      type="email" placeholder='enter your email' />
     <input
      onChange={handleSubmit}
      className= "border-2"
      type="password" placeholder='enter your password' />
    </div>
  )
}

export default web;
