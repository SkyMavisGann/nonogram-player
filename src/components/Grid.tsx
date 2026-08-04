import { useState } from "react";

interface GridProps {
  rows: number;
  cols: number;
  size: number;
}

export default function Grid({ rows, cols, size }: GridProps) {
  const [gridData, setGridData] = useState(Array(rows * cols).fill(false));

  //flips i's element boolean
  const toggleCell = (i: number) => {
    const newGridData = [...gridData];
    newGridData[i] = !newGridData[i];

    setGridData(newGridData);
  };

  return (
    <div
      className="nonogram-grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gridTemplateRows: `repeat(${rows}, ${size}px)`,
      }}
    >
      {gridData.map((isFilled, index) => {
        // Convert the 1D array index into 2D X and Y coordinates
        const x = index % cols;
        const y = Math.floor(index / cols);

        // Check if we are on a 5th line (but prevent drawing it on the absolute outer edge)
        const isThickRight = (x + 1) % 5 === 0 && x !== cols - 1;
        const isThickBottom = (y + 1) % 5 === 0 && y !== rows - 1;

        return (
          <div
            key={index}
            className={`
                    cell 
                    ${isFilled ? "filled" : ""} 
                    ${isThickRight ? "thick-right" : ""} 
                    ${isThickBottom ? "thick-bottom" : ""}
                    `}
            onClick={() => toggleCell(index)}
          ></div>
        );
      })}
    </div>
  );
}
