import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import Props from './components/props';

const App = () => {
  return (
    <div>
      <Navbar />
      {Card()}
      <div className="card1">
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, earum.</p>
      </div>
      <div className='parent'>
        <Props user ='Swarup' age={23} img='https://images.unsplash.com/photo-1762710940358-e3351cc9ff34?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Props user ='ShuvoSJ' age={26} img='https://images.unsplash.com/photo-1600687142661-0109414dc11c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Props user='Something' age={4} img='https://media.istockphoto.com/id/2196087139/photo/dog-gives-paw-to-a-woman-making-high-five-gesture.jpg?s=1024x1024&w=is&k=20&c=RRDO-noTcVRUi8VCzFrc2KDpIVBY2RzucOO6saTZmlE='/>
      </div>

      
    </div>
  )
}

export default App;
