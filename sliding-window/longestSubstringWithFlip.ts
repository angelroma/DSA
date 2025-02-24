/*
  You are given a binary string s (a string containing only "0" and "1").
  You may choose up to one "0" and flip it to a "1".
  What is the length of the longest substring achievable that contains only "1"?
  
  For example, given s = "1101100111", the answer is 5.
  If you perform the flip at index 2, the string becomes "1111100111".
  */

function longestSubstringWithFlip(s: string): number {
  // Your solution goes here
  // Initialize variables to keep track of the window and the longest substring

  let left = 0;
  let zeros = 0;
  let res = 0;

  for (let right = 0; right < s.length; right++) {
    if (s[right] === "0") {
      zeros++;
    }

    while (zeros > 1) {
      if (s[left] === "0") {
        zeros--;
      }
      left++;
    }

    res = Math.max(res, right - left + 1);
  }

  return res; // Placeholder return, replace with actual logic
}

// Example usage
const s = "1101100111";
console.log(longestSubstringWithFlip(s)); // Expected output depends on the solution

("1101100111");

("1");
("1, 1");
("1, 1, 0");

// 1
// 1+1
// 1+1+0 Here there is a 0, Can I flip it?
// YES -> so then flip it and continue
// 3+1
// 4+0 Here there is a 0, Can I flip it?
// NO > There is already a flipped 0.
// Go back to the last fliped 0 BUT + 1
