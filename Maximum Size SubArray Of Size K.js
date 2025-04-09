function maxSubarraySum(nums, k) {
  if (nums.length < k) return null;

  let windowSum = 0;

  // Sum awal
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum; // HARUS DI SINI

  // Geser window
  for (let end = k; end < nums.length; end++) {
    windowSum += nums[end] - nums[end - k];
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
console.log(maxSubarraySum([1, 9, 3, 4, 5, 6], 2)); // Output: 12
