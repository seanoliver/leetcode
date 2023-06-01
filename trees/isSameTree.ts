import { TreeNode } from './typedef';

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

function buildTreeFromArray(arr: (number | null)[], index: number = 0): TreeNode | null {
	if (index < arr.length) {
		let node: TreeNode = new TreeNode(arr[index]);
		node.left = buildTreeFromArray(arr, 2 * index + 1);
		node.right = buildTreeFromArray(arr, 2 * index + 2);
		return node;
	}
	return null;
}

let p: (number | null)[] = [1, 2];
let q: (number | null)[] = [1, null, 2];

let treeP = buildTreeFromArray(p);
let treeQ = buildTreeFromArray(q);

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (p === null && q === null) return true;
	if (p === null || q === null) return false;
	if (p?.val !== q?.val) return false;

	const left = isSameTree(p.left, q.left);
	const right = isSameTree(p.right, q.right);

	return left && right;
}
console.log(isSameTree(treeP, treeQ));
