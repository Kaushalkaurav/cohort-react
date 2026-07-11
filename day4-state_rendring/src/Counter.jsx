import React from 'react'

const Counter = () => {
    
    const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1> count is {counter} </h1>
      <button 
      onClick={() => {
        setCounter((prev) => prev + 1 );} }> Increment </button>
    </div>
  )
}

export default Counter
