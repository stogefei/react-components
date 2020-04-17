import React from 'react';
import './styles/index.scss';
// import LikeButton from './components/button'
// import MouseTracker from './components/MouseTracker'
// import MouseOverTracker from './hooks/moseOverTracker'
import Button from './components/Button/button'
function App() {
  // const [show, setShow] = useState(true);
  // const postions = MouseOverTracker()
  return (
    <div className="App">
      <p className='domCss'>
          <Button btnType='primary'>按钮</Button>
          <Button btnType='link' href='http://www.baidu.com'>link</Button>
      </p>
    </div>
  );
}

export default App;
