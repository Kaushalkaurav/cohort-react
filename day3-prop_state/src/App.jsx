import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
const App = () => {
   let [count, setCount] = useState(0);

  return (
    <div>
      <h1>count is { count } </h1>
      <button onClick={  () => {
          setCount(count + 1);
      }}> increment </button>
     
    </div>
  )
}

export default App


