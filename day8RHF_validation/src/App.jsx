import React, { useState } from 'react';
import Navbar from './component/Navbar';
import UserCard from './component/UserCard';
import CreatuserForm from './component/CreatuserForm';
import MyRouts from './ROUTES/MyRouts';
const App = () => {
   
  return (
    <div>

      <Navbar/>
    
      <MyRouts/>
    </div>
  )
}

export default App
