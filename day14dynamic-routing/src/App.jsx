import React from 'react'
import { Route, Routes } from "react-router"; 
import Navbar from './component/Navbar';
import AppRoutes from "./Routes/AppRoutes";
const App = () => {
  return (
    <div className=' flex-wrap justify-items item-center '>
      <Navbar/> 
      <AppRoutes/>
    </div>
  )
}

export default App

