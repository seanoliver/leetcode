// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Example 1:

// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
// It is guaranteed that the input board has only one solution.

/**
 * Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const colCache: { [colNum: string]: Set<string> } = {};
  const boxCache: { [boxNum: string]: Set<string> } = {};

  populateCaches();
  backtrack(0, 0);

  function populateCaches(): void {
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        if (board[x][y] !== '.') {
          cacheItem(board[x][y], x, y);
        }
      }
    }
  }

  function cacheItem(value: string, x: number, y: number): void {
    colCache[y.toString()] = colCache[y.toString()] || new Set();
    colCache[y.toString()].add(value);

    boxCache[currentBox(x, y)] = boxCache[currentBox(x, y)] || new Set();
    boxCache[currentBox(x, y)].add(value);
  }

  function deCacheLastItem(value: string, x: number, y: number): void {
    colCache[y.toString()].delete(value);
    boxCache[currentBox(x, y)].delete(value);
  }

  function backtrack(row: number, col: number): boolean {
    if (row === 9) return true;

    if (board[row][col] === '.') {
      for (let i = 1; i <= 9; i++) {
        let val = i.toString();
        if (!board[row].includes(val) &&
            !colCache[col].has(val) &&
            !boxCache[currentBox(row, col)]?.has(val)) {

          board[row][col] = val;
          cacheItem(val, row, col);

          if (nextCell(row, col)) return true; // If next cell leads to a valid solution, return true

          board[row][col] = '.'; // If next cell doesn't lead to a valid solution, reset this cell
          deCacheLastItem(val, row, col);
        }
      }
    } else {
      if (nextCell(row, col)) return true;
    }

    return false;
  }

  function nextCell(row: number, col: number): boolean {
    if (col === 8) {
      return backtrack(row + 1, 0);
    } else {
      return backtrack(row, col + 1);
    }
  }

  function currentBox(row: number, col: number): number {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3);
  }
}
