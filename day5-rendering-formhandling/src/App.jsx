import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState("kaushal")
console.log(user);
let changename = () => { setUser("kaushal kaurv") }
  return (
    <div>
     <h1> user is - {user}</h1>
     <button onClick = {changename}> change name </button>
      <h1> hii </h1>
    </div>
  )
}

export default App
