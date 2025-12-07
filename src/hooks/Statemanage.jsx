import React, { useState } from 'react'

const Statemanage = () => {
const [num, setNum] = useState(0)

function increase(){
setNum (num+1)
}

function decrease(){
setNum (num-1)
}

function jump(){
  setNum (num+5)
}

const [name, setName] = useState ([10,20,30])
  function changeName(){
    setName (name[1])

  }
  return (
    <div>
      <h1 className='text-9xl text-center bg-amber-400 mx-100 rounded-4xl'>{num}</h1>
      <div className='flex justify-center pt-10 bg-green-300 m-9 rounded-4xl'>
      <button className='p-10 m-20 bg-amber-300 rounded-4xl'onClick={increase}>Increase</button>
      <button className='p-10 m-20 bg-amber-300 rounded-4xl' onClick={decrease}>Decrease</button>
      <button className='p-10 m-20 bg-amber-300 rounded-4xl' onClick={jump}>Jump by 5</button>
    </div>

    <div className='bg-sky-300 mt-10 rounded-4xl mx-10'>
      <h1 className='text-8xl text-center mt-5 bg-amber-950 mx-80 rounded-4xl text-white'>{name}</h1>
    <div className='flex justify-center'>
      <button className='bg-yellow-400 rounded-4xl m-10 p-10 text-3xl' onClick={changeName}>Click</button>
    </div>
    
    </div>
    </div>
  )
}

export default Statemanage
