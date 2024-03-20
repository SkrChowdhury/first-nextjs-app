"use client"
import React, { useState } from 'react'

function Counter() {
  const [counter,setCounter] = useState(0)
  return (
    <div>
      <h2 className='m-4'>Counter: {counter}</h2>

      <button className='btn btn-primary m-4' onClick={()=>setCounter(counter + 1)}>Increase</button>
      <button className='btn btn-primary m-4' onClick={()=>setCounter(counter - 1)}>Decrese</button>
      
    </div>
  )
}

export default Counter
