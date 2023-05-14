import { React, useState } from "react";
import './style.css'

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }

  function decreaseCount() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <nav className="navbar">
        <h1 className="header">React Counter</h1>
      </nav>
      <div className="container" >
        <div className="box">
          <span className="count"> {count} </span>
          <div className="btn">
            <button onClick={increaseCount} className="increase">+</button>
            <button onClick={decreaseCount} className="decrease">-</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
