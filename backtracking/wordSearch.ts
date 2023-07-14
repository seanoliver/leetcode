// Given an m x n grid of characters board and a string word,
// return true if word exists in the grid.

// The word can be constructed from letters of sequentially
// adjacent cells, where adjacent cells are horizontally or vertically
// neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [
// ["A","B","C","E"],
// ["S","F","C","S"],
// ["A","D","E","E"]
// ],
// word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [
// ["A","B","C","E"],
// ["S","F","C","S"],
// ["A","D","E","E"]
// ], word = "SEE"
// Output: true

// Example 3:
// Input: board = [
// ["A","B","C","E"],
// ["S","F","C","S"],
// ["A","D","E","E"]
// ], word = "ABCB"
// Output: false

// Constraints:
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

// Follow up: Could you use search pruning to make your solution faster with
// a larger board?

function exist(board: string[][], word: string): boolean {
	const solution: string[] = [];

	const firstLetter = word[0];

	// search for first letter
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === firstLetter) {
				solution.push(board[i][j]);
				board[i][j] = '*';
				backtrack(i, j);
				board[i][j] = firstLetter;
				solution.pop();
			}
		}
	}

	function backtrack(x: number, y: number) {
		// base case: solution.join('') === word
		const currSolution = solution.join('');
		if (currSolution === word) return true;

		// recursive case
		const nextLetter = word.slice(currSolution.length, currSolution.length + 1);
		const directions = getValidDirections(x, y);
		for (let [dirX, dirY] of directions) {
			if (board[dirX][dirY] === nextLetter) {
				solution.push(nextLetter);
				// and remove from grid
				board[dirX][dirY] = '*';

				// backtrack
				backtrack(dirX, dirY);

				// pop from solution and put back on grid
				solution.pop();
				board[dirX][dirY] = nextLetter;
			}
		}
		return false;
	}

	// get an array of tuples representing coordinates of where to look next
	function getValidDirections(x: number, y: number): number[][] {
		const directions: number[][] = [];

		if (board[x - 1]) directions.push([x - 1, y]);
		if (board[x][y - 1]) directions.push([x, y - 1]);
		if (board[x][y + 1]) directions.push([x, y + 1]);
		if (board[x + 1]) directions.push([x + 1, y]);

		return directions;
	}

	return solution.join('') === word;
	// return result
}
