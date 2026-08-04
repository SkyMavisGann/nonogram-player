import Grid from "./Grid";

type NonogramBoardProps = {
  cellSize: number;
};

export default function NonogramBoard({ cellSize }: NonogramBoardProps) {
  const topClues = [
    "6 5",
    "8 2 2",
    "1 3 3 2",
    "1 2 3 2",
    "1 2 3 2",
    "2 2 4 2",
    "7 2 2 2",
    "8 4",
    "7 3",
    "1 7",
    "1 10",
    "7 2 3",
    "8 2 2",
    "7 5 2",
    "2 2 3 2",
    "1 2 2 2",
    "1 2 6",
    "1 3",
    "8",
    "6",
  ];
  const leftClues = [
    "",
    "",
    "6 6",
    "2 2 2 2",
    "2 2 2 2",
    "2 8 2",
    "2 3 3 2",
    "3 3 3 3",
    "18",
    "18",
    "6",
    "8",
    "2 2 1",
    "4 2 2",
    "17",
    "9 7",
    "1 2 1 1",
    "1 2 2 1",
    "7 6",
    "5 6",
  ];

  const colCount = topClues.length;
  const rowCount = leftClues.length;

  return (
    <div
      className="nonogram-board"
      style={{
        gridTemplateColumns: `max-content max-content`,
        gridTemplateRows: `max-content max-content`,
      }}
    >
      <div className="empty-corner"></div>

      <div
        className="top-clues"
        style={{ gridTemplateColumns: `repeat(${colCount}, ${cellSize}px)` }}
      >
        {topClues.map((clue, index) => (
          <div key={index} className="clue-cell top-clue-cell">
            {clue.split(" ").map((num, i) => (
              <span key={i}>{num}</span>
            ))}
          </div>
        ))}
      </div>

      <div
        className="left-clues"
        style={{ gridTemplateRows: `repeat(${rowCount}, ${cellSize}px)` }}
      >
        {leftClues.map((clue, index) => (
          <div key={index} className="clue-cell left-clue-cell">
            {clue.split(" ").map((num, i) => (
              <span key={i}>{num}</span>
            ))}
          </div>
        ))}
      </div>

      <Grid rows={rowCount} cols={colCount} size={cellSize} />
    </div>
  );
}
