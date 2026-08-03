import './App.css'; // We will use this file for our layout styles later
import NonogramBoard from './components/NonogramBoard';
import { useRef, useState } from "react";
import { UsePinchZoom } from './usePinchZoom';


function App() {
  

  const [cellSize, setCellSize] = useState(35);
  const scrollWindowRef = useRef<HTMLDivElement | null>(null);

  const { startPinch, movePinch } = UsePinchZoom(cellSize, setCellSize, scrollWindowRef);
  // Everything inside the return() is what gets drawn to the screen
  return (
    <main className='app-container'>

      <div className='scrollable-window'
        onTouchStart={startPinch}
        onTouchMove={movePinch}>

          <NonogramBoard cellSize={cellSize}/>
      </div>
     
    </main>
  );
}

export default App;