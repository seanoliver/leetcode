"use strict";
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
function snakesAndLadders(board) {
    let n = board.length;
    let currSpace = 0;
    const end = n ** n;
    let moves = 0;
    /** choose `next` between curr + 1 and min(curr + 6, n^2) */
    const _getNext = (curr) => {
        const min = curr + 1;
        const max = curr + 6;
        return Math.round(Math.random() * (max - min + 1)) + min;
    };
    /** Return the x, y coordinates for the new space. */
    const _getNextCoordinates = (next) => {
        const row = n - Math.ceil(next / n);
        const base = n * row;
        const rem = next - base;
        const dir = next % n;
        const col = dir ? rem : n - rem;
        return [row, col];
    };
    while (currSpace !== end) {
        console.log('in moves', moves);
        console.log('currSpace', currSpace);
        let next = Math.min(_getNext(currSpace), end);
        console.log('next', next);
        if (next === end) {
            moves++;
            return moves;
        }
        // find the coordinates of the next space
        const [row, col] = _getNextCoordinates(next);
        console.log('row', row);
        console.log('col', col);
        if (!row || !col)
            return -1;
        const nextVal = board[row][col];
        console.log('nextVal', nextVal);
        if (nextVal === -1) {
            currSpace = next;
        }
        else {
            currSpace = nextVal;
        }
        moves++;
        console.log('out moves', moves);
        console.log('--------------');
    }
    return moves;
}
const board = [
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
];
console.log(snakesAndLadders(board));
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
