// Given two integers n and k, return all possible combinations of
// k numbers chosen from the range [1, n].

// You may return the answer in any order.

// Example 1:
// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are
// considered to be the same combination.

// Example 2:
// Input: n = 1, k = 1
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.

// Constraints:
// 1 <= n <= 20
// 1 <= k <= n

function combine(n: number, k: number): number[][] {
	// result array init
	const result: number[][] = [];
	// current array init
	const current: number[] = [];

  backtrack(1);

	// backtrack
	function backtrack(startNum: number) {
		// if current.length === k
		if (current.length === k) {
			// append current to result array
			result.push([...current]);
			// return
			return;
		}

		// for i to n(passed in)
		for (let i = startNum; i <= n; i++) {
			// push i into current
			current.push(i);
			// backtrack (i + 1)
			backtrack(i + 1);
			// remove i from current
			current.pop();
		}

	}
	// return result array
  return result;
}
