const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
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
};

//  console.log(generatePlayerBoard(2, 2));
// [ [' ', ' '], [' ', ' '] ]

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
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
  /*****
  An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
  */
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
      // Generate a random row index
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      // Generate a random column index
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
       // Place the bomb at that row and columns
      board[randomRowIndex][randomColumnIndex] = 'B';
      // Increment numberOfBombsPlaced
      numberOfBombsPlaced++;
  }
  // Return the board array
  return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

// Remember that the bomb board is randomly generated, so your output may not be an exact replica of the output depicted in the example above. Run your code a couple of more times and notice how the bombs rearrange themselves randomly.
// Your bomb board may sometimes have fewer bombs on it than what was specified in the function call. This is due to the missing control flow code mentioned in Step 26.
// Your bomb board will not appear as neatly formatted as the player board. This is because you are adding null to its board. This is fine, as this is a board that is intended to only hold information, and not to be printed. We are printing here to demonstrate the utility of the generateBombBoard() function.

// Reflect
// How might you improve the generateBombBoard() function so that duplicate bombs aren't added to squares that already contain bombs?
// We have a function that generates the player board. How will a player actually interact with this board?
// Minesweeper will inform you if there is a bomb adjacent to the square you click (if it doesn't contain a bomb itself). How might you implement this functionality into the game?
