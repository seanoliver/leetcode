// Given n pairs of parentheses, write a function to generate all combinations
// of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:
// 1 <= n <= 8

// Each valid combination will have 'n' open parentheses and 'n' close parentheses.
// How can we keep track of how many open and close parentheses we have added to our current combination?

// When is it valid to add an open parenthesis to our current combination?

// When is it valid to add a close parenthesis to our current combination?

// If we have added an open or close parenthesis to our combination, what do we need to do to 'backtrack'?

// How will we know when we have found a valid combination?

function generateParenthesis(n: number): string[] {
	if (n === 1) return ['()'];

  const answerSet: Set<string> = new Set();

	let solution: string = '';
	backtrack(solution);

	function backtrack(solution: string, opens: number = 0, closes: number = 0) {
		// base case: valid combination found
		if (solution.length === n * 2) {
			answerSet.add(solution);
			return;
		}

		// recursive case
		if (opens === 0) {
			solution += '(';
			opens++;
			backtrack(solution, opens, closes);
		}

		if (closes < opens) {
			solution += ')';
			closes++;
			backtrack(solution, opens, closes);
			solution = solution.slice(0, -1);
			closes--;
		}

		if (opens < n) {
			solution += '(';
			opens++;
			backtrack(solution, opens, closes);
			solution = solution.slice(0, -1);
			opens--;
		}
	}
  return [...answerSet];
}
