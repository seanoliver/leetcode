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
	let placed: number = 0;
	const result: string[][] = [];

	let current: string[] = new Array(n).fill('.'.repeat(n));

	backtrack(current, 0);

	function backtrack(current: string[], row: number) {
		// recursive case: placed === n
		if (row === n) {
			result.push([...current]);
			return;
		}

    const colCache: number[] = []; // left off here

		for (let col = 0; col < n; col++) {
			if (inCol(current, col)) continue;
			if (inDiag(current, row, col)) continue;

			const add = current[row].split('');
			add[col] = 'Q';
			current[row] = add.join();


			backtrack([...current], row + 1);

			const remove = current[row].split('');
			remove[col] = '.';
			current[row] = remove.join();
		}
	}

	function inCol(current: string[], col: number): boolean {
		// transpose column
		for (let i = 0; i < current.length; i++) {
			if (current[i][col] === 'Q') return true;
		}

		return false;
	}

	function inDiag(current: string[], x: number, y: number): boolean {
		for (let i = 1; i < current.length; i++) {
			if (
				x - i >= 0 &&
				x + i < current.length &&
				y - i >= 0 &&
				y + i < current.length
			) {
				if (
					current[x + i][y + i] === 'Q' ||
					current[x - i][y + i] === 'Q' ||
					current[x + i][y - i] === 'Q' ||
					current[x - i][y - i] === 'Q'
				) {
					return true;
				}
			}
		}
		return false;
	}

	return result;
}
