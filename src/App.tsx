import React, {useState} from 'react';
import './styles/index.scss';
import LikeButton from './components/button'
import MouseTracker from './components/MouseTracker'
import MouseOverTracker from './hooks/moseOverTracker'
function App() {
  const [show, setShow] = useState(true);
  const postions = MouseOverTracker()
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h2>x:{postions.x}  y:{postions.y} </h2>
        <button onClick={() => {setShow(!show)}}> toggle show</button>
        <LikeButton></LikeButton>
       {show && <MouseTracker/>}
      </header>
    </div>
  );
}

export default App;
