import React from 'react'
import Login from './components/Login'
import Regester from './components/Regester'
const App = () => {
   const [toggle, setToggle] = React.useState(false)
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
     { toggle ? <Login setToggle={setToggle} /> : <Regester setToggle={setToggle} /> }
     
    </div>
  )
}

export default App
