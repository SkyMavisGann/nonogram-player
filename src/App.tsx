import './App.css'; // We will use this file for our layout styles later
import NonogramBoard from './components/NonogramBoard';
import { useState } from "react";
import { UsePinchZoom } from './usePinchZoom';


function App() {
  

  const [cellSize, setCellSize] = useState(35);


  const { startPinch, movePinch } = UsePinchZoom(cellSize, setCellSize);
  // Everything inside the return() is what gets drawn to the screen
  return (
    <main className='app-container'>

      <div className='scrollableWindow'
        onTouchStart={startPinch}
        onTouchMove={movePinch}>

          <NonogramBoard cellSize={cellSize}/>
      </div>
     
    </main>
  );
}

export default App;