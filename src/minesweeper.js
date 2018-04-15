const printBoard = board => {
  console.log('Current Board: ')
  // array.join combine elements in an array string 
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
//console.log(board);

printBoard(board);