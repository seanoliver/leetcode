// The n-queens puzzle is the problem of placing n queens on an
// n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle.
// You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens'
// placement, where 'Q' and '.' both indicate a queen and an empty space,
// respectively.

// Example 1:
// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle
// as shown above

// Example 2:
// Input: n = 1
// Output: [["Q"]]

// Constraints:
// 1 <= n <= 9

// Validity Constraints:
// -> Max 1 Q per row
// -> Max 1 Q per col
// -> Max 1 Q per diag

function solveNQueens(n: number): string[][] {
	const colCache: number[] = [];
	const result: string[][] = [];

	let current: string[] = new Array(n).fill('.'.repeat(n));

	backtrack(current, 0, colCache);

	function backtrack(current: string[], row: number, colCache: number[]) {
		if (row === n) {
			result.push([...current]);
			return;
		}

		for (let col = 0; col < n; col++) {
			if (colCache.includes(col)) continue;
			if (inDiag(current, row, col)) continue;

			current[row] = replaceAt(current[row], col, 'Q');
			colCache.push(col);

			backtrack([...current], row + 1, colCache);

			current[row] = replaceAt(current[row], col, '.');
			colCache.pop();
		}
	}

	function inDiag(current: string[], x: number, y: number): boolean {
		for (let i = 1; i < current.length; i++) {
			if (
				x + i < current.length &&
				y + i < current.length &&
				current[x + i][y + i] === 'Q'
			)
				return true;
			if (
				x - i >= 0 &&
				y + i < current.length &&
				current[x - i][y + i] === 'Q'
			)
				return true;
			if (
				x + i < current.length &&
				y - i >= 0 &&
				current[x + i][y - i] === 'Q'
			)
				return true;
			if (
				x - i >= 0 &&
				y - i >= 0 &&
				current[x - i][y - i] === 'Q'
			)
				return true;
		}
		return false;
	}
	function replaceAt(string: string, index: number, replace: string) {
		return string.substring(0, index) + replace + string.substring(index + 1);
	}

	return result;
}
