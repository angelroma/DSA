function longestSubarray(nums: number[], k: number): number {
  // Initialize pointers and variables:
  let left = 0;
  let curr = 0;
  let ans = 0;

  // Iterate through the array using the right pointer
  for (let right = 0; right < nums.length; right++) {
    // Add the current number to the running sum
    curr += nums[right];

    // If the sum exceeds k, shrink the window from the left
    while (curr > k) {
      curr -= nums[left]; // Remove the leftmost element from the sum
      left++; // Move the left pointer to the right
    }

    // Update the maximum length found so far
    ans = Math.max(ans, right - left + 1);
  }

  // Return the maximum length of a subarray whose sum is ≤ k
  return ans;
}

// Example usage
// const nums = [1, 2, 3, 4, 5];
// const k = 9;
console.log(longestSubarray([1, 2, 3, 4, 5], 9)); // Expected output: 3

/*
  Example Walkthrough:
  nums = [1, 2, 3, 4, 5], k = 9
  
  | Step | Right Pointer | Added Number | Total Weight (curr) | Action Taken          | Subarray      | Max Length (ans) |
  |------|--------------|--------------|----------------------|-----------------------|---------------|-----------------|
  | 1    | 0           | 1            | 1                    | Valid                 | [1]           | 1               |
  | 2    | 1           | 2            | 3                    | Valid                 | [1,2]         | 2               |
  | 3    | 2           | 3            | 6                    | Valid                 | [1,2,3]       | 3               |
  | 4    | 3           | 4            | 10                   | Too heavy! Remove 1   | [2,3,4]       | 3               |
  | 5    | 4           | 5            | 14                   | Too heavy! Remove 2, 3| [4,5]         | 3               |
  
  Final output: 3 (since the longest valid subarray is of length 3)
  */
