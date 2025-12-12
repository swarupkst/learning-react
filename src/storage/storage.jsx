import React from 'react'

const storage = () => {

    // const user=localStorage.setItem('age')
    // console.log(user)
    // const age= localStorage.getItem('user')
    // console.log(user);
    localStorage.removeItem('age')

    let userdata = {
        name:'Swarup',
        age:'23',
        city: 'Dhaka'
    }

    localStorage.setItem('userdata', JSON.stringify(userdata))

    let data = JSON.parse( localStorage.getItem('userdata'))
    console.log(data)
  return (
    <div>
      Local sotrage
    </div>
  )
}

export default storage
