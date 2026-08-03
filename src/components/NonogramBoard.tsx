import Grid from "./Grid";

type NonogramBoardProps = {
    cellSize: number;
}

export default function NonogramBoard({ cellSize }: NonogramBoardProps) {
    const topClues = ["1", "2 1", "1", "2 1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
    const leftClues = ["1 1", "1 1", "0", "1 1", "3", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];


    const colCount = topClues.length;
    const rowCount = leftClues.length;


    return (

        
        <div className="nonogram-board"
        style={{ 
          gridTemplateColumns: `max-content max-content`,
          gridTemplateRows: `max-content max-content`
        }}>

            

            <div className="empty-corner"></div>

            <div className="top-clues"
            style={{ gridTemplateColumns: `repeat(${colCount}, ${cellSize}px)` }}>
                {topClues.map((clue, index) => (
                    <div key={index} className="clue-cell top-clue-cell">
                        {clue.split(' ').map((num, i) => (
                            <span key={i}>{num}</span>
                        ))}
                    </div>
                ))}
            </div>

            <div className="left-clues"
            style={{ gridTemplateRows: `repeat(${rowCount}, ${cellSize}px)` }}>
                {leftClues.map((clue, index) => (
                    <div key={index} className="clue-cell left-clue-cell">
                        {clue.split(' ').map((num, i) => (
                            <span key={i}>{num}</span>
                        ))}
                    </div>
                ))}
            </div>

            <Grid rows={rowCount} cols={colCount} size={cellSize}/>
        </div>
    );
}