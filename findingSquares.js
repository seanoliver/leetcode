function createGrid(inputString) {
  return inputString.split(' ').map(el => el.split(''));
}

class Square {
  constructor (char, row, column, sideLength, offset) {
    this.char = char;
    this.row = row;
    this.column = column;
    this.sideLength = sideLength;
    this.offset = offset;
  }
}

function findSquares(inputString) {
  const matrix = createGrid(inputString);
  const squares = [];

  for (let row = 0; row < matrix.length -1; row++) {
    for (let column = 0; column < matrix[0].length -1; column++) {
      const maxLength = Math.min(matrix.length - row, matrix[0].length - column) - 1;

      for (let length = 1; length <= maxLength; length++) {

        for (let offset = 0; offset < length; offset++) {

          const topLeft = matrix[row][column+offset];
          const topRight = matrix[row+offset][column+length];
          const bottomRight = matrix[row-offset][column+length];
          const bottomLeft = matrix[row-length][column-offset];

          if (topLeft === topRight &&
              topLeft === bottomRight &&
              topLeft === bottomLeft) {
                squares.push(topLeft, row, column, length, offset);
              }

        }
      }
    }
  }

  return squares;
}


// const input = "ABBA UBBU ALAN ALDA";
const input = 'ASTRID SYSTAT RSTUVW STAMPS WRISTS';

// console.log(findSquares(input));
console.log(findSquares(input));