// Given a string containing digits from 2-9 inclusive, return all possible
// letter combinations that the number could represent. Return the answer in
// any order.

// A mapping of digits to letters (just like on the telephone buttons) is given
// below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

function letterCombinations(digits: string): string[] {

  if (digits.length === 0) return [];

	// construct object containing alphabet letters assigned to phone digits
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const phoneLetters: { [num: string]: string[] } = {};

	let thirdIndex = 0;

	for (let i = 2; i <= 9; i++) {
		if (i === 7 || i === 9) {
			phoneLetters[i] = alphabet.slice(thirdIndex, (thirdIndex += 4));
		} else {
			phoneLetters[i] = alphabet.slice(thirdIndex, (thirdIndex += 3));
		}
	}

	// answer array string[]
	const answer: string[] = [];

  backtrack(0, '');

	// backtrack function (startIndex = 0, current = '')
	function backtrack(index: number, current: string) {
    // base case
    if (current.length === digits.length) {
      answer.push(current);
      return;
    }

    // recursive case
    for (let i = index; i < digits.length; i++) {
      let numStr = digits[i];
      for (let j = 0; j < phoneLetters[numStr].length; j++) {
        current += phoneLetters[numStr][j];
        backtrack(i + 1, current);
        current = current.slice(0, -1);
      }
    }

  }

  return answer;

}
