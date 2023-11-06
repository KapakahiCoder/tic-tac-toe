const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard(props) {
  let gameBoard = initialGameBoard;

  for (const turn of props.turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
    console.log(gameBoard);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => props.onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
