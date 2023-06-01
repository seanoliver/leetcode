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
function maxDepth(root) {
    let depth = 1;
    if (!root)
        return 0;
    if (!root.left && !root.right)
        return depth;
    let leftDepth = depth;
    let rightDepth = depth;
    if (root.left)
        leftDepth += maxDepth(root.left);
    if (root.right)
        rightDepth += maxDepth(root.right);
    return leftDepth > rightDepth ? leftDepth : rightDepth;
}
/** Two line solution */
function shortMaxDepth(root) {
    if (root === null)
        return 0;
    return Math.max(shortMaxDepth(root.left), shortMaxDepth(root.right)) + 1;
}
