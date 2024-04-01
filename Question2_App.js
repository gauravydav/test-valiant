import React, { useState, useEffect } from 'react'
import './App.css'


const App = () => {
  const [currentColor, setCurrentColor] = useState('red');

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (currentColor) {
        case 'red':
          setCurrentColor('green');
          break;
        case 'green':
          setCurrentColor('yellow');
          break;
        case 'yellow':
          setCurrentColor('red');
          break;
      }
    },2000)
  },[currentColor])
  return (
    <div className="traffic-light-container">
       <div className="traffic-light-box">
      <div className='traffic-light'>
        <div className={`red light ${currentColor === 'red' ? 'active' : ''}`}></div>
        <div className={`yellow light ${currentColor === 'yellow' ? 'active' : ''}`}></div>
        <div className={`green light ${currentColor === 'green' ? 'active' : ''}`}></div>
        </div>
      </div>

    </div>
  )
}

export default App
