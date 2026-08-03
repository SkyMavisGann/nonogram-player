import { useState } from "react";

interface GridProps {
  rows: number;
  cols: number;
  size: number;
}

export default function Grid({ rows, cols, size}: GridProps) {

    const [gridData, setGridData] = useState(Array(rows * cols).fill(false));


    //flips i's element boolean
    const toggleCell = (i: number) => {
        const newGridData = [...gridData];
        newGridData[i] = !newGridData[i];

        setGridData(newGridData);
    }

    return (
        <div className="nonogram-grid"
        style={{
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gridTemplateRows: `repeat(${rows}, ${size}px)`
      }}>

            {gridData.map((isFilled, index) => (
                <div 
                key={index} 
                className={`cell ${isFilled ? 'filled' : ''}`} 
                onClick = {() => toggleCell(index)}
                ></div>
                
            ))}
            
        </div>
        
    );
}