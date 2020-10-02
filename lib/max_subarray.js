
// Time Complexity: O(n), where n is the length of the input array
// Space Complexity: O(1)

function maxSubArray(nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return nums[0];

  let maxSoFar = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSoFar = Math.max(currentMax, maxSoFar);
  }

  return maxSoFar;
}

module.exports = {
  maxSubArray
}