import React, { useState } from 'react'

const Hook = () => {
  const [num, setNum] = useState('First ')
  function changeNum(){
    console.log(num)
    setNum('After click')
  }
  

  return (
    <div>
    <div className='bg-amber-200 text-center py-9 text-6xl m-9 rounded-4xl text-blue-500'>
      <h1>Text  = {num}</h1>
      <button className='p-3 m-5 mt-6 bg-amber-950 rounded-4xl' onClick={changeNum}>Click</button>
    </div>
    
    
    </div>
  )
}

export default Hook
