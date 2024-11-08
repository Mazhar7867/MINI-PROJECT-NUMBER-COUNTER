import React, { useState } from 'react'

function App() {

  const [num, setNum] = useState(0)
  return (
    <div className="h-screen w-screen  flex flex-col justify-center items-center">
      <div className="p-7 bg-yellow-400">
        <h1 className='text-2xl flex justify-center items-center'>Mini-Project-Counter-No</h1>
      <h3 className='font-bold bg-yellow-50 p-3 flex justify-center items-center m-3 rounded-md'> {num}</h3>
  
      <button onClick={ ()=>setNum(num+1)}
       className="bg-green-700 text-white p-4 font-bold m-4 rounded-md">
        Increment</button>
      <button
      onClick={ ()=>setNum(num-1)}
      className="bg-red-600 text-white p-4 font-bold m-4 rounded-md">Decrement</button>
    </div>
      </div>
  )
}

export default App