const exampleBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
//console.log(exampleBoard);

const printBoard = board => {
  console.log('Current Board: ')
  // array.join combine elements in an array string 
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

printBoard(exampleBoard);
exampleBoard[0][1]='1';
exampleBoard[2][2]='B';
printBoard(exampleBoard);

// You created a printBoard() function. How might it be improved so that each nested array doesn't have to be manually joined?
//Once again, the game board was hard coded (board). How might you dynamically generate this in the future?