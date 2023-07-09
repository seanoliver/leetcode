// Given a collection of numbers, nums, that might contain duplicates,
// return all possible unique permutations in any order.

// Example 1:
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Constraints:
// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

function permuteUnique(nums: number[]): number[][] {

  const result: number[][] = [];
  const used: boolean[] = new Array(nums.length).fill(false);

  nums = nums.sort((a, b) => b - a);

  backtrack();

  function backtrack(current: number[] = []) {
    // base case: current len === nums len
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // skip items already included in current
      if (used[i]) continue;
      // skip consecutive values
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      // add current item to current
      current.push(nums[i]);
      // mark current item as used
      used[i] = true;
      // backtrack
      backtrack([...current]);
      // remove current item from current
      current.pop();
      // unmark current item as used
      used[i] = false;

    }
  }
	return result;
}
