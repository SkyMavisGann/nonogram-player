import Grid from "./Grid";

export default function NonogramBoard() {
    const topClues = ["1", "2 1", "1", "2 1", "1"];
    const leftClues = ["1 1", "1 1", "0", "1 1", "3"];

    return (
        <div className="nonogram-board">
            <div className="empty-corner"></div>

            <div className="top-clues">
                {topClues.map((clue, index) => (
                    <div key={index} className="clue-cell top-clue-cell">
                        {clue.split(' ').map((num, i) => (
                            <span key={i}>{num}</span>
                        ))}
                    </div>
                ))}
            </div>

            <div className="left-clues">
                {leftClues.map((clue, index) => (
                    <div key={index} className="clue-cell left-clue-cell">
                        {clue.split(' ').map((num, i) => (
                            <span key={i}>{num}</span>
                        ))}
                    </div>
                ))}
            </div>

            <Grid />
        </div>
    );
}