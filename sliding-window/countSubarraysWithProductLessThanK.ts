function countSubarraysWithProductLessThanK(nums: number[], k: number): number {
  // Your solution goes here
  // Initialize variables to keep track of the window and the count of valid subarrays
  let left = 0;
  let count = 0;
  let total = 1;
  for (let right = 0; right < nums.length; right++) {
    total *= nums[right];

    if (total < k) count++;
    else {
      left++;
      right = left;
      total = 1;
    }
  }

  return count; // Placeholder return, replace with actual logic
}

// Example usage
// const nums = [10, 5, 2, 6];
// const k = 100;
console.log(countSubarraysWithProductLessThanK([10, 5, 2, 6], 100)); // Expected output depends on the solution

/*
  Example 3:
  Given an array of positive integers nums and an integer k,
  return the number of subarrays where the product of all the elements in the subarray is strictly less than k.
  
  For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8.
  The subarrays with products less than k are:
  
  [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
  */
