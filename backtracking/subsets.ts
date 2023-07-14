// Given an integer array nums of unique elements, return all possible
// subsets (the power set).

// The solution set must not contain duplicate subsets.
// Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

function subsets(nums: number[]): number[][] {
	// init result array
	const result: number[][] = [];
	// init current array
	const current: number[] = [];

  backtrack(0);

	// backtrack (startingIndex)
	function backtrack(startIndex: number) {
    result.push([...current]);

    // for i = startingIndex to nums.length
		for (let i = startIndex; i < nums.length; i++) {
			// push(nums[i])
			current.push(nums[i]);
			// backtrack (i + 1)
			backtrack(i + 1);
			// pop()
			current.pop();
		}
	}

	function inResult(current: number[]): boolean {
		for (let i = 0; i < result.length; i++) {
			if (current.join('') === result[i].join('')) return true;
		}
		return false;
	}
	// return result array
	return result;
}
