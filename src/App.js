import React,{useState} from 'react';
import Luck from './luck.component';
import Result from './result.component';

import './App.css';


function App() {
  
  const[display, setDisplay] = useState(false)

  const showLuckDisplay = () => {
    console.log("clicking");
    setDisplay(!display);
  }
  return (
    <div className="App">
      {!display && <Luck showLuckDisplay={showLuckDisplay} />}
      {display && <Result showLuckDisplay={showLuckDisplay} />}
    </div>
  );
}

export default App;
