function majorityElement(nums: number[]): number {

  type counterMap = Record<string, number>;
  let counter: counterMap = {};

  // iterate through each num in array
  for (let num of nums) {
    // if num already a key in counter, increment counter by 1
    // else initialize counter
    if (counter[num]) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  }

  // iterate through each item in counter
  for (let num in counter) {
    // if the value is more than n / 2, return value
    console.log('counter[num]', counter[num]);
    console.log('Number(num)', Number(num));
    if (counter[num] > nums.length/2) return Number(num);

  }

  // else return undefined
  return NaN;

}

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2