function countUniqueChars(s) {
  const set = new Set(s);
  console.log(set);
  return set.size;
}

function sumOfUniqueSubstrings(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substr = s.substring(i, j);
      sum += countUniqueChars(substr);
    }
  }
  return sum;
}

console.log(sumOfUniqueSubstrings("ABC")); // Output: 10
console.log(sumOfUniqueSubstrings("ABA")); // Output: 8
console.log(sumOfUniqueSubstrings("LEETCODE")); // Output: 92