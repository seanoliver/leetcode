// board = number[][]
// min = 1
// max = n^2

// start --> board[n-1][0] (bottom left)
// -> right -> up -> left -> up -> right -> up -> left -> ...

// Steps
// - choose `next` between curr + 1 and min(curr + 6, n^2)
// - if next !== -1, move to space indicated by val at next
// - only one snake/ladder per turn, though
// - otherwise move to next

// Return
// Count of fewest moves to get to n^2
// if not possible, return -1

// function snakesAndLadders(board: number[][]): number {
// 	let n = board.length;
// 	let currSpace = 0;
// 	const end = n ** n;
// 	let moves = 0;

// 	/** choose `next` between curr + 1 and min(curr + 6, n^2) */
// 	const _getNext = (curr: number): number => {
// 		const min = curr + 1;
// 		const max = curr + 6;
// 		return Math.round(Math.random() * (max - min + 1)) + min;
// 	};

// 	/** Return the x, y coordinates for the new space. */
// 	const _getNextCoordinates = (next: number): number[] => {
// 		const row = n - Math.ceil(next / n);
// 		const base = n * row;
// 		const rem = next - base;
// 		const dir = next % n;
// 		const col = dir ? rem : n - rem;

// 		return [row, col];
// 	};

// 	while (currSpace !== end) {
// 		console.log('in moves', moves);
// 		console.log('currSpace', currSpace);
// 		let next = Math.min(_getNext(currSpace), end);

// 		console.log('next', next);

// 		if (next === end) {
// 			moves++;
// 			return moves;
// 		}
// 		// find the coordinates of the next space
// 		const [row, col] = _getNextCoordinates(next);
// 		console.log('row', row);
// 		console.log('col', col);

// 		if (!row || !col) return -1;

// 		const nextVal = board[row][col];
// 		console.log('nextVal', nextVal);

// 		if (nextVal === -1) {
// 			currSpace = next;
// 		} else {
// 			currSpace = nextVal;
// 		}
// 		moves++;
// 		console.log('out moves', moves);
// 		console.log('--------------');
// 	}

// 	return moves;
// }

// /**
//  * Convert a number to its x, y coordinates on the board.
//  */
// const numToCoordinates = (num: number, n: number): number[] => {
//   console.log(`num: ${num}, n: ${n}`); // it's important to log inputs

//   if (num % n === 0) {
//     const col = 0;
//     const row = (n - Math.floor(num / n)) - 1;
//   console.log(`row: ${row}`); // to see the value of row
//     console.log(`Entering if condition, col: ${col}`); // to see if we entered the condition and the value of col
//     return [row, col];
//   } else {
//     const row = (n - Math.floor(num / n)) - 1;

//     const base = n * row;
//     console.log(`Entering else condition, base: ${base}`); // to see if we entered the else condition and the value of base

//     const dir = num % n;
//     console.log(`dir: ${dir}`); // to see the value of dir

//     const col = dir ? (n - num) - 1 : n - 1;
//     console.log(`col: ${col}`); // to see the value of col

//     return [row, col];
//   }
// };

type Board = number[][];

const snakesAndLadders = (board: Board): number => {
  const n = board.length;
  const distance: number[] = new Array(n * n).fill(Infinity);
  distance[0] = 0;

  const flatten = (num: number): number[] => {
    const row = n - Math.floor((num + n - 1) / n);
    let col = (num - 1) % n;
    if (row % 2 === 0) {
      col = n - 1 - col;
    }
    return [row - 1, col];
  };

  for (let num = 1; num < n * n; num++) {
    for (let roll = 1; roll <= 6; roll++) {
      if (roll + num > n * n) break;
      let [nx, ny] = flatten(roll + num);
      if (board[nx][ny] === -1) {
        distance[roll + num - 1] = Math.min(distance[roll + num - 1], distance[num - 1] + 1);
      } else {
        distance[board[nx][ny] - 1] = Math.min(distance[board[nx][ny] - 1], distance[num - 1] + 1);
      }
    }
  }
  return distance[n * n - 1] === Infinity ? -1 : distance[n * n - 1];
};



const board = [
// 36  35  34  33  32  31
	[-1, -1, -1, -1, -1, -1],

// 25  26  27  28  29  30
	[-1, -1, -1, -1, -1, -1],

// 24  23  22  21  20  19
	[-1, -1, -1, -1, -1, -1],

// 13  14  15  16  17  18
	[-1, 35, -1, -1, 13, -1],

// 12  11  10   9   8   7
	[-1, -1, -1, -1, -1, -1],

//  1   2   3   4   5   6
	[-1, 15, -1, -1, -1, -1],
];

console.log(snakesAndLadders(board));
// expect [4, 2]

// console.log('board 1: 6x6');
// console.log('6x61 output: ', snakesAndLadders(board));
// console.log('--------------');

// const board2 = [
// 	[-1, -1],
// 	[-1, 3],
// ];

// console.log('board 2: 2x2');
// console.log('2x2 output: ', snakesAndLadders(board2));

// [[-1,4], 4 3
//  [-1,3]] 1 2
// position = board[a][b]

// n = 6
// end = n ^2

// y = 3

// y % n
// row = floor(y / n)

// row % 2
//  0 == left
// 1 == right
