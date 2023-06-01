function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  const result: number[][] = [];

  // Sort the input array
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Move left and right pointers
        left++;
        right--;

        // Skip duplicates for the second and third numbers
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

const nums1 = [-1, 0, 1, 2, -1, -4];
const nums2 = [0, 1, 1];
const nums3 = [0, 0, 0];

console.log('threeSum(nums1)', threeSum(nums1));
console.log('threeSum(nums2)', threeSum(nums2));
console.log('threeSum(nums3)', threeSum(nums3));

// Given an integer array nums,
// return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Constraints:
// ------------
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105
