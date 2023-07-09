// Given an array nums of distinct integers, return all the possible
// permutations. You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

function permute(nums: number[]): number[][] {
	const result: number[][] = [];
	const used: boolean[] = new Array(nums.length).fill(false);

	backtrack([]);

	function backtrack(current: number[]) {
		// base case: length of current array === length of nums
		if (current.length === nums.length) {
			result.push([...current]);
			return;
		}

		// for i of nums
		for (let i = 0; i < nums.length; i++) {
			// Skip item if already used
			if (used[i]) continue;

			used[i] = true; // mark the number as used
			current.push(nums[i]);
			backtrack([...current]);
			current.pop();
			used[i] = false; // unmark the number after backtracking
		}
	}

	return result;
}
