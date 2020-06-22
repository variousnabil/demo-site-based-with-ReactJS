import React from 'react';
import './style.css';

function App() {
  const handleClick = (e) => {
    alert("Post-mo sucks!!!");
  };
  return (
    <div className="App">
      <p>
        <img src={require('./profile.jpg')} alt="" />
        <h1>[variousnabil]</h1>
        <button onClick={handleClick}>Yell</button>
      </p>
    </div>
  );
}

export default App;
