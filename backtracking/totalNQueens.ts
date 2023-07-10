// The n-queens puzzle is the problem of placing n queens on an n x n
// chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the
// n-queens puzzle.

// Example 1:
// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle
// as shown.

// Example 2:
// Input: n = 1
// Output: 1

// Constraints:
// 1 <= n <= 9

function totalNQueens(n: number): number {
	const colCache: number[] = [];
	let result: number = 0;

	let current: string[] = new Array(n).fill('.'.repeat(n));

	backtrack(current, 0, colCache);

	function backtrack(current: string[], row: number, colCache: number[]) {
		if (row === n) {
			result++;
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
			if (x - i >= 0 && y + i < current.length && current[x - i][y + i] === 'Q')
				return true;
			if (x + i < current.length && y - i >= 0 && current[x + i][y - i] === 'Q')
				return true;
			if (x - i >= 0 && y - i >= 0 && current[x - i][y - i] === 'Q')
				return true;
		}
		return false;
	}
	function replaceAt(string: string, index: number, replace: string) {
		return string.substring(0, index) + replace + string.substring(index + 1);
	}

	return result;
}
