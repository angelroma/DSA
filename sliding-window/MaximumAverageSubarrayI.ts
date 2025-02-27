//https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4594/
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
// Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104
function findMaxAverage(nums: number[], k: number): number {
  let left = 0;
  let maxAverage = 0;
  let curr = 0;
  let step = 1;
  for (let right = left; right < nums.length; right++) {
    curr += nums[right];
    console.log(`nums[right(${right})]`, nums[right], "==> ", curr);
    step++;
    while (step > k) {
      let result = curr / k;
      if (maxAverage === 0 || maxAverage < result) {
        maxAverage = result;
      }
      console.log("right - left > k", right - left > k);
      console.log("curr => ", curr);
      console.log("maxAverage: ", maxAverage);
      curr = 0;
      left++;
      right = left - 1;
      step = 1;
      console.log("step =>", step);
      console.log("left =>", left);
      console.log("right =>", right);
    }
  }

  return maxAverage;
}

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4).toPrecision(7));
console.log(findMaxAverage([-1], 1).toPrecision(7));
