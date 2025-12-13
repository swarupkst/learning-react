import React, { useState } from 'react'

const Api = () => {

  const [information, setInformation] = useState([])

  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    setInformation(data)
  }

  return (
    <div>
      <h1 className='text-6xl text-center bg-blue-300 mx-10 my-2 rounded-3xl pb-2'>
        API call in React
      </h1>

      <div className='flex flex-col items-center'>
        <button
          onClick={getData}
          className='px-5 py-2 bg-amber-900 hover:bg-red-600 rounded-2xl text-white'>
          Get Data
        </button>
        <div>
            {information.map (function (elem,idx){
                return <h3>{idx} , {elem.title}</h3>
            })}
        </div>
      </div>
    </div>
  )
}

export default Api
