function arithmeticTriplets(nums: number[], diff: number): number {
    let count = 0;
    
    // Iterate through each number in the array
    for (let i = 0; i < nums.length; i++) {
        let firstMatch = false, secondMatch = false;
        console.log(`Checking nums[${i}] = ${nums[i]}`);
        
        // Check if nums[i] + diff exists in the array
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i] + diff) {
                firstMatch = true;
                console.log(`  Found first match: nums[${j}] = ${nums[j]} (nums[${i}] + ${diff})`);
            }
            if (nums[j] === nums[i] + 2 * diff) {
                secondMatch = true;
                console.log(`  Found second match: nums[${j}] = ${nums[j]} (nums[${i}] + 2 * ${diff})`);
            }
        }
        
        // If both conditions are met, we found a valid triplet
        if (firstMatch && secondMatch) {
            count++;
            console.log(`  Triplet found with nums[${i}] = ${nums[i]}`);
        }
    }
    
    console.log(`Total triplets found: ${count}`);
    return count;
}

// Example test cases with step-by-step explanation

// Example 1: nums = [0,1,4,6,7,10], diff = 3
console.log("Test Case 1:");
console.log(arithmeticTriplets([0,1,4,6,7,10], 3)); // Output: 2

// // Example 2: nums = [4,5,6,7,8,9], diff = 2
// console.log("Test Case 2:");
// console.log(arithmeticTriplets([4,5,6,7,8,9], 2)); // Output: 2
