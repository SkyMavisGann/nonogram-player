import "./App.css"; // We will use this file for our layout styles later
import NonogramBoard from "./components/NonogramBoard";
import { useRef, useState } from "react";
import { usePinchZoom } from "./usePinchZoom";

function App() {
  const [cellSize, setCellSize] = useState(35);
  const scrollWindowRef = useRef<HTMLDivElement | null>(null);

  const {
    startPinch,
    movePinch,
    endPinch,
    startMouseDrag,
    moveMouseDrag,
    moveWheel,
  } = usePinchZoom(cellSize, setCellSize, scrollWindowRef);
  // Everything inside the return() is what gets drawn to the screen
  return (
    <main className="app-container">
      <div
        className="scrollable-window"
        ref={scrollWindowRef}
        onTouchStart={startPinch}
        onTouchMove={movePinch}
        onTouchEnd={endPinch}
        onMouseDown={startMouseDrag}
        onMouseMove={moveMouseDrag}
        onWheel={moveWheel}
        onMouseUp={endPinch}
      >
        <NonogramBoard cellSize={cellSize} />
      </div>
    </main>
  );
}

export default App;
