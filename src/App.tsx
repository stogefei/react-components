import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/button'
import MouseTracker from './components/MouseTracker'
import MouseOverTracker from './hooks/moseOverTracker'
function App() {
  const [show, setShow] = useState(true);
  const postions = MouseOverTracker()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>x:{postions.x}  y:{postions.y} </h2>
        <button onClick={() => {setShow(!show)}}> toggle show</button>
        <LikeButton></LikeButton>
       {show && <MouseTracker/>}
      </header>
    </div>
  );
}

export default App;
