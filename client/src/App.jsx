import { useState, useEffect } from 'react'

import './App.css'
import { use } from 'react'

function App() {
  const [message, setMessage] = useState("")

  useEffect(()=>{
     fetch("http://localhost:4000/api/message")
      .then(res=>res.json())
      .then(data=> setMessage(data.message))
  } , [])

  return (
    <>
       
       <h1>Welcome to chai code frontend </h1>

      <h2> data {message}</h2>

    </>
  )
}

export default App
