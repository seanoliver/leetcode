// Given an integer array nums, return an array answer such that answer[i] is
// equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
// integer.

// You must write an algorithm that runs in O(n) time and without using the
// division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productExceptSelf(nums: number[]): number[] {

  const answer: number[] = new Array(nums.length).fill(1);

  let product = 1;
  // right product
  for (let i = 0; i < nums.length; i++) {
    answer[i] *= product;
    product *= nums[i];
  }

  product = 1;
  // left product
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= product;
    product *= nums[i];
  }

  return answer;

};
