import React from 'react'
import Todo from './todo';
import './style.css';

function App() {
  return (
    <div className="outer-div">
      <h1 className='title'>Rental Studio</h1>
      <div className="center-content">
        <Todo />
      </div>
    </div>
  )
}

export default App