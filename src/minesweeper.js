class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        console.log("Game Over\!");
        this._board.print();
    } else if (!this._board.hasSafeTiles()) {
        console.log("Your A Winner\!");
        this._board.print();
    } else {
        console.log("Current Board\:");
        this._board.print();
    }
  }
}

class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = (numberOfRows * numberOfColumns);
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {
    // if you already flipped the tile you just want to return and end the function
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
        console.log('This tile has already been flipped\!');
        return
    }
    // if the bombBoard does have a bomb then you want to affect the playerboard and put a B
    if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      // it will put a number where the empty space was to tell you if you are close to bombs
        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1]
        ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns ) {
          if (this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B' ) {
              numberOfBombs++;
          }
      }
    })
    return numberOfBombs;
  }

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  print() {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
      let board = [];
      // for loop iterating through numberOfRows
      for (let i = 0; i < numberOfRows; i++) {
        // Create an empty row array
        let row = [];
        // for loop iterating through numberOfColumns
        for (let j = 0; j < numberOfColumns; j++) {
          // Push the empty spaces onto the row array
          row.push(' ');
        }
        // Push the row onto the board array
        board.push(row);
      }
      // Return the board array
      return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    let board = [];
    // for loop iterating through numberOfRows
    for (let i = 0; i < numberOfRows; i++) {
      // Create an empty row array
      let row = [];
      // for loop iterating through numberOfColumns
      for (let j = 0; j < numberOfColumns; j++) {
        // Push the empty spaces onto the row array
        row.push(null);
      }
      // Push the row onto the board array
      board.push(row);
  }

let numberOfBombsPlaced = 0;
while (numberOfBombsPlaced < numberOfBombs) {
    // Generate a random row index
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    // Generate a random column index
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
     // Place the bomb at that row and columns
        // The if statement should check that there is not a 'B' on the board at randomRowIndex and randomColumnIndex.
          if (board[randomRowIndex][randomColumnIndex] !== 'B') {
            //If there isn't a 'B' at that location, then we'll place a bomb there
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
          }
  }
  // Return the board array
  return board;
  }
}

const g = new Game(3, 3, 3);
g.playMove(0, 0);
g.playMove(2, 3);
g.playMove(1, 1);
