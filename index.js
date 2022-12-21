// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

const nums = [2, 7, 11, 15];
const target = 27;

function sumFunction(dataSet, target) {
  let pointer1 = 0;
  let pointer2 = 1;

  for (let i = 0; i < dataSet.length; i++) {
    if (dataSet[pointer1] + dataSet[pointer2] == target) {
      return [pointer1, pointer2];
    } else {
      pointer1++;
      pointer2++;
    }
  }
  return 'Target number is not the sum of any two indices in given array'
}

console.log(sumFunction(nums, target));
