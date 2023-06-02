"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function isSameTree(p, q) {
    if (p === null && q === null)
        return true;
    if (p === null || q === null)
        return false;
    if ((p === null || p === void 0 ? void 0 : p.val) !== (q === null || q === void 0 ? void 0 : q.val))
        return false;
    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);
    return left && right;
}
// /** Test cases for debugging */
// function buildTreeFromArray(arr: (number | null)[], index: number = 0): TreeNode | null {
// 	if (index < arr.length) {
// 		let node: TreeNode = new TreeNode(arr[index]);
// 		node.left = buildTreeFromArray(arr, 2 * index + 1);
// 		node.right = buildTreeFromArray(arr, 2 * index + 2);
// 		return node;
// 	}
// 	return null;
// }
// let p: (number | null)[] = [1, 2];
// let q: (number | null)[] = [1, null, 2];
// let treeP = buildTreeFromArray(p);
// let treeQ = buildTreeFromArray(q);
// console.log(isSameTree(treeP, treeQ));
