import './App.css'; // We will use this file for our layout styles later
import NonogramBoard from './components/NonogramBoard';
import { useState } from "react";



function App() {
    const [cellSize, setCellSize] = useState(35);

    const zoomIn = () => {
        setCellSize(cellSize + 5);
    }
    const zoomOut = () => {
        setCellSize(cellSize - 5);
    }
  // Everything inside the return() is what gets drawn to the screen
  return (
    <main className='app-container'>

      <div style={{ marginBottom: '10px', gap: '10px', display: 'flex' }}>
                <button onClick={zoomIn}>Zoom In+ </button>
                <button onClick={zoomOut}>Zoom out- </button>
      </div>
      <NonogramBoard cellSize={cellSize}/>
    </main>
  );
}

export default App;