"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedef_1 = require("./typedef");
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function buildTreeFromArray(arr, index = 0) {
    if (index < arr.length) {
        let node = new typedef_1.TreeNode(arr[index]);
        node.left = buildTreeFromArray(arr, 2 * index + 1);
        node.right = buildTreeFromArray(arr, 2 * index + 2);
        return node;
    }
    return null;
}
let p = [1, 2];
let q = [1, null, 2];
let treeP = buildTreeFromArray(p);
let treeQ = buildTreeFromArray(q);
function isSameTree(p, q, depth = 0, dir = '') {
    depth++;
    console.log(' -> '.repeat(depth), dir, 'p', p === null || p === void 0 ? void 0 : p.val, 'q', q === null || q === void 0 ? void 0 : q.val);
    console.log('check 1');
    if (p === null && q === null)
        return true;
    console.log('check 2');
    if (p === null || q === null)
        return false;
    console.log('check 3');
    if ((p === null || p === void 0 ? void 0 : p.val) !== (q === null || q === void 0 ? void 0 : q.val))
        return false;
    console.log('check 4');
    const left = isSameTree(p.left, q.left, depth, 'left');
    console.log('check 5');
    const right = isSameTree(p.right, q.right, depth, 'right');
    console.log('check 6');
    return left && right;
}
console.log(isSameTree(treeP, treeQ));
