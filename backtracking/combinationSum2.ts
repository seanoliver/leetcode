// Given a collection of candidate numbers (candidates) and a target
// number (target), find all unique combinations in candidates where the
// candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]

// Constraints:
// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

function combinationSum2(candidates: number[], target: number): number[][] {
	// solutionSet
	const solutionSet: number[][] = [];

  // sort candidates
  candidates.sort((a, b) => a - b);

  backtrack();

  // backtracking function (startIndex = 0, currentSum = 0, currentArray = [])
	function backtrack(
		startIndex: number = 0,
		currentSum: number = 0,
		currentArray: number[] = []
	) {
    // base case
    // if currentSum === target push currentArray into solutionSet
    if (currentSum === target) {
      solutionSet.push([...currentArray]);
      return;
    }

    // recursive case
    for (let i = startIndex; i < candidates.length; i++) {

      // skip duplicate consecutive items in newly sorted array
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;

      const newSum = candidates[i] + currentSum;

      if (newSum <= target) {
        currentArray.push(candidates[i]);
        backtrack(i + 1, newSum, [...currentArray])
        currentArray.pop();
      }
    }

  }

  return solutionSet;

}
