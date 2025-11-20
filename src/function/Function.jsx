import React from 'react'

const Function = () => {

  function btn2(){
    console.log('Dubble click button click ');
  }
  return (
    <div>
      <div className='text-center'>
      <h1 className='text-7xl bg-sky-300 m-5 p-5 rounded-4xl'>Hello World, This is Function</h1>
    
      <button className='bg-amber-300 p-6 rounded-3xl m-5' onClick={function(){
        console.log('Inside the button')
      }}>Click here</button> <br/>
      <button className='p-5 bg-sky-300 m-5 rounded-3xl' onDoubleClick={btn2}> Dubble Click Button</button>
    </div>
    <div className='text-center'>
      <input className='p-3 bg-amber-100 rounded-2xl text-center' onChange={
        function (value){
          console.log(value.target.value)
        }
      } type='text' placeholder='Enter name'/>
    </div>

    <div className='bg-green-100 h-200 w-200 m-10 mx-auto rounded-4xl' onMouseMove ={function(){
        console.log("Mouse moved")
    }}>
        Hello
    </div>
    </div>
  )
}
export default Function
