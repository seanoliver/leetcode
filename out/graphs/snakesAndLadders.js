"use strict";
// board = number[][]
// min = 1
// max = n^2
const snakesAndLadders = (board) => {
    const n = board.length;
    const distance = new Array(n * n).fill(Infinity);
    distance[0] = 0;
    const flatten = (num) => {
        const row = n - Math.floor((num + n - 1) / n);
        let col = (num - 1) % n;
        if (row % 2 === 0) {
            col = n - 1 - col;
        }
        return [row - 1, col];
    };
    for (let num = 1; num < n * n; num++) {
        for (let roll = 1; roll <= 6; roll++) {
            if (roll + num > n * n)
                break;
            let [nx, ny] = flatten(roll + num);
            if (board[nx][ny] === -1) {
                distance[roll + num - 1] = Math.min(distance[roll + num - 1], distance[num - 1] + 1);
            }
            else {
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
