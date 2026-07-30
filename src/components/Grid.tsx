import { useState } from "react";

export default function Grid() {

    const [gridData, setGridData] = useState(Array(25).fill(false));


    const toggleCell = (i: number) => {
        const newGridData = [...gridData];
        newGridData[i] = !newGridData[i];

        setGridData(newGridData);
    }

    return (
        <div className="nonogram-grid">
            {/*waduidw*/}
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